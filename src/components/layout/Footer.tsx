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
                href="https://www.linkedin.com/in/muhammad-sadoon-94303a352/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://www.instagram.com/muhammadsadoonsohail/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="mailto:muhammadsadoonsohail786@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="Email"
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
