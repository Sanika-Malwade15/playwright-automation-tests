import { test, expect } from "@playwright/test";

test("OrangeHRM Login and Logout Test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Login
  await page.getByRole("textbox", { name: "Username" }).fill("Admin");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // Open "About" modal dynamically
  await page.locator(".oxd-userdropdown-tab").click();
  await page.getByRole("menuitem", { name: "About" }).click();
  await page.getByRole("button", { name: "×" }).click();

  // Logout dynamically
  await page.locator(".oxd-userdropdown-tab").click();
  await page.getByRole("menuitem", { name: "Logout" }).click();

  // Verify successful logout
  await expect(page).toHaveURL(/.*login/);
});