# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sample.spec.js >> Test4
- Location: tests\sample.spec.js:17:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Amrutvahini"
Received: "Amrutvahini College"
```

# Test source

```ts
  1  |  const {test,expect} =require('@playwright/test');
  2  | 
  3  | test("Test1", async function ({page}) {
  4  |      expect(100).toBe(100);
  5  |     
  6  | })
  7  | test("Test2", async function ({page}) {
  8  |      expect(10).toBe(22);
  9  |     
  10 | })
  11 | test("Test3", async function ({page}) {
  12 |      expect(1.2).toBe(1.2);
  13 |     
  14 | })
  15 | 
  16 | //To run only one test below add .only
  17 | test("Test4",async function ({page}){
> 18 |     expect("Amrutvahini College").toBe("Amrutvahini");
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  19 | })
  20 | 
  21 | test.skip ("Test 5",async function({page}){
  22 |      expect(true).toBeTruthy();
  23 | })
  24 | test("Test 6",async function({page}){
  25 |      expect(false).toBeFalsy();
  26 | })
  27 | test("Test7",async function ({page}){
  28 |     expect("Amrutvahini College".includes("Amrutvahini")).toBeTruthy();
  29 | })
```