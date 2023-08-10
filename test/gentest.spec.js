const { test, expect } = require("ceruleoscope");

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('link', { name: 'ストア' }).click();
  await page.locator('#hero_bday23_annouce').getByRole('link', { name: '今すぐ購入' }).click();
  await page.getByRole('button', { name: 'Watches & Trackers' }).click();
});