const { test, expect } = require("@playwright/test");

test("Server responds with the text 'Not found'", async ({ page }) => {
  const response = await page.goto("/");
  expect(await response.text()).toBe("Not found");
});
