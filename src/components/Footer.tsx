import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-glass-border">
      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="font-mono font-bold text-primary-foreground text-lg">1C</span>
              </div>
              <span className="font-semibold text-foreground">BitrixPro</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="mailto:hello@bitrixpro.ru"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@bitrixpro.ru
              </a>
              <a
                href="tel:+79991234567"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 (999) 123-45-67
              </a>
              <a
                href="https://t.me/bitrixpro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-4 border-t border-glass-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link 
                to="/contacts" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Контакты
              </Link>
              <Link 
                to="/blog" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Блог
              </Link>
              <span className="text-muted-foreground">
                ИП Иванов И.И. | ИНН: 123456789012
              </span>
            </div>
            <p className="text-muted-foreground">
              © 2010–{currentYear} BitrixPro — Разработка на 1С-Битрикс
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
