import { useEffect, useRef } from "react";
import { SplitText } from "@/components/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stats = statsRef.current;
    if (!section || !stats) return;

    // Animate stats on scroll
    const statNumbers = stats.querySelectorAll(".stat-number");
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.getAttribute("data-target") || "0");
      gsap.fromTo(
        stat,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate content blocks
    gsap.fromTo(
      ".about-block",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
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

  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 20, suffix: "+", label: "Happy Clients" },
    { number: 100, suffix: "%", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 md:py-48 relative overflow-hidden"
    >
      {/* Background number */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[300px] md:text-[500px] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
        01
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-muted-foreground">01</span>
          <div className="w-12 h-px bg-foreground/20" />
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            About
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Heading */}
          <div>
            <SplitText
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              animation="words"
              stagger={0.05}
            >
              I create digital experiences that matter
            </SplitText>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <p className="about-block text-lg text-muted-foreground leading-relaxed">
              I'm Muhammad Sadoon, a passionate Frontend Developer based in
              Pakistan. I specialize in building responsive, accessible, and
              performant web applications that deliver exceptional user
              experiences.
            </p>
            <p className="about-block text-lg text-muted-foreground leading-relaxed">
              With expertise in React, Next.js, and TypeScript, I transform
              complex problems into elegant solutions. My approach combines
              technical precision with creative vision to build products that
              users love.
            </p>
            <p className="about-block text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source, or perfecting my craft through continuous
              learning.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-24 border-t border-foreground/10"
        >
          {stats.map((stat, index) => (
            <div key={index} className="about-block text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span
                  className="stat-number text-5xl md:text-6xl font-bold"
                  data-target={stat.number}
                >
                  0
                </span>
                <span className="text-3xl md:text-4xl font-bold text-foreground/40">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
