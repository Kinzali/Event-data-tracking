const { test, expect } = require('@playwright/test');

test("Server responds with the text 'Event ID not provided'", async ({
  page,
}) => {
  const response = await page.goto('/events/');
  expect(await response.text()).toBe('Event ID not provided');
});
