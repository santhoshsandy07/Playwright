import { chromium, test } from '@playwright/test';

test('Open the auto-mate page', async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://llamalab.com/automate/');

  await page.pause();

  await browser.close();
});