const { test, expect } = require("ceruleoscope");

let appInsights = require("applicationinsights");
appInsights.setup("InstrumentationKey=031bb8bc-7214-4b84-b4ce-75acd5aaed5e;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/");
appInsights.start();

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('link', { name: 'ストア' }).click();
  await page.locator('#hero_bday23_annouce').getByRole('link', { name: '今すぐ購入' }).click();
  await page.getByRole('button', { name: 'Watches & Trackers' }).click();
});