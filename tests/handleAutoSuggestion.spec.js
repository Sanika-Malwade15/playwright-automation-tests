const { test, expect } = require("@playwright/test");

test(" Verify Title Selection", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.locator("textarea[name='q']").type("Playwright Tutorial");
  await page.waitForSelector("//li[@role='presentation']");
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
});

test(" Verify Title Selection Using Looping", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.locator("textarea[name='q']").type("Playwright");
  await page.waitForSelector("//li[@role='presentation']");

  const element = await page.$$("//li[@role='presentation']"); // provides all the list/array of Suggestions
  for (let i = 0; i < element.length; i++) {
    const text = await element[i].textContent();
    if (text.includes(" automation")) {
      await element[i].click();
      await page.waitForTimeout(1000);
      break;
    }
  }
  await page.waitForTimeout(1000);
});
