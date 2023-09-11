const { test, expect } = require('@playwright/test');

test("Server responds with the text 'Companies are'", async ({ page }) => {
  const response = await page.goto('/companies');

  // Make sure the response is successful (status code 200 OK)
  expect(response.status()).toBe(200);

  // Parse the response as JSON
  const responseBody = await response.json();

  // Check if the response contains the expected data
  expect(responseBody).toEqual([
    {
      company_id: 'abc.com',
      name: 'abc telecom',
    },
    // Add more expected event objects if needed
  ]);
});
