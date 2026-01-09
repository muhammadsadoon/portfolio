import { useState, useRef, useEffect } from "react";
import { SplitText } from "@/components/SplitText";
import { MagneticButton } from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".contact-element",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 md:py-48 bg-surface/50 relative overflow-hidden"
    >
      {/* Background number */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[300px] md:text-[500px] font-bold text-foreground/[0.02] leading-none pointer-events-none select-none">
        04
      </div>

      <div className="container mx-auto md:spx-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-muted-foreground">04</span>
          <div className="w-12 h-px bg-foreground/20" />
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
            Contact
          </span>
        </div>

        <div className="grid lg:grid-cols-2 w-full gap-16 lg:gap-24">
          {/* Left side */}
          <div>
            <SplitText
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
              animation="words"
              stagger={0.05}
            >
              Let's work together
            </SplitText>

            <p className="contact-element text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
              Have a project in mind? Let's create something extraordinary
              together. I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:muhammadsadoonsohail786@gmail.com.dev"
                className="contact-element flex items-center gap-4 text-foreground hover:text-foreground/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <Mail className="h-5 w-5 group-hover:text-background transition-colors" />
                </div>
                <span className="font-mono">muhammadsadoonsohail786@gmail.com</span>
              </a>

              <div className="contact-element flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-mono">Naval colony, karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="contact-element">
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 py-4 text-lg focus:border-foreground focus-visible:ring-0 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div className="contact-element">
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 py-4 text-lg focus:border-foreground focus-visible:ring-0 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="contact-element">
              <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-transparent border-0 border-b border-foreground/20 rounded-none px-0 py-4 text-lg focus:border-foreground focus-visible:ring-0 resize-none transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="contact-element pt-6">
              <MagneticButton>
                <Button
                  type="submit"
                  size="xl"
                  disabled={isSubmitting}
                  className="group w-full md:w-auto"
                >
                  <span className="flex items-center gap-3">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
