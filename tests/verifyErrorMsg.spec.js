const { test, expect } = require("@playwright/test");
//test.use({viewport:{width:1200,height:600}})
test("Veify test Message", async function ({ page }) {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  // Tester always performs testing int the full Screen mode So that to avoid test fail if some part is missing on screen
  //Playwright Supports the viewport to set to full Screen testing

  //Current size
  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);
  /*My Screen Size 1325 px * 745 px 
  To alter size 2 mtds:
  1. Change in config.js file in browser section to reflect in all tests 
  2. For specific Test use test.use as in  this file
  */
 


  // Login using username , password which is invalid hence get Error msg
  await page.getByPlaceholder("Username").type("Admin");
  await page.getByPlaceholder("Password").type("Admin234"); // incorrect password
  await page.locator("//button[normalize-space()='Login']").click();
  const errorMsg = await page
    .locator("//p[contains(@class,'alert-content-text')]")
    .textContent();
  console.log("Error Message is " + errorMsg);

  //if in case msg not print so
  expect(errorMsg.includes("Invalid")).toBeTruthy();
  //Complete msg check
  expect(errorMsg === "Invalid credentials").toBeTruthy();
});
