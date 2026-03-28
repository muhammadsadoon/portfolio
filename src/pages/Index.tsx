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
        <h1>Sadoon Portfolio - Muhammad Sadoon</h1>
        <p>Sadoon is an Elite Full Stack MERN and React Native Developer specializing in high-performance web and mobile applications.</p>
        <section>
          <h1>About Muhammad Sadoon - Elite Full Stack Developer & Software Engineer</h1>
          <p>Muhammad Sadoon is a highly passionate and detail-oriented elite developer based in Karachi, Pakistan, dedicated to creating high-impact digital experiences. With a focus on technical precision, performance optimization, and creative vision, he transforms complex business problems into elegant, user-centric software solutions. As a specialist in the modern web ecosystem, he combines deep architectural knowledge with cutting-edge frontend techniques to build products that stand out. Based in the Naval Colony area, he is committed to staying at the absolute forefront of industry trends through continuous learning, open-source contribution, and mastering advanced frameworks like Next.js and React Native.</p>
        </section>
        <section>
          <h1>Advanced Technical Skills & MERN Tech Stack Specialization</h1>
          <p>My technical arsenal includes a profound end-to-end mastery of the MERN stack—MongoDB, Express.js, React, and Node.js. I specialize in building robust, secure, and highly scalable backend systems with Node.js and NestJS, optimized through Redis caching and persistent storage using either PostgreSQL or MongoDB databases. For the client side, I utilize React and Next.js alongside TypeScript, Tailwind CSS, and Framer Motion to deliver premium, interactive, and beautifully animated UI/UX experiences. I am highly proficient in Express middleware, MongoDB aggregation frameworks, Mongoose ORM, and React Hooks for state management. My mobile expertise covers the entire lifecycle of cross-platform development using React Native for both iOS and Android platforms, ensuring native-like performance and seamless integration.</p>
        </section>
        <section>
          <h1>Professional Journey, Career Milestone & Industrial Experience</h1>
          <p>I have built a solid professional foundation through challenging roles at respected technology companies. At App Mesh, I currently serve as a MERN Stack Developer, where I lead the development of complex platform features, focusing on API security, rate limiting, and CORS configuration. My previous tenure at Developerhub Corporation as a Remote Frontend Developer allowed me to collaborate with diverse global teams to deliver high-performance, responsive, and pixel-perfect interfaces. This journey has equipped me with the skills to handle enterprise-level projects with confidence, utilizing PM2, Nginx, and advanced logging with Winston and Morgan.</p>
        </section>
        <section>
          <h1>Selected Technical Projects Portfolio - Web & Mobile Showcase</h1>
          <p>My project portfolio highlights my broad technical range, problem-solving abilities, and commitment to excellence. Featured works include a cutting-edge real-time Screen Sharing Application built using WebRTC and Firebase, a sophisticated SocialBook platform with complex social graph database interactions, and an advanced Resume Builder featuring dynamic multi-format exports. Each project in this portfolio showcase demonstrates a rigorous commitment to clean code standards, performance optimization, accessibility, and delivering a superior end-user experience. Whether it's a student management system or a complex fintech app, I deliver results that exceed expectations.</p>
        </section>
        <section>
          <h1>Freelance Services, Technical Consultation & App Development</h1>
          <p>Are you looking to hire a MERN stack developer, a React Native expert, or seeking professional technical consultation for your next big idea? My services cover full-cycle web and mobile app development, performance tuning, and DevOps integration. I prioritize high-performance indexing, world-class SEO, and scalability in every project. This FAQ section provides detailed insights into my technical specialization, development methodology, and current availability for custom freelance projects or full-time roles. I am dedicated to helping business owners and startups achieve their digital goals through innovation.</p>
        </section>
        <section>
          <h1>Hire Muhammad Sadoon - Contact for Opportunities & Collaborations</h1>
          <p>Ready to kickstart your next innovative project or looking to add a talented, high-performing Full Stack Developer to your engineering team? I am always open to discussing new opportunities, professional collaborations, and remote full-time positions. Located in Karachi, Pakistan, I am available for global remote work. Let's connect and work together to engineer something extraordinary that delivers real, measurable value to your users and drives your business success forward in the digital landscape.</p>
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
