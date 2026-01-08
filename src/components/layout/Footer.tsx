import { Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-lg font-bold hover:text-foreground/60 transition-colors"
          >
            MS.
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <MagneticButton>
              <a
                href="https://github.com/muhammadsadoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <Github className="h-5 w-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="mailto:contact@muhammadsadoon.dev"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <Mail className="h-5 w-5" />
              </a>
            </MagneticButton>
          </div>

          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Sadoon
          </p>
        </div>
      </div>
    </footer>
  );
};
