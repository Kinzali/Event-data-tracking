const { test, expect } = require('@playwright/test');

test.describe.parallel('API testing', () => {
  test('Simple API Test - Assesrt Invalid Endpoint', async ({ page }) => {
    const response = await page.goto('/events/6');
    expect(response.status()).toBe(404);
  });
});
