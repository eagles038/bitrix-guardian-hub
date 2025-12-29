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
          <a href="#" className="flex items-center gap-3 group">
            <svg className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-300" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5c-5 0-10 2-14 5L15 25c-4 3-7 8-7 14v22c0 6 3 11 7 14l21 15c4 3 9 5 14 5s10-2 14-5l21-15c4-3 7-8 7-14V39c0-6-3-11-7-14L64 10c-4-3-9-5-14-5zm0 15c2 0 4 1 5 2l15 11c2 1 3 3 3 5v16c0 2-1 4-3 5L55 70c-1 1-3 2-5 2s-4-1-5-2L30 59c-2-1-3-3-3-5V38c0-2 1-4 3-5l15-11c1-1 3-2 5-2z"/>
            </svg>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-foreground text-lg leading-tight">BITRIX</span>
              <span className="text-xs text-primary leading-tight">expert</span>
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
