import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Небольшая задержка перед показом
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
          >
            <div className="relative bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-5 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleDecline}
                className="absolute top-3 right-3 p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Закрыть"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-4">
                {/* Cookie Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 pr-4">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Этот сайт использует cookie. Продолжая пользоваться сайтом, вы
                    даете согласие на использование ваших cookie-файлов.
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={handleAccept}
                      size="sm"
                      className="px-5"
                    >
                      Принять
                    </Button>
                    <Button
                      onClick={() => setShowDetails(true)}
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              Политика использования cookie
            </DialogTitle>
            <DialogDescription className="text-left pt-4 space-y-4">
              <p>
                Cookie-файлы — это небольшие текстовые файлы, которые сохраняются
                на вашем устройстве при посещении нашего сайта.
              </p>
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Мы используем cookie для:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Обеспечения корректной работы сайта</li>
                  <li>Сохранения ваших настроек и предпочтений</li>
                  <li>Анализа использования сайта для его улучшения</li>
                  <li>Персонализации контента</li>
                </ul>
              </div>
              <p className="text-sm">
                Вы можете отключить cookie в настройках браузера, однако это
                может повлиять на функциональность сайта.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setShowDetails(false)}>
              Закрыть
            </Button>
            <Button
              onClick={() => {
                handleAccept();
                setShowDetails(false);
              }}
            >
              Принять все
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
