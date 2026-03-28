import { useEffect, useRef } from "react";
import { SplitText } from "@/components/SplitText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js), PostgreSQL, and mobile development with React Native. I also have expertise in modern tools like Next.js, TypeScript, and Docker.",
  },
  {
    question: "Do you offer custom web and mobile app development?",
    answer: "Yes, I provide end-to-end development services for both web and mobile platforms, ensuring responsive design, performance, and scalability.",
  },
  {
    question: "Are you available for remote work and freelance projects?",
    answer: "Certainly! I have experience working with remote teams at Developerhub Corporation and App Mesh, and I'm always open to discussing new freelance opportunities.",
  },
  {
    question: "How do you ensure high performance and SEO for websites?",
    answer: "I use modern frameworks like Next.js for server-side rendering, implement advanced SEO techniques with react-helmet-async, and optimize assets and animations for a smooth user experience.",
  },
];

export const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".faq-element",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-32 md:py-48 relative overflow-hidden"
    >
      {/* Background number */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[300px] md:text-[500px] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
        05
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-muted-foreground">05</span>
          <div className="w-12 h-px bg-foreground/20" />
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            FAQ
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <SplitText
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
              animation="words"
              stagger={0.05}
            >
              Common Queries
            </SplitText>
            <p className="faq-element text-lg text-muted-foreground leading-relaxed max-w-md">
              Find answers to frequently asked questions about my services and
              technical expertise.
            </p>
          </div>

          <div className="faq-element">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-foreground/10">
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-foreground/70 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
