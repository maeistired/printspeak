// @ts-check
const { test, expect } = require("@playwright/test");

// Maps each slide's data-protect boxes (percent of the original photo) through object-fit: cover and
// object-position, then reports any overlap with that slide's navy panel or the carousel controls.
async function faceOverlaps(page) {
  return page.evaluate(() => {
    const controls = document.querySelector(".hero-controls")?.getBoundingClientRect();
    const hits = [];
    document.querySelectorAll(".hero-slide").forEach((slide, n) => {
      const img = slide.querySelector("img[data-protect]");
      const panel = slide.querySelector(".hero-panel").getBoundingClientRect();
      const r = img.getBoundingClientRect();
      const nw = Number(img.getAttribute("width"));
      const nh = Number(img.getAttribute("height"));
      const scale = Math.max(r.width / nw, r.height / nh);
      const dw = nw * scale;
      const dh = nh * scale;
      const [px, py] = getComputedStyle(img).objectPosition.split(" ").map((v) => parseFloat(v) / 100);
      const ox = r.left + (r.width - dw) * px;
      const oy = r.top + (r.height - dh) * py;
      img.dataset.protect.split(",").forEach((spec) => {
        const [x, y, w, h] = spec.trim().split(/\s+/).map(Number);
        // Only the part of the box that is actually on screen matters.
        const box = {
          left: Math.max(r.left, ox + (x / 100) * dw),
          top: Math.max(r.top, oy + (y / 100) * dh),
          right: Math.min(r.right, ox + ((x + w) / 100) * dw),
          bottom: Math.min(r.bottom, oy + ((y + h) / 100) * dh)
        };
        if (box.right <= box.left || box.bottom <= box.top) return;
        for (const [name, rect] of [["panel", panel], ["controls", controls]]) {
          if (!rect || rect.width === 0) continue;
          const ix = Math.min(box.right, rect.right) - Math.max(box.left, rect.left);
          const iy = Math.min(box.bottom, rect.bottom) - Math.max(box.top, rect.top);
          if (ix > 0 && iy > 0) hits.push(`slide ${n + 1} box "${spec.trim()}" under ${name} by ${Math.round(iy)}px`);
        }
      });
    });
    return hits;
  });
}

test.describe("home hero carousel", () => {
  const sizes = [[1920, 1080], [1440, 900], [1366, 768], [1280, 800], [1024, 768], [820, 1180], [390, 844]];
  for (const [width, height] of sizes) {
    test(`at ${width}x${height} the frame holds everything, fits the screen and never covers a face`, async ({ page, isMobile }) => {
      test.skip(isMobile, "viewport sizes are set explicitly");
      await page.setViewportSize({ width, height });
      await page.goto("/index.html");
      await expect(page.locator(".hero-controls")).toBeVisible();
      expect(await faceOverlaps(page)).toEqual([]);

      const layout = await page.evaluate(() => {
        const box = (el) => el.getBoundingClientRect();
        const frame = box(document.querySelector(".hero-stage"));
        const controls = box(document.querySelector(".hero-controls"));
        const inside = (r) => r.left >= frame.left - 0.5 && r.right <= frame.right + 0.5 && r.top >= frame.top - 0.5 && r.bottom <= frame.bottom + 0.5;
        const meets = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
        const panels = [...document.querySelectorAll(".hero-panel")];
        return {
          contained: inside(controls) && panels.every((p) => inside(box(p))),
          // The controls never sit on a panel's text or buttons.
          clash: panels.some((p) => [...p.children].some((c) => meets(box(c), controls))),
          frameBottom: frame.bottom,
          viewport: innerHeight
        };
      });
      expect(layout.contained).toBe(true);
      expect(layout.clash).toBe(false);
      // On desktop and laptop screens the whole hero, buttons included, is on the first screen.
      if (width >= 1024) expect(layout.frameBottom).toBeLessThanOrEqual(layout.viewport);
    });
  }

  test("controls move between slides and pause the slideshow", async ({ page }) => {
    await page.goto("/index.html");
    const hero = page.locator("#hero");
    const active = hero.locator(".hero-slide.is-active");
    await expect(active).toHaveAttribute("aria-label", "1 of 5");
    await expect(hero.locator(".hero-slide").nth(1)).toHaveAttribute("inert", "");

    await page.getByRole("button", { name: "Pause slideshow" }).click();
    await expect(page.getByRole("button", { name: "Play slideshow" })).toBeVisible();
    await expect(hero.locator(".hero-slides")).toHaveAttribute("aria-live", "polite");

    await page.getByRole("button", { name: "Next slide" }).click();
    await expect(active).toHaveAttribute("aria-label", "2 of 5");
    await page.getByRole("button", { name: "Previous slide" }).click();
    await page.getByRole("button", { name: "Previous slide" }).click();
    await expect(active).toHaveAttribute("aria-label", "5 of 5");
    await expect(active.getByRole("link", { name: "Meet the team" })).toHaveAttribute("href", "team.html#team-group-2");

    await page.getByRole("button", { name: /^Slide 4 of 5/ }).click();
    await expect(active).toHaveAttribute("aria-label", "4 of 5");
    await expect(page.getByRole("button", { name: /^Slide 4 of 5/ })).toHaveAttribute("aria-current", "true");
  });

  test("advances on its own, and not at all with reduced motion", async ({ browser }) => {
    for (const reducedMotion of ["no-preference", "reduce"]) {
      const context = await browser.newContext({ reducedMotion });
      const page = await context.newPage();
      await page.goto("/index.html");
      await page.evaluate(() => document.querySelector("#hero").style.setProperty("--hero-interval", "300ms"));
      await page.mouse.move(0, 0);
      const active = page.locator("#hero .hero-slide.is-active");
      if (reducedMotion === "reduce") {
        await expect(page.getByRole("button", { name: "Play slideshow" })).toBeVisible();
        await page.waitForTimeout(800);
        await expect(active).toHaveAttribute("aria-label", "1 of 5");
      } else {
        await expect(active).not.toHaveAttribute("aria-label", "1 of 5");
      }
      await context.close();
    }
  });
});
