import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplitText } from "@/components/SplitText";
import { MagneticButton } from "@/components/MagneticButton";
import { ProgrammerScene } from "@/components/3d/ProgrammerScene";
import gsap from "gsap";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 });

    // Animate the decorative line
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: "power4.out" }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        socialRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        scrollRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    // Floating animations
    gsap.to(".hero-decoration-1", {
      y: -30,
      x: 20,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".hero-decoration-2", {
      y: 20,
      x: -30,
      duration: 5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Programmer Scene */}
      <ProgrammerScene />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-decoration-1 absolute top-1/4 right-1/4 w-[500px] h-[500px] border border-foreground/5 rounded-full" />
        <div className="hero-decoration-2 absolute bottom-1/4 left-1/4 w-[300px] h-[300px] border border-foreground/5 rounded-full" />
        <div className="absolute top-20 right-20 w-2 h-2 bg-foreground/20 rounded-full" />
        <div className="absolute bottom-40 left-40 w-3 h-3 bg-foreground/10 rounded-full" />
      </div>

      {/* Social Links - Fixed Left */}
      <div
        ref={socialRef}
        className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-50"
      >
        <MagneticButton>
          <a
            href="https://github.com/muhammadsadoon"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="https://www.linkedin.com/in/muhammad-sadoon-94303a352/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="mailto:muhammadsadoonsohail786@gmail.com"
            className="block p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Mail className="h-5 w-5" />
          </a>
        </MagneticButton>
        <div className="w-px h-24 bg-foreground/20" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Overline */}
          <div className="flex items-center gap-4 mb-8">
            <div
              ref={lineRef}
              className="w-16 h-px bg-foreground origin-left"
            />
            <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
              Frontend Developer
            </span>
          </div>

          {/* Main heading with split text */}
          <div className="mb-6">
            <SplitText
              className="text-5xl md:text-7xl lg:text-[120px] font-bold leading-[0.9] tracking-tighter"
              animation="chars"
              stagger={0.02}
              triggerOnScroll={false}
            >
              MUHAMMAD
            </SplitText>
          </div>
          <div className="mb-12">
            <SplitText
              className="text-5xl dark:text-foreground/40 md:text-7xl lg:text-[120px] font-bold leading-[0.9] tracking-tighter "
              animation="chars"
              delay={0.3}
              stagger={0.02}
              triggerOnScroll={false}
            >
              SADOON
            </SplitText>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle text-white text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed opacity-0">
            Crafting exceptional digital experiences through clean code and
            pixel-perfect design. Specialized in{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>, and
            modern web technologies.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <MagneticButton className="hero-cta opacity-0">
              <Button
                variant="default"
                size="xl"
                onClick={scrollToProjects}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </MagneticButton>
            <MagneticButton className="hero-cta opacity-0">
              <Button
                variant="outline"
                size="xl"
                onClick={scrollToContact}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <span className="w-2 h-2 bg-foreground rounded-full group-hover:scale-150 transition-transform" />
                </span>
              </Button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        ref={scrollRef}
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-[scrollDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </button>

      {/* Corner info */}
      <div className="absolute top-8 right-8 font-mono text-xs text-muted-foreground hidden md:block">
        <div>BASED IN PAKISTAN</div>
        <div className="text-foreground/30 mt-1">— 2024</div>
      </div>
    </section>
  );
};
