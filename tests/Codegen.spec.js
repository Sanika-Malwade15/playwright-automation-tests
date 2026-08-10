import { test, expect } from '@playwright/test';

// For the Google page test case automatically done

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).fill('java tutorial');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Djava%2Btutorial%26sca_esv%3D64b268b11d0571a2%26source%3Dhp%26ei%3Dg8t5apmEBcSfhvcPkJL22QQ%26iflsig%3DABILxe8AAAAAannZk_R-iD5pKvr3FViXKO0rIkDBLQkp%26ved%3D0ahUKEwjZ0eOMj5aWAxXEj-EIHRCJPUsQ4dUDCB4%26uact%3D5%26oq%3Djava%2Btutorial%26gs_lp%3DEgdnd3Mtd2l6Ig1qYXZhIHR1dG9yaWFsMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiyIVAAWMUbcAB4AJABAJgBgwGgAZ4LqgEEMy4xMLgBA8gBAPgBAZgCDaAC5gvCAg0QABiABBiKBRixAxgKwgIOEC4YgAQYsQMYxwEY0QPCAggQABiABBixA8ICCBAuGIAEGLEDwgIIEC4YsQMYgATCAgsQLhiABBjHARivAcICBRAuGIAEwgIOEC4YgAQYigUYsQMYgwHCAgcQABiABBgKmAMAkgcEMC4xM6AH4l2yBwQwLjEzuAfmC8IHBzAuNC44LjHIBzGACAE%26sclient%3Dgws-wiz%26sei%3Djct5atuEOta0hvcP2c3ywAM&q=EgRnkgEkGI6X59MGIjDdaqCm4uN1x8LzEiAnRHxVtY9SyJHPCmLkgN5pKRBVwOyfrUuBgUUnW9VEdLML55syAVJaAUM');
  await page.locator('iframe[name="a-lpd32ltoruw4"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Google Search' }).click();
});