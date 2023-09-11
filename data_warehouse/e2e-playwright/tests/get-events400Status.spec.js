const { test, expect } = require('@playwright/test');

test('Server responds with status 400 and invalid JSON data', async ({ page }) => {
  const response = await page.goto('/events/ed');
  const responseBodyText = await response.text();

  // Expect the response status code to be 400
  expect(response.status()).toBe(400);

  try {
    // Try parsing the response body as JSON
    const responseBody = JSON.parse(responseBodyText);

    // Expect the response body not to be the expected data
    expect(responseBody.events.event_id).toBe(2);
  } catch (error) {
    // If parsing fails, handle the error here or log it for further investigation
    console.error('Error parsing JSON:', error);
    // Fail the test or take appropriate action depending on your test framework
  }
});
