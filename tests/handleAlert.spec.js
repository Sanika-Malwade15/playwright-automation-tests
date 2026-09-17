const { test, expect } = require("@playwright/test");

test.skip("Handle  Alerts", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  /*This is the most important part.

page.on("dialog") tells Playwright:

"Whenever a JavaScript dialog appears, execute this function."*/

  page.on("dialog", async (d) => {
    expect(d.type()).toContain("alert");
    expect(d.message()).toContain("I am a JS Alert");
    await d.accept();
  });
  await page.locator("//button [text() ='Click for JS Alert']").click();
});

//button[text()='Click for JS Confirm']

test("Handle  Confirm box", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


  page.on("dialog", async (d) => {
    expect(d.type()).toContain("confirm");
    expect(d.message()).toContain("I am a JS Confirm");
    await d.dismiss();
  });
  await page.locator("//button [text() ='Click for JS Confirm']").click();
});

test("Handle  Prompt", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");


  page.on("dialog", async (d) => {
    expect(d.type()).toContain("prompt");
    expect(d.message()).toContain("I am a JS prompt");
    await d.accept("India")
  });
  await page.locator("//button[text()='Click for JS Prompt']").click();
  await page.waitForTimeout(5000)
});