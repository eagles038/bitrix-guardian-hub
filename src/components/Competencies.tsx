import { motion } from "framer-motion";

// Import badge images
import badgeQuality from "@/assets/badges/badge-quality.svg";
import badgeComposite from "@/assets/badges/badge-composite.svg";
import badge1c from "@/assets/badges/badge-1c.svg";
import partnerBadge from "@/assets/badges/partner-badge.webp";

const badges = [
  {
    src: partnerBadge,
    alt: "Сертифицированный партнер 1С-Битрикс",
    href: "https://marketplace.1c-bitrix.ru/partners/",
    height: "h-16",
  },
  {
    src: badgeQuality,
    alt: "Компетенция Качество внедрений",
    href: "https://www.1c-bitrix.ru/partners/competences.php",
    height: "h-12",
  },
  {
    src: badgeComposite,
    alt: "Компетенция Композитный сайт",
    href: "https://www.1c-bitrix.ru/products/cms/modules/compozit/",
    height: "h-12",
  },
  {
    src: badge1c,
    alt: "Компетенция Интеграция с 1С",
    href: "https://www.1c-bitrix.ru/products/cms/modules/1c-integration/",
    height: "h-12",
  },
];

const Competencies = () => {
  return (
    <section className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Подтверждённые компетенции
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {badges.map((badge, index) => (
              <motion.a
                key={badge.alt}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="hover:opacity-80 hover:scale-105 transition-all"
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className={`${badge.height} w-auto`}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competencies;
