const { test, expect } = require('@playwright/test');

test("Server responds with the text 'People are'", async ({ page }) => {
  const response = await page.goto('/people');

  // Make sure the response is successful (status code 200 OK)
  expect(response.status()).toBe(200);

  // Parse the response as JSON
  const responseBody = await response.json();

  // Check if the response contains the expected data
  expect(responseBody).toEqual([
    {
      person_id: '123',
      name: 'John Doe',
      phone_number: '123-456-7890',
      company_id: 'abc.com',
    },
    // Add more expected event objects if needed
  ]);
});
