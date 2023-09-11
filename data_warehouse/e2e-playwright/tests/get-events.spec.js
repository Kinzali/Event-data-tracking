const { test, expect } = require('@playwright/test');

test("Server responds with the text 'Events are'", async ({ page }) => {
  const response = await page.goto('/events');

  // Make sure the response is successful (status code 200 OK)
  expect(response.status()).toBe(200);

  // Parse the response as JSON
  const responseBody = await response.json();

  // Check if the response contains the expected data
  expect(responseBody).toEqual([
    {
      event_id: 2,
      person_id: '123',
      type: 'registration',
      timestamp: '2023-07-25T12:34:56.000Z',
      url: 'https://example.com/event',
    },
    // Add more expected event objects if needed
  ]);
});
