import { Helmet } from 'react-helmet-async';
import { contactInfo } from '../../constants';

/**
 * SEO Bileşeni - Advanced
 * Kapsamlı SEO optimizasyonu için geliştirilmiş bileşen.
 * - JSON-LD (LocalBusiness, WebSite, Breadcrumb)
 * - Gelismis Meta Etiketleri
 * - Open Graph & Twitter Card
 * - Geo Location & Robots
 */
interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article' | 'business.business' | 'profile';
    keywords?: string[];
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    breadcrumbs?: Array<{ name: string; item: string }>;
}

const SEO = ({
    title,
    description,
    canonical,
    image = '/og-image.jpg',
    type = 'website',
    keywords = [],
    author = 'KNC Creative',
    publishedTime,
    modifiedTime,
    breadcrumbs,
}: SEOProps) => {
    const siteUrl = 'https://kncdesign.com.tr';
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
    const fullTitle = `${title} | KNC Creative - Dijital Ajans`;

    // Kapsamlı anahtar kelime listesi
    const defaultKeywords = [
        'KNC Creative',
        'KNC Design',
        'Konya Reklam Ajansı',
        'Konya Web Tasarım',
        'Grafik Tasarım Konya',
        'Sosyal Medya Yönetimi',
        'Kurumsal Kimlik Tasarımı',
        'Video Prodüksiyon',
        'Drone Çekimi',
        'Ürün Fotoğrafçılığı',
        'Dijital Pazarlama',
        'SEO Danışmanlığı',
        'Marka Yönetimi',
        'Promosyon Ürünleri',
        'İş Elbiseleri',
        'Flaş Reklam',
        'Profesyonel Web Tasarım',
        'E-ticaret Sitesi Yapan Firmalar',
    ];

    const allKeywords = [...new Set([...keywords, ...defaultKeywords])].join(', ');

    // LocalBusiness Schema (Daha detaylı yerel işletme verisi)
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'KNC Creative',
        image: [`${siteUrl}/logo.svg`, `${siteUrl}/og-image.jpg`],
        '@id': siteUrl,
        url: siteUrl,
        telephone: contactInfo.phone,
        email: contactInfo.email,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Fevziçakmak, 10453. Sk. No:16/B',
            addressLocality: 'Karatay',
            addressRegion: 'Konya',
            postalCode: '42050',
            addressCountry: 'TR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '37.9256', // Yaklaşık Konya Karatay Sanayi koordinatları
            longitude: '32.5186',
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
        },
        sameAs: [
            contactInfo.instagram,
            contactInfo.whatsappLink,
            'https://www.facebook.com/knccreative',
            'https://twitter.com/knccreative',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: contactInfo.phone,
            contactType: 'customer service',
            areaServed: 'TR',
            availableLanguage: 'Turkish',
        },
    };

    // WebSite Schema (Sitelinks Search Box için)
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'KNC Creative',
        url: siteUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteUrl}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs
        ? {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: breadcrumbs.map((crumb, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: crumb.name,
                  item: `${siteUrl}${crumb.item}`,
              })),
          }
        : null;

    return (
        <Helmet>
            {/* 1. Temel Taglar */}
            <html lang="tr" />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <meta name="author" content={author} />
            <meta name="owner" content="KNC Creative" />
            <meta name="copyright" content={`© ${new Date().getFullYear()} KNC Creative`} />
            <meta name="theme-color" content="#FF2700" />

            {/* 2. Bot ve Crawling Direktifleri */}
            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
            <meta name="googlebot" content="index, follow" />
            <meta name="revisit-after" content="7 days" />
            <meta name="rating" content="General" />

            {/* Google Search Console Verification */}
            <meta name="google-site-verification" content={contactInfo.googleVerification} />

            {/* 3. Canonical */}
            <link rel="canonical" href={fullUrl} />

            {/* 4. Location & Geo Tags (Yerel SEO için kritik) */}
            <meta name="geo.region" content="TR-42" />
            <meta name="geo.placename" content="Konya" />
            <meta name="geo.position" content="37.9256;32.5186" />
            <meta name="ICBM" content="37.9256, 32.5186" />

            {/* 5. Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content="KNC Creative" />
            <meta property="og:locale" content="tr_TR" />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:secure_url" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:image:type" content="image/jpeg" />

            {/* 6. Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@knccreative" />
            <meta name="twitter:creator" content="@knccreative" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={title} />

            {/* 7. Article Meta Tags (Eğer blog/yazı ise) */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === 'article' && author && <meta property="article:author" content={author} />}

            {/* 8. JSON-LD Schemas */}
            <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>

            {breadcrumbSchema && (
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            )}
        </Helmet>
    );
};

export default SEO;
