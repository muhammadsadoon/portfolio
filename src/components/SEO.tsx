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
  description = "Muhammad Sadoon is a highly skilled Full Stack MERN Developer, PostgreSQL expert, and React Native (iOS & Android) specialist based in Pakistan. With experience at App Mesh and Developerhub Corporation, he specializes in building scalable, high-performance web and mobile applications using modern technologies like Next.js, TypeScript, and Docker. Explore his professional portfolio of advanced digital experiences.",
  keywords = "Sadoon, Sadoon Portfolio, Sadoon Developer, Who is Sadoon?, Sadoon MERN, Muhammad Sadoon, MERN Stack Developer, React Native Developer, PostgreSQL expert, DevOps engineer, Frontend Developer Pakistan, Web Development Karachi, Mobile App Development, Full Stack Portfolio, Best Developer Portfolio 2026, Hire MERN Developer, Hire React Native Expert, Node.js Backend Engineer, JavaScript Specialist, TypeScript Developer, Software Engineer Portfolio, Professional Web Design, Freelance App Developer, Next.js Expert, GSAP Animation, 3D Web Experiences, Responsive Design Portfolio, Scalable Web Apps, Enterprise Software Development, Tech Portfolio Showcase, Portfolio Examples, Modern Tech Stack, App Development Services, Muhammad Sadoon Karachi, Naval Colony Developer, Pakistan Tech Talent, React Developer, Node.js Engineer, Express.js Expert, MongoDB Professional, Full Stack JavaScript, MERN Mastery, Cross-Platform Mobile Apps, iOS Developer, Android Developer, Native Performance Apps, PostgreSQL Database Design, SQL Expert, NoSQL Solutions, Redis Caching, JWT Authentication, Secure APIs, RESTful Services, GraphQL API Development, Apollo Client, Socket.io Real-time, WebSockets, Docker Containers, Containerization, Kubernetes Basics, AWS Cloud Services, Amazon Web Services, Vercel Deployment, Netlify Hosting, CI/CD Pipelines, GitHub Actions, Automated Testing, Jest, React Testing Library, Cypress E2E, Unit Testing, Integration Testing, Tailwind CSS Styling, Responsive Web Design, Adaptive Layouts, Framer Motion Animations, GSAP ScrollTrigger, 3D Web Graphics, Three.js, React Three Fiber, UI/UX Principles, User-Centric Design, Clean Code, SOLID Principles, Design Patterns, Agile Methodology, Scrum, Remote Work Expert, Freelance Software Developer, Professional Portfolio, Tech Showcase, Portfolio Templates, Modern Web Architecture, Scalable Systems, High-Availability Apps, Performance Tuning, Google Lighthouse SEO, Web Vitals Optimization, Karachi Software Industry, Pakistan IT Talent, Top Developer Pakistan, Hire Remote Engineer, Full-Cycle Development, Product Engineering, Software Solutions, Digital Transformation, Custom Web Applications, Enterprise Grade Software, Muhammad Sadoon Full Stack, MongoDB Aggregation, Mongoose ORM, Express Middleware, React Hooks, Redux Toolkit, Node.js Event Loop, REST API Design, API Security, Database Optimization, NoSQL Architecture, Server-side Logic, Full Stack Security, PM2, Nginx, API Rate Limiting, CORS, Helmet.js, Winston, Morgan, Bcrypt, Dotenv, Joi, Zod, Swagger, OpenAPI",
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
      <meta name="google-site-verification" content="l-m6JALUUEzXR4kVI1YQj1ntaLO4y6zRUIKNWnah6cc" />
      <meta name="google-site-verification" content="google7211b234ee526d02" />

      {/* Alternate Links (Language/Region) */}
      <link rel="alternate" href={url} hrefLang="en-pk" />
      <link rel="alternate" href={url} hrefLang="x-default" />

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
          "alternateName": "Sadoon",
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
            "Next.js",
            "REST APIs",
            "GraphQL",
            "Socket.io",
            "Docker",
            "AWS",
            "Tailwind CSS",
            "Redux Toolkit",
            "React Query",
            "JavaScript",
            "NoSQL",
            "SQL",
            "Redis",
            "JWT",
            "WebSockets",
            "Kubernetes",
            "CI/CD",
            "GitHub Actions",
            "Jest",
            "Cypress",
            "Three.js",
            "React Three Fiber",
            "UI/UX Design",
            "Clean Code",
            "SOLID Principles",
            "Agile",
            "Scrum",
            "Scalable Architecture",
            "Performance Optimization",
            "SEO Strategies"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full Stack Web Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development"
                }
              }
            ]
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};
