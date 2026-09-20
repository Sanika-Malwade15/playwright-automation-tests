const { test, expect } = require("@playwright/test");
test("Working with Multiple tabs", async ({ browser }) => {
     const context = await browser.newContext();
  /*
     Creates a new isolated browser session.
    Similar to opening a new incognito window.
    Cookies, cache, local storage, and login sessions are separate from other contexts.
     */
 
  const page = await context.newPage();
  /*Creates a new browser tab/page inside that context.
    page is then used to interact with the website.*/ 

  await page.goto("https://freelance-learn-automation.vercel.app/login")
  await page.waitForTimeout(5000)

  const [newPage]=await Promise.all
  (
    [
        context.waitForEvent("page"),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ]
   
  )
 await page.waitForTimeout(5000)
  await newPage.locator("(//input[@name='email'])[2]").fill("abc@gmail.com")
   await page.waitForTimeout(5000)
   await newPage.close()
    await page.waitForTimeout(5000)
   await page.locator("#email1").fill("admin@gmail.com")
})
