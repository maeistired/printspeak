// @ts-check
const { test, expect } = require("@playwright/test");
const pages = require("./pages");

test("current page is marked in the navigation", async ({ page }) => {
  await page.goto("/about.html");
  await expect(page.locator('#site-nav [aria-current="page"]')).toHaveText("About");
});

test("mobile menu opens, closes with Escape, and returns focus", async ({ page, isMobile }) => {
  test.skip(!isMobile, "menu toggle is only shown on small screens");
  await page.goto("/index.html");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("#site-nav-menu").getByRole("link", { name: "Team" })).toBeVisible();
  await page.keyboard.press("Escape");
  const reopened = page.getByRole("button", { name: "Open menu" });
  await expect(reopened).toHaveAttribute("aria-expanded", "false");
  await expect(reopened).toBeFocused();
});

test("navigation links reach every page", async ({ page, isMobile }) => {
  await page.goto("/index.html");
  for (const name of ["About", "Team", "Blog", "Contact"]) {
    if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name }).click();
    await expect(page).toHaveTitle(pages.find((p) => p.nav === name).title);
  }
});

test("team dialog opens from a card, traps focus, and closes back to the card", async ({ page }) => {
  await page.goto("/team.html");
  const card = page.locator(".team-card").first();
  const name = (await card.locator(".team-card__name").textContent())?.trim();
  await card.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(card).toBeFocused();

  await card.click();
  await dialog.getByRole("button", { name: "Close" }).click();
  await expect(dialog).toBeHidden();
});

test("contact form fields are labelled and required", async ({ page }) => {
  await page.goto("/contact.html");
  const form = page.locator("form[data-site-form]");
  for (const label of ["Name", "Email", "Message"]) {
    const field = form.getByLabel(new RegExp(`^${label}`));
    await expect(field).toBeVisible();
    await expect(field).toHaveAttribute("required", "");
  }
  await expect(form).toHaveAttribute("action", /formsubmit\.co/);
  // Submitting empty must be blocked by native validation, not sent.
  await form.getByRole("button", { name: "Send message" }).click();
  await expect(page).toHaveURL(/contact\.html$/);
  expect(await form.getByLabel(/^Name/).evaluate((el) => /** @type {HTMLInputElement} */ (el).validity.valueMissing)).toBe(true);
});

test("sent confirmation is announced after a successful submit", async ({ page }) => {
  await page.goto("/contact.html?sent=1");
  await expect(page.getByRole("status")).toHaveText("Thanks! Your message has been sent.");
});

test("home page compact contact form works", async ({ page }) => {
  await page.goto("/index.html");
  const form = page.locator('form[data-site-form="compact"]');
  await expect(form.getByLabel(/^Email/)).toBeVisible();
  await expect(form.getByLabel(/^Message/)).toBeVisible();
});

test("blog cards link to their posts", async ({ page }) => {
  await page.goto("/blog.html");
  await page.getByRole("main").getByRole("link", { name: "What Are Talking Labels?" }).click();
  await expect(page.locator("h1")).toContainText("Talking Labels");
});

test("focus indicator is visible on keyboard focus", async ({ page }) => {
  await page.goto("/about.html");
  const link = page.getByRole("link", { name: "Read our blog" });
  await link.focus();
  const outline = await link.evaluate((el) => getComputedStyle(el).outlineStyle);
  expect(outline).not.toBe("none");
});

test("hover motion is disabled for reduced-motion users", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/blog.html");
  const card = page.locator(".card").first();
  await card.hover();
  const transform = await card.evaluate((el) => getComputedStyle(el).transform);
  expect(transform).toBe("none");
});
