const { test, expect } = require('@playwright/test');

test('Server returns 200 status on valid POST request', async ({ page }) => {
  const newEventData = {
    person_id: '123',
    type: 'registration',
    timestamp: '2023-07-25T12:34:56.000Z',
    url: 'https://example.com/event',
  };

  // Send a POST request to /events
  const response = await page.goto('/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEventData),
  });

  const responseBodyText = await response.text();

  // Expect the response status code to be 200
  expect(response.status()).toBe(200);

  try {
    // Try parsing the response body as JSON
    const responseBody = JSON.parse(responseBodyText);
    console.log('Parsed Response Body:', responseBody);
  } catch (error) {
    // If parsing fails, handle the error here or log it for further investigation
    console.error('Error parsing JSON:', error);
    // Fail the test or take appropriate action depending on your test framework
  }
});
