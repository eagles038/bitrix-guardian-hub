import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Битрикс: Разработчик",
    description: "Сертификат подтверждает глубокие знания в разработке на платформе 1С-Битрикс",
  },
  {
    id: 2,
    title: "Битрикс: Администратор Базовый",
    description: "Навыки администрирования и настройки системы управления сайтом",
  },
  {
    id: 3,
    title: "Битрикс: Администратор Модули",
    description: "Экспертиза в настройке и управлении модулями системы",
  },
  {
    id: 4,
    title: "Битрикс: Интеграция с 1С",
    description: "Профессиональная интеграция с 1С:Предприятие и обмен данными",
  },
  {
    id: 5,
    title: "Битрикс: Композитный сайт",
    description: "Оптимизация производительности и технология композитного сайта",
  },
  {
    id: 6,
    title: "Конфигурирование веб-серверов",
    description: "Настройка и оптимизация серверной инфраструктуры",
  },
];

const Certificates = () => {
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
            Подтверждённые компетенции и гарантия качества услуг для ваших проектов
          </p>
        </motion.div>

        {/* Certificates marquee */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6 py-4"
            >
              {/* Duplicate certificates for seamless loop */}
              {[...certificates, ...certificates].map((cert, index) => (
                <motion.div
                  key={`${cert.id}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 w-72 glass-card p-6 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
