import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage should not have any automatically detectable accessibility issues', async ({
    page,
}) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

test('homepage has title and basic elements', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/KNC Creative/);

    // Check if main heading is visible
    await expect(page.locator('h1').first()).toBeVisible();
});

test('contact page loads', async ({ page }) => {
    await page.goto('/iletisim');
    await expect(page.getByRole('heading', { name: "Let's Talk" })).toBeVisible();
});
