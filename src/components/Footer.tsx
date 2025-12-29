import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border">
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

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BitrixPro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
