import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
    return (
        <Helmet>
            <title>{title} | KNC CREATIVE</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
    );
};

export default SEO;
