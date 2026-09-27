const { test, expect } = require("@playwright/test");
const testdata = JSON.parse(JSON.stringify(require("../testdata.json"))); // to access anydata from testdata.json

// If we want to use same data in multiple testcases then we choose to create testdata.json instead of data hardcoding
test("Login to Application", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.locator("//input[@id='email1']").fill(testdata.username);
  await page.locator("//input[@id='password1']").fill(testdata.password);
});
