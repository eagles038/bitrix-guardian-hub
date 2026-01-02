import { motion } from "framer-motion";
import { Code, Headphones, ShieldCheck, Link2 } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Веб-дизайн",
    description: "UI/UX, прототипы, макеты",
    features: ["Дизайн лендингов", "Корпоративные сайты", "Интернет-магазины", "Адаптивный дизайн"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Headphones,
    title: "HTML-верстка",
    description: "Pixel Perfect, БЭМ",
    features: ["Кроссбраузерность", "Адаптивность", "Оптимизация скорости"],
    gradient: "from-green-500/20 to-emerald-500/20",
    span: "col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Интеграция",
    description: "1С-Битрикс CMS",
    features: ["Натяжка на Битрикс", "Компоненты 2.0", "Композитный сайт"],
    gradient: "from-red-500/20 to-orange-500/20",
    span: "col-span-1",
  },
  {
    icon: Link2,
    title: "Техподдержка",
    description: "Доработки, обновления",
    features: ["Правки по ТЗ", "Обновление ядра", "Резервное копирование", "Мониторинг 24/7"],
    gradient: "from-purple-500/20 to-pink-500/20",
    span: "col-span-1 md:col-span-2",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Услуги
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для вашего проекта на 1С-Битрикс
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.span} glass-card-hover p-6 md:p-8 group`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-primary font-mono mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
