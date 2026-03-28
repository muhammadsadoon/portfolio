import { useEffect, useRef } from "react";
import { SplitText } from "@/components/SplitText";
import { MagneticButton } from "@/components/MagneticButton";
import { ArrowUpRight, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Resume Builder",
    description:
      "A dynamic resume builder with PDF export, modern templates, and intuitive form handling.",
    tech: ["React", "TypeScript", "Tailwind CSS", "PDF Generation"],
    year: "2024",
    github: "https://github.com/muhammadsadoon",
  },
  {
    number: "02",
    title: "Student Management",
    description:
      "Comprehensive system for managing students and academic records with scalable architecture.",
    tech: ["React", "Redux", "REST API", "Tailwind"],
    year: "2024",
    github: "https://github.com/muhammadsadoon",
  },
  {
    number: "03",
    title: "Screen Sharing App",
    description:
      "Real-time screen sharing using WebRTC with room-based connections and Firebase signaling.",
    tech: ["React", "WebRTC", "Firebase", "TypeScript"],
    year: "2023",
    github: "https://github.com/muhammadsadoon",
  },
  {
    number: "04",
    title: "SocialBook",
    description:
      "Full-featured social platform with auth, real-time chat, posts, and modern UI.",
    tech: ["React", "Firebase", "Redux", "Real-time DB"],
    year: "2023",
    github: "https://github.com/muhammadsadoon",
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate project cards
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );

    // Hover animations are handled in CSS

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 md:py-48 relative overflow-hidden"
    >
      {/* Background number */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[300px] md:text-[500px] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
        04
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-muted-foreground">04</span>
          <div className="w-12 h-px bg-foreground/20" />
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            Projects
          </span>
        </div>

        <div className="mb-20">
          <SplitText
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            animation="words"
            stagger={0.05}
          >
            Selected works
          </SplitText>
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className="project-card group border-t border-foreground/10 first:border-t-0"
            >
              <div className="py-12 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-pointer">
                {/* Number */}
                <span className="font-mono text-sm text-muted-foreground w-12">
                  {project.number}
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold flex-1 group-hover:text-foreground/60 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Year */}
                <span className="font-mono text-sm text-muted-foreground hidden md:block">
                  {project.year}
                </span>

                {/* Arrow */}
                <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 text-foreground/60 group-hover:text-background transition-colors duration-300" />
                </div>
              </div>

              {/* Expandable content on hover */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500 ease-in-out">
                <div className="pb-12 md:pl-24 flex flex-col md:flex-row gap-8">
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono items-center justify-center flex text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <MagneticButton>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View Source Code for ${project.title} on GitHub`}
                      className="inline-flex items-center gap-2 font-mono text-sm text-foreground hover:text-foreground/60 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 text-center">
          <MagneticButton>
            <a
              href="https://github.com/muhammadsadoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>VIEW ALL PROJECTS ON GITHUB</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
