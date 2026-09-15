const {test} =require('@playwright/test')

test ("Keyboard Events in Playwright", async({page})=>{
   await page.goto("https://www.google.com/");
    //Keyboard Actions – Type, Select and Delete Text
    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("Playright Tutorial")
    await page.keyboard.down("Shift")
    for( let i=0;i< 'Tutorial'.length;i++){
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
  /* await page.locator("textarea[name='q']").type("Playwright Tutorial")

   // Multiple Keys  - copy and paste
   await page.keyboard.press("Control+A")
   await page.keyboard.press("Control+C")
   await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")
   //await page.keyboard.press("Enter")*/
})