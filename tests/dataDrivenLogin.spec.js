const { test, expect } = require("@playwright/test");
const testdata = JSON.parse(JSON.stringify(require("../testdataLogin.json")));
test.describe("Data Driven login Test",function(){
    for(const data of testdata){
        test.describe(`Login with Users ${data.id}`,function(){
            test("Login to Application", async ({ page }) => {
              await page.goto("https://freelance-learn-automation.vercel.app/login");
              await page.locator("//input[@id='email1']").fill(data.username);
              await page.locator("//input[@id='password1']").fill(data.password);
            });
        })
    }
})
