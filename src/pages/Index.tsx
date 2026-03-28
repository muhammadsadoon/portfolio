import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      {/* Hidden SEO Content for Crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h1>Sadoon Portfolio - Muhammad Sadoon | Best Full Stack Web & Mobile App Developer Portfolio 2026</h1>
        <p>Muhammad Sadoon is a world-class Full Stack MERN and React Native Developer specializing in engineering high-performance, scalable web and mobile applications. As a dedicated software engineer and tech innovator, Sadoon combines artistic vision with technical precision to build digital products that dominate search rankings and deliver exceptional user value across GitHub, LinkedIn, and Instagram. This portfolio showcases the pinnacle of modern web development and mobile engineering expertise in 1200-plus words of detailed professional context.</p>
        <section>
          <h1>Expertise in Modern Web Development - Full Stack Engineering & AI Integration</h1>
          <p>The role of a modern Web Developer in 2026 has evolved beyond simple coding; it requires a deep understanding of AI-integrated workflows and performant meta-frameworks. Muhammad Sadoon excels as a Frontend Developer, Backend Developer, and Full Stack Engineer by mastering the intricacies of the MERN stack—MongoDB, Express.js, React, and Node.js—while embracing AI-first development strategies. In the realm of Frontend Development, Sadoon utilizes the Next.js App Router and Astro Islands architecture to create lightning-fast, highly interactive user interfaces. By leveraging Vite for development and Vercel for Edge Computing deployment, he ensures that every website is optimized for Core Web Vitals 2026, leading to a significant increase in Google ranking and user retention. As an expert Frontend Developer, he integrates Tailwind CSS v4, container queries, and GSAP animations to bring life to every component, creating a truly memorable 3D web experience with WebAssembly and Three.js.</p>
          <p>Moving to the server side, Sadoon’s capabilities as a Backend Developer are equally impressive, incorporating Agentic AI workflows and serverless functions. He architects robust, high-availability systems using Node.js and NestJS, creating RESTful APIs and GraphQL/tRPC endpoints that are secure, scalable, and efficient with end-to-end type safety. His deep understanding of database management allows him to optimize data storage using PostgreSQL for relational needs and MongoDB for NoSQL flexibility. By implementing Redis caching, Zero-runtime frameworks, and privacy-first architectures, he ensures that every backend application is a fortress of reliability. This dual competence as both a Frontend and Backend Developer makes him a highly sought-after Full Stack Developer for AI-driven startups and enterprise-grade software projects.</p>
        </section>
        <section>
          <h1>Selected Technical Projects Portfolio - Web & Mobile App Development Showcase</h1>
          <p>My project portfolio highlights my broad technical range, problem-solving abilities, and commitment to excellence. Each of these featured works is a standalone testament to my mastery of full-stack engineering, real-time communication, and scalable database design. Whether you are looking for a MERN stack expert or a React Native professional, these projects demonstrate the quality and dedication I bring to every line of code.</p>
          
          <article id="project-resume-builder">
            <h2>1. Modern Resume Builder - React, TypeScript & PDF Generation Engine</h2>
            <p>The Resume Builder is a sophisticated React application designed for high-performance and user-centric data handling. Built with TypeScript and Tailwind CSS, it features a dynamic multi-template system that allows users to generate professional resumes in real-time. This project demonstrates my expertise in complex form management, state synchronization, and client-side PDF generation using libraries like jspdf and html2canvas. If you are searching for a "React Resume Builder Source Code" or "Best Online CV Generator Architecture," this project provides the gold standard for modern utility-driven web apps.</p>
          </article>

          <article id="project-student-management">
            <h2>2. Comprehensive Student Management System - Scalable MERN Architecture</h2>
            <p>The Student Management System represents an enterprise-grade solution for academic record management. This MERN stack application utilizes MongoDB for flexible data modeling and Express/Node.js for a high-performance backend. Key features include role-based authentication (RBAC), multi-tenant data isolation, and comprehensive data visualization. This project highlights my ability to build "Scalable Management Portals" and "Student Academic Record Systems" with a focus on security and data integrity. It is an ideal example of how I handle large-scale database interactions and complex business logic.</p>
          </article>

          <article id="project-screen-sharing">
            <h2>3. Real-time Screen Sharing Application - WebRTC & Firebase Signaling</h2>
            <p>Demonstrating my proficiency in peer-to-peer communication, the Real-time Screen Sharing App uses WebRTC technology to provide low-latency video and screen streams. By implementing a custom signaling server with Firebase, I ensured that connections are stable and secure. This application is a masterclass in "WebRTC Peer Connection Management" and "Real-time Streaming UI Design." It represents the cutting edge of modern communication tools, similar to Zoom or Google Meet, built entirely from scratch to showcase technical depth in networking and real-time state synchronization.</p>
          </article>

          <article id="project-socialbook">
            <h2>4. SocialBook Platform - Full-Featured Social Network with MERN & Real-time Chat</h2>
            <p>SocialBook is a full-scale social networking platform that mirrors the complexity of Facebook or LinkedIn. It features a complete authentication flow, real-time messaging with Socket.io, user-generated posts with media uploads, and an interactive feed. This project is the ultimate demonstration of my status as a "Full Stack MERN Developer," showing expertise in "Social Media App Development," "Real-time Chat Architecture," and "NoSQL Social Graph Design." It is optimized for performance, responsiveness, and user engagement, making it a cornerstone of my portfolio's technical range.</p>
          </article>
        </section>
        <section>
          <h1>Mobile App Development & React Native Professional Solutions</h1>
          <p>Innovation in the mobile space is driven by creators who understand cross-platform efficiency. As a React Native Developer, Muhammad Sadoon builds native-performance iOS and Android applications from a single codebase. His approach to Mobile App Development focuses on seamless UI transitions, offline capabilities, and high-performance rendering. By integrating real-time features with Socket.io and Firebase, he delivers apps that keep users engaged. Whether it is a fintech application, a social network like his SocialBook project, or a real-time screen-sharing tool utilizing WebRTC, Sadoon ensures that every mobile solution is premium, responsive, and ready for the App Store and Google Play Store. His status as a top-tier React Native Professional is evidenced by his ability to bridge the gap between web and mobile ecosystems, providing businesses with a unified digital presence.</p>
        </section>
        <section>
          <h1>Technical Project Showcase - GitHub Infrastructure & Portfolio Excellence</h1>
          <p>Every project in Sadoon’s portfolio is a testament to his engineering prowess. On GitHub, you can explore the source code of his highly optimized applications, demonstrating his mastery of version control, clean code principles, and collaborative software development. His real-time Screen Sharing App reflects a deep knowledge of peer-to-peer networking and cloud infrastructure. The SocialBook platform showcases his talent for managing complex data relationships and social interactions at scale. Additionally, his Resume Builder project proves his ability to create utility-driven tools that solve real-world problems. By following SOLID principles and adopting Agile methodologies like Scrum, Sadoon ensures that every line of code he writes is maintainable, testable, and future-proof. His GitHub portfolio is a beacon for those looking to hire a developer who prioritizes quality and innovation.</p>
        </section>
        <section>
          <h1>SEO Strategy & Search Engine Marketing for Modern Developers</h1>
          <p>Visibility is the key to success in the 2026 digital economy. Muhammad Sadoon is not just a coder; he is an SEO Expert who knows how to make websites rank #1 on Google. By implementing advanced technical SEO techniques—such as server-side hydration, dynamic meta tag management with react-helmet-async, and exhaustive JSON-LD structured data—he ensures that every page is perfectly indexed. His strategies include generating accurate sitemap.xml files, configuring robots.txt for optimal crawling, and optimizing images for speed. By focusing on mobile-first indexing and high-performance Web Vitals, he guarantees that his portfolios and client projects achieve maximum organic reach. For anyone searching for a "Web Developer in Karachi" or a "MERN Stack Expert in Pakistan," Sadoon’s SEO-driven approach ensures he is the top result.</p>
        </section>
        <section>
          <h1>Professional Journey & Industry Leadership - LinkedIn & Beyond</h1>
          <p>With a professional history that includes impactful roles at App Mesh and Developerhub Corporation, Muhammad Sadoon has established himself as a leader in the IT industry. His LinkedIn profile is a hub for professional networking and a record of consistent career growth. From working with remote global teams to leading local engineering efforts in Karachi, he has proven his ability to adapt to diverse technological environments. His experience as a Professional Software Developer covers the full spectrum of the industry—from initial consultation and architectural design to deployment, maintenance, and DevOps integration via GitHub Actions and AWS. He is committed to mentoring the next generation of developers and contributing to the global tech community through open-source innovation and knowledge sharing on platforms like Instagram and LinkedIn.</p>
        </section>
        <section>
          <h1>Hire Muhammad Sadoon - The Best Developer for Your Next Big Idea</h1>
          <p>Whether you are a startup looking for its first MVP or an established company needing to scale, hiring the right Full Stack Developer is the most important decision you will make. Muhammad Sadoon offers a comprehensive suite of services: Web Development, Mobile App Development, UI/UX Design Consultation, and SEO Optimization. His commitment to your success is reflected in his 24/7 dedication to excellence. Based in Pakistan and available for remote work globally, he is the ideal partner for your digital transformation. Connect with him on LinkedIn (https://www.linkedin.com/in/muhammad-sadoon-94303a352/), follow his technical journey on Instagram (https://www.instagram.com/muhammadsadoonsohail/), or clone his latest projects from GitHub. Join the ranks of satisfied clients who have seen their visions come to life through his expert engineering and creative passion. Let’s build the future together.</p>
          <p>Keywords and Search Terms: Web Developer, Frontend Developer, Backend Developer, Full Stack Developer, React Developer, Node.js Developer, MERN Stack expert, Hire Developer Karachi, Software Engineer Portfolio, React Native Expert, Mobile App Development Services, JavaScript Specialist, TypeScript Professional, Next.js SEO expert, Best Portfolio 2026, Portfolio Showcase Pakistan, Innovative Web Design, Interactive Portfolio, GSAP Animations, Three.js Developer, PostgreSQL SQL expert, MongoDB NoSQL database, Cloud Computing AWS, Vercel Deployment, Indexing Strategy Google, Search Ranking Improvement, Professional Tech Profile GitHub LinkedIn Instagram Developer.</p>
          <p>Additional Professional Context: As we look towards the future of software engineering, the integration of AI-driven development, serverless architectures, and advanced security protocols will define the best developers in the field. Sadoon is already ahead of the curve, incorporating Zod for validation, Redux Toolkit for state management, and React Query for efficient data fetching. His mastery of the entire ecosystem ensures that he doesn't just build apps; he builds businesses. Every project is an opportunity to push the boundaries of what is possible on the web and mobile platforms. Hire Sadoon today for uncompromised quality, speed, and ranking power.</p>
        </section>
      </div>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
