import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  animation?: "chars" | "words" | "lines";
  triggerOnScroll?: boolean;
}

export const SplitText = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.03,
  animation = "chars",
  triggerOnScroll = true,
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".split-element");

    const animationConfig = {
      y: 100,
      opacity: 0,
      rotateX: -90,
    };

    gsap.set(elements, animationConfig);

    const trigger = triggerOnScroll
      ? {
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      : {};

    gsap.to(elements, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: 1,
      stagger,
      delay,
      ease: "power4.out",
      ...trigger,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [delay, stagger, triggerOnScroll]);

  const renderContent = () => {
    if (animation === "words") {
      return children.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="split-element inline-block">{word}</span>
        </span>
      ));
    }

    if (animation === "chars") {
      return children.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            className="split-element inline-block"
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ));
    }

    return (
      <span className="inline-block overflow-hidden">
        <span className="split-element inline-block">{children}</span>
      </span>
    );
  };

  return (
    <div ref={containerRef} className={className} style={{ perspective: 1000 }}>
      {renderContent()}
    </div>
  );
};
