 const {test,expect} =require('@playwright/test');

// test("Test1", async function ({page}) {
//      expect(100).toBe(100);
    
// })
// test("Test2", async function ({page}) {
//      expect(10).toBe(22);
    
// })
// test("Test3", async function ({page}) {
//      expect(1.2).toBe(1.2);
    
// })

// //To run only one test below add .only
// test("Test4",async function ({page}){
//     expect("Amrutvahini College").toBe("Amrutvahini");
// })

// test.skip ("Test 5",async function({page}){
//      expect(true).toBeTruthy();
// })
// test("Test 6",async function({page}){
//      expect(false).toBeFalsy();
// })
test("Test7",async function ({page}){
    expect("Amrutvahini College".includes("Amrutvahini")).toBeTruthy();
})