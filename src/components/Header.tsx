import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#about", label: "Обо мне" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <svg className="w-12 h-12 text-foreground group-hover:text-primary transition-colors duration-300" viewBox="0 0 64 64" fill="currentColor">
              <path d="M32 4c-2 0-4 1-6 3-4 4-8 6-12 7-2 1-4 2-5 4-1 1-1 3 0 5 2 4 5 7 9 9 1 1 2 2 2 4 0 3 1 6 3 8 2 3 5 5 8 6 1 0 2 1 2 2 0 2 1 4 3 6 2 2 4 3 6 3 2 0 4-1 6-3 2-2 3-4 3-6 0-1 1-2 2-2 3-1 6-3 8-6 2-2 3-5 3-8 0-2 1-3 2-4 4-2 7-5 9-9 1-2 1-4 0-5-1-2-3-3-5-4-4-1-8-3-12-7-2-2-4-3-6-3zm-8 18c2-1 5-1 7 0 2 2 3 4 2 6-1 3-4 5-7 5-2 0-4-1-5-3-1-2-1-4 0-6 1-1 2-2 3-2zm16 0c1 0 2 1 3 2 1 2 1 4 0 6-1 2-3 3-5 3-3 0-6-2-7-5-1-2 0-4 2-6 2-1 5-1 7 0zm-8 12c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4z"/>
            </svg>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-foreground text-xl tracking-wide">BITRIX</span>
              <span className="text-xs text-muted-foreground tracking-widest">expert</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default" className="gap-2">
              <Zap className="w-4 h-4" />
              Быстрый аудит
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-glass-border"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2 gap-2">
                <Zap className="w-4 h-4" />
                Быстрый аудит
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
