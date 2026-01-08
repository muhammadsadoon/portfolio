import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const navLinks = [
  { label: "About", href: "#about", number: "01" },
  { label: "Skills", href: "#skills", number: "02" },
  { label: "Projects", href: "#projects", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <MagneticButton>
            <a
              href="#"
              className="font-mono text-xl font-bold hover:text-foreground/60 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              MS.
            </a>
          </MagneticButton>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <MagneticButton key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="group font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-foreground/30 mr-1">{link.number}.</span>
                  {link.label}
                </button>
              </MagneticButton>
            ))}

            {/* Theme Toggle Button */}
            <MagneticButton>
              <button
                onClick={toggleTheme}
                className="relative w-14 h-8 bg-muted rounded-full p-1 transition-colors duration-300 hover:bg-muted/80"
                aria-label="Toggle theme"
              >
                <div
                  className={`absolute top-1 w-6 h-6 rounded-full bg-foreground flex items-center justify-center transition-all duration-300 ${
                    isDark ? "left-1" : "left-7"
                  }`}
                >
                  {isDark ? (
                    <Moon className="h-3.5 w-3.5 text-background" />
                  ) : (
                    <Sun className="h-3.5 w-3.5 text-background" />
                  )}
                </div>
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-colors hover:bg-muted/80"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </button>
            <button
              className="text-foreground z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-4xl font-bold hover:text-foreground/60 transition-colors"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : "0ms",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              <span className="font-mono text-lg text-foreground/30 mr-2">
                {link.number}
              </span>
              {link.label}
            </button>
          ))}

          {/* Theme indicator in mobile menu */}
          <div
            className="flex items-center gap-3 mt-8 text-muted-foreground"
            style={{
              transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            <span className="font-mono text-sm">Theme:</span>
            <span className="font-mono text-sm text-foreground">
              {isDark ? "Dark" : "Light"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
