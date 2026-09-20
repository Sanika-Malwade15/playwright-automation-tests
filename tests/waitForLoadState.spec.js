const {test,expect}=require("@playwright/test")

test("Working with Load State",async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByText("New user? Signup").click()
    //to wait for network idle state 
    await page.waitForLoadState("networkidle")

    //And then it execute below code after all api calls finish
    const cnt=await page.locator("//input[@type='checkbox']").count()
    expect(cnt).toBe(2)

})