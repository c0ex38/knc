import { Helmet } from 'react-helmet-async';

/**
 * SEO Bileşeni
 * Gelişmiş SEO meta tagları - Open Graph, Twitter Card, JSON-LD yapılandırılmış veri
 */
interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    keywords?: string[];
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

const SEO = ({ 
    title, 
    description, 
    canonical,
    image = '/og-image.jpg', // Default OG image
    type = 'website',
    keywords = [],
    author = 'KNC Creative',
    publishedTime,
    modifiedTime
}: SEOProps) => {
    const siteUrl = 'https://kncdesign.com.tr';
    const fullUrl = canonical || siteUrl;
    const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
    const fullTitle = `${title} | KNC CREATIVE`;

    // Default keywords
    const defaultKeywords = [
        'grafik tasarım',
        'web tasarım',
        'kurumsal kimlik',
        'sosyal medya yönetimi',
        'video prodüksiyon',
        'dijital ajans',
        'Konya'
    ];

    const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

    // JSON-LD yapılandırılmış veri
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KNC Creative",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": "Dijital yaratıcılık ajansı - Grafik tasarım, web tasarım, kurumsal kimlik ve sosyal medya hizmetleri",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Fevzi Çakmak Mahallesi Matbaacılar Sitesi 10453. Sokak 16/B",
            "addressLocality": "Konya",
            "addressCountry": "TR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-552-636-01-42",
            "contactType": "customer service",
            "email": "info@kncdesign.com.tr"
        },
        "sameAs": [
            "https://instagram.com/knccreative",
            "https://facebook.com/knccreative",
            "https://twitter.com/knccreative"
        ]
    };

    return (
        <Helmet>
            {/* Temel Meta Taglar */}
            <html lang="tr" />
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords.join(', ')} />
            <meta name="author" content={author} />
            
            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={fullUrl} />}
            
            {/* Viewport ve Charset */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            
            {/* Dil ve Bölge */}
            <meta httpEquiv="content-language" content="tr" />
            <meta name="geo.region" content="TR-42" />
            <meta name="geo.placename" content="Konya" />
            
            {/* Open Graph (Facebook, LinkedIn) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="KNC Creative" />
            <meta property="og:locale" content="tr_TR" />
            
            {/* Article Meta (eğer article ise) */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:site" content="@knccreative" />
            <meta name="twitter:creator" content="@knccreative" />
            
            {/* Robots */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            
            {/* Tema Rengi */}
            <meta name="theme-color" content="#FF2700" />
            <meta name="msapplication-TileColor" content="#FF2700" />
            
            {/* JSON-LD Yapılandırılmış Veri */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
