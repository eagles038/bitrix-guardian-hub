import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronDown, Palette, Layout, Blocks, Headphones, Award, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  href: string;
  label: string;
  submenu?: { href: string; label: string; icon?: React.ElementType; description?: string }[];
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ["services", "pricing", "portfolio", "about", "certificates", "testimonials", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Check if nav item or its submenu is active
  const isNavItemActive = (link: NavItem) => {
    const sectionId = link.href.replace("#", "");
    if (activeSection === sectionId) return true;
    if (link.submenu) {
      return link.submenu.some((sub) => sub.href.replace("#", "") === activeSection);
    }
    return false;
  };

  const navLinks: NavItem[] = [
    {
      href: "#services",
      label: "Услуги",
      submenu: [
        { href: "#services", label: "Веб-дизайн", icon: Palette, description: "UI/UX, прототипы, макеты" },
        { href: "#services", label: "HTML-верстка", icon: Layout, description: "Pixel Perfect, БЭМ" },
        { href: "#services", label: "Интеграция на Битрикс", icon: Blocks, description: "Натяжка, компоненты 2.0" },
        { href: "#services", label: "Техподдержка", icon: Headphones, description: "Доработки, обновления" },
      ],
    },
    { href: "#pricing", label: "Тарифы" },
    { href: "#portfolio", label: "Портфолио" },
    {
      href: "#about",
      label: "Обо мне",
      submenu: [
        { href: "#about", label: "Опыт и навыки", icon: Award, description: "10+ лет в разработке" },
        { href: "#certificates", label: "Сертификаты", icon: FileText, description: "Официальные сертификаты" },
        { href: "#testimonials", label: "Отзывы", icon: Users, description: "Что говорят клиенты" },
      ],
    },
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
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <a
                  href={link.href}
                  className={`relative flex items-center gap-1 transition-colors duration-200 text-sm font-medium py-2 ${
                    isNavItemActive(link) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === link.label ? 'rotate-180' : ''}`} />
                  )}
                  {/* Active indicator */}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    animate={{ scaleX: isNavItemActive(link) ? 1 : 0, opacity: isNavItemActive(link) ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.submenu && openSubmenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                      <div className="py-2">
                        {link.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-muted/50 transition-colors duration-200"
                          >
                            {subItem.icon && (
                              <subItem.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            )}
                            <div>
                              <div className="text-sm font-medium text-foreground">{subItem.label}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-0.5">{subItem.description}</div>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-glass-border"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => setMobileOpenSubmenu(mobileOpenSubmenu === link.label ? null : link.label)}
                          className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors duration-200 py-3"
                        >
                          <span>{link.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpenSubmenu === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileOpenSubmenu === link.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 border-l-2 border-primary/30 ml-2"
                            >
                              {link.submenu.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="flex items-center gap-3 py-2.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileOpenSubmenu(null);
                                  }}
                                >
                                  {subItem.icon && <subItem.icon className="w-4 h-4 text-primary" />}
                                  <span className="text-sm">{subItem.label}</span>
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className="block text-muted-foreground hover:text-foreground transition-colors duration-200 py-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
                <Button variant="hero" size="lg" className="mt-4 gap-2">
                  <Zap className="w-4 h-4" />
                  Быстрый аудит
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
