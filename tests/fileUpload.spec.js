const {test, expect}=require("@playwright/test")

test ("Verify file Upload", async ({page})=>{
     // Single File Upload Verification Test Case 
    //1. GO to page/site
    await page.goto("https://the-internet.herokuapp.com/upload")
    //2. Upload File
    await page.locator("#file-upload").setInputFiles("./photos/img1.png")

    //3.Click on Submit Btn
    await page.locator("#file-submit").click()

    //4. Get Message for Successful Upload
    expect( await page.locator("//h3")).toHaveText("File Uploaded!")


})