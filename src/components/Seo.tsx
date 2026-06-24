import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string; // Absolute URL of OG image
<<<<<<< HEAD
  imageAlt?: string;
  keywords?: string[];
=======
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
  type?: string;
  jsonLd?: Record<string, any>;
  twitterHandle?: string;
}

export const Seo = ({
  title,
  description,
<<<<<<< HEAD
  canonical = "https://www.guragainpratik.com.np/",
  image,
  imageAlt = "Pratik Guragain full-stack developer portfolio",
  keywords = [],
=======
  canonical = "https://pratikguragain.vercel.app/",
  image,
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
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
<<<<<<< HEAD
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content="Pratik Guragain" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
=======
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
<<<<<<< HEAD
      <meta property="og:site_name" content="Pratik Guragain Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={imageAlt} />}
=======
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
<<<<<<< HEAD
      {image && <meta name="twitter:image:alt" content={imageAlt} />}
=======
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487

      {/* Structured Data (JSON-LD) */}
      {jsonLdStr && (
        <script type="application/ld+json">{jsonLdStr}</script>
      )}
    </Helmet>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> cf59bf9afeba037c5568d19527334507624a4487
