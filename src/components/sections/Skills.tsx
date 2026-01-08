import { useEffect, useRef } from "react";
import { SplitText } from "@/components/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiGit,
  SiFigma,
  SiFirebase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Redux", icon: SiRedux },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Firebase", icon: SiFirebase },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Infinite horizontal scroll
    const marqueeContent = marquee.querySelector(".marquee-content");
    if (marqueeContent) {
      gsap.to(marqueeContent, {
        xPercent: -50,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }

    // Animate skill cards
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
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
      id="skills"
      ref={sectionRef}
      className="py-32 md:py-48 bg-surface/50 relative overflow-hidden"
    >
      {/* Background number */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[300px] md:text-[500px] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
        02
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-muted-foreground">02</span>
          <div className="w-12 h-px bg-foreground/20" />
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            Skills
          </span>
        </div>

        <div className="mb-20">
          <SplitText
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            animation="words"
            stagger={0.05}
          >
            Technologies I work with
          </SplitText>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-24">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-foreground/30 transition-all duration-300 cursor-pointer"
            >
              <skill.icon className="h-10 w-10 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="overflow-hidden py-8 border-y border-foreground/10">
        <div className="marquee-content flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[
                "REACT",
                "•",
                "NEXT.JS",
                "•",
                "TYPESCRIPT",
                "•",
                "TAILWIND",
                "•",
                "REDUX",
                "•",
                "FIREBASE",
                "•",
                "GSAP",
                "•",
                "FIGMA",
                "•",
              ].map((item, j) => (
                <span
                  key={j}
                  className={`text-6xl md:text-8xl font-bold mx-4 ${
                    item === "•" ? "text-foreground/20" : "text-foreground/10"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
