// @ts-check
const { test, expect } = require("@playwright/test");
const pages = require("./pages");

for (const { path } of pages) {
  test(`${path} has unique, complete SEO metadata`, async ({ page }) => {
    await page.goto(path);
    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");

    expect(title.length).toBeLessThanOrEqual(65);
    expect(description?.length ?? 0).toBeGreaterThanOrEqual(70);
    expect(description?.length ?? 0).toBeLessThanOrEqual(170);
    expect(canonical).toMatch(/^https:\/\/printspeak\.ca\//);
    for (const prop of ["og:title", "og:description", "og:url", "og:image"]) {
      await expect(page.locator(`meta[property="${prop}"]`)).toHaveCount(1);
    }
    await expect(page.locator("h1")).toHaveCount(1);
  });
}

test("every page has a unique title and description", async ({ page }) => {
  const titles = new Set();
  const descriptions = new Set();
  for (const { path } of pages) {
    await page.goto(path);
    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(titles.has(title), `duplicate title on ${path}`).toBe(false);
    expect(descriptions.has(description), `duplicate description on ${path}`).toBe(false);
    titles.add(title);
    descriptions.add(description);
  }
});
