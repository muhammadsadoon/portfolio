import { useEffect, useRef } from "react";
import { SplitText } from "@/components/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "App Mesh",
    role: "MERN STACK DEVELOPER",
    period: "FEB 2026 - Present",
    description:
      "Developing and maintaining full-stack applications using the MERN stack. Implementing robust backend services with Node.js and Express, and creating dynamic user interfaces with React.",
  },
  {
    company: "Developerhub corporation",
    role: "Remote Frontend developer",
    period: "DEC 2025 - FEB 2026",
    description:
      "Focused on building responsive and performant frontend components. Collaborated with remote teams to deliver high-quality web experiences using modern React patterns.",
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate experience cards
    gsap.fromTo(
      ".experience-card",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
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
      id="experience"
      ref={sectionRef}
      className="py-32 md:py-48 relative overflow-hidden bg-surface/30"
    >
      {/* Background number */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[300px] md:text-[500px] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
        03
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-muted-foreground">03</span>
          <div className="w-12 h-px bg-foreground/20" />
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            Experience
          </span>
        </div>

        <div className="mb-20">
          <SplitText
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            animation="words"
            stagger={0.05}
          >
            Professional Journey
          </SplitText>
        </div>

        <div className="space-y-12 max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card group grid md:grid-cols-[200px_1fr] gap-8 p-8 border border-border rounded-2xl bg-card/50 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="space-y-2">
                <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-foreground/80 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-foreground/60 font-medium">{exp.company}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
