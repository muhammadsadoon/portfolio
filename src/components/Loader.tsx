import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Counter animation
    const counterAnimation = { value: 0 };
    gsap.to(counterAnimation, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => setCounter(Math.round(counterAnimation.value)),
    });

    // Split text animation for name
    const chars = textRef.current?.querySelectorAll(".char");
    if (chars) {
      tl.fromTo(
        chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
        }
      );
    }

    // Exit animation
    tl.to(
      chars,
      {
        y: -100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: "power4.in",
        delay: 0.5,
      }
    )
      .to(
        counterRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.4"
      )
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        onComplete,
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const name = "MUHAMMAD SADOON";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Split text name */}
        <div ref={textRef} className="overflow-hidden mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
            {name.split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Counter */}
        <div className="overflow-hidden">
          <span
            ref={counterRef}
            className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold text-foreground/20"
          >
            {counter.toString().padStart(3, "0")}
          </span>
        </div>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-px bg-foreground/10 overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-100 ease-out"
          style={{ width: `${counter}%` }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 font-mono text-xs text-foreground/40">
        PORTFOLIO.2024
      </div>
      <div className="absolute top-8 right-8 font-mono text-xs text-foreground/40">
        FRONTEND DEV
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-xs text-foreground/40">
        LOADING
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-xs text-foreground/40">
        {counter}%
      </div>
    </div>
  );
};
