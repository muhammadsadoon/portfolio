import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({
  title = "Muhammad Sadoon | Full Stack MERN & React Native Developer",
  description = "Muhammad Sadoon is a Full Stack MERN Developer, PostgreSQL expert, and React Native (iOS & Android) specialist based in Pakistan. Explore his portfolio of advanced digital experiences.",
  keywords = "Muhammad Sadoon, MERN Stack Developer, React Native Developer, PostgreSQL, DevOps, Frontend Developer, Pakistan, Web Development, Mobile App Development",
  image = "/og-image.png",
  url = "https://muhammadsadoon-portfolio.vercel.app",
}: SEOProps) => {
  const siteName = "Muhammad Sadoon Portfolio";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies do you specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I specialize in the MERN stack (MongoDB, Express, React, Node.js), PostgreSQL, and mobile development with React Native. I also have expertise in modern tools like Next.js, TypeScript, and Docker."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer custom web and mobile app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I provide end-to-end development services for both web and mobile platforms, ensuring responsive design, performance, and scalability."
        }
      },
      {
        "@type": "Question",
        "name": "Are you available for remote work and freelance projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certainly! I have experience working with remote teams at Developerhub Corporation and App Mesh, and I'm always open to discussing new freelance opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure high performance and SEO for websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I use modern frameworks like Next.js for server-side rendering, implement advanced SEO techniques with react-helmet-async, and optimize assets and animations for a smooth user experience."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Muhammad Sadoon" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammad Sadoon",
          "url": url,
          "image": image,
          "jobTitle": "Full Stack MERN & React Native Developer",
          "description": description,
          "sameAs": [
            "https://github.com/muhammadsadoon",
            "https://linkedin.com/in/muhammadsadoon"
          ],
          "knowsAbout": [
            "MERN Stack",
            "React Native",
            "PostgreSQL",
            "DevOps",
            "TypeScript",
            "GSAP",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
            "Next.js"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
