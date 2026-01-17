import { test, expect } from '@playwright/test';

test('homepage has title and basic elements', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/KNC Creative/);

    // Check if main heading is visible
    // Note: Adjust selector based on your actual H1
    await expect(page.locator('h1').first()).toBeVisible();
});

test('contact page loads', async ({ page }) => {
    await page.goto('/iletisim');
    await expect(page.getByRole('heading', { name: "Let's Talk" })).toBeVisible();
});
