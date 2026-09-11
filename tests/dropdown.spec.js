const { test, expect } = require("@playwright/test");
test("Select values From Dropdown", async function ({ page }) {
  // 3 mtds using label, value, index
  /*
    Priority to with we should go
    1. label ->visible text
    2. value
    3. index

     */
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({ label: "Goa" });
  await page.locator("#state").selectOption({ value: "Himachal Pradesh" });
  await page.locator("#state").selectOption({ index: 4 });
  await page.waitForTimeout(5000);
  //     const val= await page.locator("#state").textContent()
  //     console.log("All dropdown values:"+val)
  //    // await expect(val.includes("kerala")).toBeTruthy()
  //     await expect(val.includes("Kerala")).toBeTruthy()

  let state = await page.$("#state");
  let allElements = await state.$$("option");
  let ddStatus = false;
  for (let i = 0; i < allElements.length; i++) {
    let element = allElements[i];
    let value = await element.textContent();

    console.log("Value from dropdown using for loop " + value);
    if (value.includes("Rajasthan")) {
      ddStatus = true;
      break;
    }
  }
  expect(ddStatus).toBeTruthy();
});
