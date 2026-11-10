// @ts-check
const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const pages = require("./pages");

// Audit every page with axe-core against WCAG 2.2 A/AA plus best-practice rules.
for (const { path } of pages) {
  test.describe(path, () => {
    test("has no axe accessibility violations", async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState("networkidle");
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
        .analyze();
      const summary = results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        targets: v.nodes.map((n) => n.target.join(" ")).slice(0, 5)
      }));
      expect(summary, JSON.stringify(summary, null, 2)).toEqual([]);
    });

    test("has one h1, a main landmark, and a skip link to it", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toHaveCount(1);
      await page.keyboard.press("Tab");
      const skip = page.getByRole("link", { name: "Skip to main content" });
      await expect(skip).toBeFocused();
      await expect(skip).toBeVisible();
      await skip.press("Enter");
      await expect(page.locator("main")).toBeFocused();
    });

    test("every image has an alt attribute and loads", async ({ page }) => {
      await page.goto(path);
      // Lazy images below the fold only load when scrolled to; load them all for the check.
      await page.locator("img[loading=lazy]").evaluateAll((imgs) => imgs.forEach((img) => img.setAttribute("loading", "eager")));
      await page.waitForLoadState("networkidle");
      const images = await page.locator("img").evaluateAll((imgs) =>
        imgs.map((img) => ({ src: img.getAttribute("src"), alt: img.getAttribute("alt"), ok: img.complete && img.naturalWidth > 0 }))
      );
      for (const img of images) {
        expect(img.alt, `alt on ${img.src}`).not.toBeNull();
        expect(img.ok, `${img.src} failed to load`).toBe(true);
      }
    });

    test("internal links resolve", async ({ page, request }) => {
      await page.goto(path);
      const hrefs = await page.locator("a[href]").evaluateAll((links) =>
        [...new Set(links.map((a) => a.href).filter((h) => h.startsWith(location.origin)).map((h) => h.split("#")[0].split("?")[0]))]
      );
      for (const href of hrefs) {
        const response = await request.get(href);
        expect(response.status(), href).toBe(200);
      }
    });
  });
}
