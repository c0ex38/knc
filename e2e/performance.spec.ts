import { playAudit } from 'playwright-lighthouse';
import { test, chromium } from '@playwright/test';

test('lighthouse performance audit', async ({ browserName }) => {
    if (browserName !== 'chromium') test.skip();

    const browser = await chromium.launch({
        args: ['--remote-debugging-port=9222'],
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:5173');

    await playAudit({
        page: page,
        thresholds: {
            performance: 50, // Development mode is slower, so relaxed threshold
            accessibility: 90,
            'best-practices': 90,
            seo: 90,
        },
        port: 9222,
    });

    await browser.close();
});
