import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Разработчик Bitrix",
    color: "#C32865",
  },
  {
    id: 2,
    title: "Администратор Базовый",
    color: "#2563eb",
  },
  {
    id: 3,
    title: "Администратор Модули",
    color: "#059669",
  },
  {
    id: 4,
    title: "Интеграция с 1С",
    color: "#7c3aed",
  },
  {
    id: 5,
    title: "Композитный сайт",
    color: "#dc2626",
  },
  {
    id: 6,
    title: "Контент-менеджер",
    color: "#0891b2",
  },
  {
    id: 7,
    title: "Конфигурирование серверов",
    color: "#ca8a04",
  },
  {
    id: 8,
    title: "Администратор Бизнес",
    color: "#be185d",
  },
];

// Certificate preview component styled like official 1C-Bitrix certificates
const CertificatePreview = ({ cert, onClick }: { cert: typeof certificates[0]; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="flex-shrink-0 w-36 md:w-44 cursor-pointer group"
  >
    {/* Certificate card styled like official Bitrix certificates */}
    <div 
      className="relative bg-gradient-to-b from-white to-gray-50 rounded-lg shadow-lg overflow-hidden border border-gray-200 aspect-[3/4] p-3 md:p-4"
    >
      {/* Top decorative border */}
      <div 
        className="absolute top-0 left-0 right-0 h-2"
        style={{ backgroundColor: cert.color }}
      />
      
      {/* Bitrix logo area */}
      <div className="flex items-center justify-center mt-2 mb-3">
        <div className="flex items-center gap-1">
          <span className="text-[10px] md:text-xs font-bold text-gray-700">1С-Битрикс</span>
        </div>
      </div>
      
      {/* Certificate text */}
      <div className="text-center space-y-2">
        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-wider">
          Сертификат
        </p>
        <h4 className="text-[9px] md:text-xs font-semibold text-gray-800 leading-tight min-h-[32px] flex items-center justify-center">
          {cert.title}
        </h4>
      </div>
      
      {/* Decorative seal */}
      <div className="absolute bottom-3 right-3">
        <div 
          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center opacity-20"
          style={{ backgroundColor: cert.color }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
          </svg>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: cert.color, opacity: 0.3 }} />
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
  </motion.div>
);

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Сертифицированный разработчик 1С-Битрикс
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Сертификация подтверждает навыки и гарантию качества. Нажмите на сертификат для просмотра.
          </p>
        </motion.div>

        {/* Certificates scrolling line */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden py-4">
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-4 md:gap-6"
            >
              {/* Duplicate certificates for seamless loop */}
              {[...certificates, ...certificates, ...certificates].map((cert, index) => (
                <CertificatePreview 
                  key={`${cert.id}-${index}`} 
                  cert={cert} 
                  onClick={() => setSelectedCert(cert)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal for viewing certificate */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-2xl max-w-md w-full aspect-[3/4] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Top decorative border */}
            <div 
              className="absolute top-0 left-0 right-0 h-3 rounded-t-xl"
              style={{ backgroundColor: selectedCert.color }}
            />
            
            {/* Certificate content */}
            <div className="h-full flex flex-col items-center justify-center text-center">
              {/* Logo */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: selectedCert.color }}
                  >
                    <span className="font-bold text-white text-lg">1C</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">Битрикс</span>
                </div>
              </div>
              
              {/* Certificate text */}
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">
                Сертификат
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedCert.title}
              </h3>
              <p className="text-gray-600 mb-6">
                Настоящим подтверждается успешное прохождение сертификации по направлению «{selectedCert.title}»
              </p>
              
              {/* Decorative seal */}
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: selectedCert.color, opacity: 0.15 }}
              >
                <svg 
                  className="w-10 h-10" 
                  fill={selectedCert.color} 
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              
              <p className="mt-6 text-sm text-gray-500">
                BitrixPro • 2024
              </p>
            </div>

            {/* Bottom decorative line */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-2 rounded-b-xl" 
              style={{ backgroundColor: selectedCert.color, opacity: 0.3 }} 
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;
