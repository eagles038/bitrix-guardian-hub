import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import badge images
import badgeQuality from "@/assets/badges/badge-quality.svg";
import badgeComposite from "@/assets/badges/badge-composite.svg";
import badge1c from "@/assets/badges/badge-1c.svg";
import partnerBadge from "@/assets/badges/partner-badge.webp";
import bitrixLogo from "@/assets/1c-bitrix-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-glass-border">
      {/* Competencies Section */}
      <div className="py-10 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold text-center text-foreground mb-6">
            Подтверждённые компетенции
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a 
              href="https://marketplace.1c-bitrix.ru/partners/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={partnerBadge} 
                alt="Сертифицированный партнер 1С-Битрикс" 
                className="h-16 md:h-20 w-auto"
              />
            </a>
            <a 
              href="https://www.1c-bitrix.ru/partners/competences.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={badgeQuality} 
                alt="Компетенция Качество внедрений" 
                className="h-12 md:h-14 w-auto"
              />
            </a>
            <a 
              href="https://www.1c-bitrix.ru/products/cms/modules/compozit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={badgeComposite} 
                alt="Компетенция Композитный сайт" 
                className="h-12 md:h-14 w-auto"
              />
            </a>
            <a 
              href="https://www.1c-bitrix.ru/products/cms/modules/1c-integration/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={badge1c} 
                alt="Компетенция Интеграция с 1С" 
                className="h-12 md:h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

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

      {/* Bitrix Powered Section */}
      <div className="py-4 border-t border-glass-border bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <a 
              href="https://www.1c-bitrix.ru/products/cms/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <img 
                src={bitrixLogo} 
                alt="1С-Битрикс" 
                className="h-10 w-auto"
              />
              <span className="text-sm">
                Работает на{" "}
                <span className="font-medium text-foreground">«1С-Битрикс: Управление сайтом»</span>
              </span>
            </a>
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
              <Link 
                to="/bitrix-editions" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Редакции 1С-Битрикс
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
