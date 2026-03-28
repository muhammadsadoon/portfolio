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
        <h1>Muhammad Sadoon - Portfolio</h1>
        <p>Muhammad Sadoon is a Full Stack MERN and React Native Developer specializing in high-performance web and mobile applications.</p>
        <section>
          <h2>About Muhammad Sadoon - Professional Developer</h2>
          <p>Muhammad Sadoon is a passionate and detail-oriented developer dedicated to creating high-impact digital experiences. With a focus on technical precision and creative vision, he transforms complex problems into elegant, user-centric solutions. Based in Naval Colony, Karachi, Pakistan, he is committed to staying at the forefront of technology through continuous learning and open-source contribution.</p>
        </section>
        <section>
          <h2>Advanced Skills & Modern Technologies</h2>
          <p>My technical arsenal includes a deep understanding of the full end-to-end MERN stack. I build robust backend systems with Node.js, Express, and NestJS, optimized with Redis caching and PostgreSQL or MongoDB databases. For the frontend, I utilize React and Next.js, along with TypeScript, Tailwind CSS, and Framer Motion for premium, interactive UI/UX. My mobile expertise covers cross-platform development using React Native for both iOS and Android.</p>
        </section>
        <section>
          <h2>Professional Journey & Industry Experience</h2>
          <p>I have built my professional foundation through challenging roles at respected companies. At App Mesh, I work as a MERN Stack Developer, leading the development of complex features and ensuring platform scalability. My tenure at Developerhub Corporation as a Remote Frontend Developer allowed me to collaborate with global teams to deliver high-performance, responsive interfaces for diverse client needs.</p>
        </section>
        <section>
          <h2>Selected Technical Projects</h2>
          <p>My project portfolio highlights my technical range and problem-solving abilities. Features include a real-time Screen Sharing App using WebRTC and Firebase, a SocialBook platform with complex database interactions, and an advanced Resume Builder with dynamic PDF generation. Each project demonstrates a commitment to clean code, performance optimization, and superior user experience.</p>
        </section>
        <section>
          <h2>Frequently Asked Questions & Expert Consultation</h2>
          <p>Seeking expert advice on MERN stack development, React Native mobile apps, or DevOps integration? My FAQ section provides insights into my specialization, development methodology, and availability for custom projects. I prioritize performance, scalability, and high-level SEO in every project I undertake.</p>
        </section>
        <section>
          <h2>Contact Muhammad Sadoon for Opportunities</h2>
          <p>Ready to start your next project or looking for a talented Full Stack Developer for your team? I am always open to discussing new opportunities, whether for remote full-time positions or freelance collaborations. Let's work together to create something extraordinary that delivers real value to your users.</p>
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
