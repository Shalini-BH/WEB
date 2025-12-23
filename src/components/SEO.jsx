import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, type = 'website' }) => {
    const siteTitle = 'Best Service Cabs and Travels | South India Tours';
    const siteDescription = 'Premium car rentals, buses, and tour packages in South India. Serving 25,000+ happy passengers since 2007. Affordable rates, luxury comfort.';
    const siteUrl = 'https://bestservicecabs.com'; // Replace with actual domain if known

    const metaTitle = title ? `${title} | Best Service Cabs` : siteTitle;
    const metaDescription = description || siteDescription;
    const metaCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Best Service Cabs and Travels",
        "alternateName": "South India Tours & Travels",
        "description": metaDescription,
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`, // Update with actual logo path
        "telephone": "+919876543210", // Update with actual phone
        "email": "booking@bestservicecabs.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "JP Nagar",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560078",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "12.9141",
            "longitude": "77.5862"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "12.9141",
                "longitude": "77.5862"
            },
            "geoRadius": "500000" // 500km radius
        },
        "priceRange": "₹₹",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/bestservicecabs",
            "https://www.instagram.com/bestservicecabs"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={metaCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={metaCanonical} />
            <meta property="og:site_name" content="Best Service Cabs" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
