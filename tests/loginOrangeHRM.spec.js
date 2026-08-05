const { test, expect } = require("@playwright/test");

test("Verify Login", async function ({ page }) {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // check using placeholder on inspect tab of url
  // To check username is correct
  await page.getByPlaceholder("Username").type("Admin",{delay:100}); //{delay:100} -> helps to type an username slowly like human

  // if no placeholder available go with css selector or Xpath  using locator
  // To check password is correct
  await page.locator("input[name='password']").type("admin123",{delay:100});
  //To check button is clickable
  await page.locator("//button[@type ='submit']").click();

  // To check page redirect to expected page
  await expect(page).toHaveURL(/dashboard/);

  // Logout -> 1. GO to profile picture 2. Click on the logout btn 3. Redirect to login page
  await page.getByAltText("profile picture").first().click();
  await page.getByText("Logout").click();
  await expect(page).toHaveURL(/login/);
});
