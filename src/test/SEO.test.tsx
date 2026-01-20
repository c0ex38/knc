import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SEO from '../components/layout/SEO';
import { HelmetProvider } from 'react-helmet-async';

describe('SEO Component', () => {
    it('renders title and meta tags correctly', async () => {
        const title = 'Test Page';
        const description = 'Test Description';

        render(
            <HelmetProvider>
                <SEO title={title} description={description} />
            </HelmetProvider>
        );

        await waitFor(() => {
            expect(document.title).toContain(title);

            const metaDescription = document.querySelector('meta[name="description"]');
            expect(metaDescription).toHaveAttribute('content', description);
        });
    });
});
