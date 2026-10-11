const { test, expect } = require("@playwright/test");
const LoginPage= require("../application-freelance/LoginPage")
test("Login to Application Using POM", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
 const loginPage= new LoginPage(page)
 await loginPage.loginToApplication()
});