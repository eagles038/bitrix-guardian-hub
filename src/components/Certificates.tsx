import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Import certificate images
import certDeveloper from "@/assets/certificates/cert_developer.jpg";
import certAdminBasic from "@/assets/certificates/cert_admin_basic.jpg";
import certAdminModules from "@/assets/certificates/cert_admin_modules.jpg";
import cert1cIntegration from "@/assets/certificates/cert_1c_integration.jpg";
import certComposite from "@/assets/certificates/cert_composite.jpg";
import certContentManager from "@/assets/certificates/cert_content_manager.jpg";
import certServerConfig from "@/assets/certificates/cert_server_config.jpg";
import certAdminBusiness from "@/assets/certificates/cert_admin_business.jpg";

const certificates = [
  {
    id: 1,
    title: "Разработчик Bitrix",
    image: certDeveloper,
  },
  {
    id: 2,
    title: "Администратор Базовый",
    image: certAdminBasic,
  },
  {
    id: 3,
    title: "Администратор Модули",
    image: certAdminModules,
  },
  {
    id: 4,
    title: "Интеграция с 1С",
    image: cert1cIntegration,
  },
  {
    id: 5,
    title: "Композитный сайт",
    image: certComposite,
  },
  {
    id: 6,
    title: "Контент-менеджер",
    image: certContentManager,
  },
  {
    id: 7,
    title: "Конфигурирование серверов",
    image: certServerConfig,
  },
  {
    id: 8,
    title: "Администратор Бизнес",
    image: certAdminBusiness,
  },
];

// Certificate preview component with real images
const CertificatePreview = ({ cert, onClick }: { cert: typeof certificates[0]; onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="flex-shrink-0 w-36 md:w-44 cursor-pointer group"
  >
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 aspect-[3/4]">
      <img 
        src={cert.image} 
        alt={`Сертификат ${cert.title}`}
        className="w-full h-full object-cover"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
          Просмотреть
        </span>
      </div>
    </div>
    <p className="mt-2 text-xs md:text-sm text-center text-muted-foreground truncate">
      {cert.title}
    </p>
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
            className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Certificate image */}
            <img 
              src={selectedCert.image} 
              alt={`Сертификат ${selectedCert.title}`}
              className="w-full h-auto"
            />
            
            {/* Certificate info */}
            <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <h3 className="text-lg font-bold text-white">
                {selectedCert.title}
              </h3>
              <p className="text-sm text-white/80">
                BitrixPro • 2024
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;
