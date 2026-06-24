import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string; // Absolute URL of OG image
  imageAlt?: string;
  keywords?: string[];
  type?: string;
  jsonLd?: Record<string, any>;
  twitterHandle?: string;
}

export const Seo = ({
  title,
  description,
  canonical = "https://www.guragainpratik.com.np/",
  image,
  imageAlt = "Pratik Guragain full-stack developer portfolio",
  keywords = [],
  type = "website",
  jsonLd,
  twitterHandle = "@pratikguragain",
}: SeoProps) => {
  const jsonLdStr = jsonLd
    ? JSON.stringify({
        ...jsonLd,
        "@id": canonical, // Reference page URL
      })
    : undefined;

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content="Pratik Guragain" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Pratik Guragain Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* Structured Data (JSON-LD) */}
      {jsonLdStr && (
        <script type="application/ld+json">{jsonLdStr}</script>
      )}
    </Helmet>
  );
};
