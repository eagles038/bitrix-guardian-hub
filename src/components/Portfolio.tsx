import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "internet-magazin-elektroniki",
    title: "Интернет-магазин электроники",
    description: "Highload-каталог на 50 000 товаров с интеграцией 1С",
    tags: ["D7", "Highload", "1С", "REST API"],
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop",
  },
  {
    slug: "b2b-portal-stroitelnoy-kompanii",
    title: "B2B-портал строительной компании",
    description: "Личный кабинет дилера с синхронизацией остатков",
    tags: ["Композит", "CRM", "B2B"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    slug: "korporativniy-sayt-logistiki",
    title: "Корпоративный сайт логистики",
    description: "Многоязычный сайт с калькулятором доставки",
    tags: ["Мультисайт", "API", "i18n"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    slug: "marketpleys-uslug",
    title: "Маркетплейс услуг",
    description: "Кастомный модуль бронирования и оплаты",
    tags: ["Модуль", "Эквайринг", "СМС"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
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
            Портфолио
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Избранные проекты, реализованные за последние годы
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={`/portfolio/${project.slug}`}
                className="glass-card-hover overflow-hidden block"
              >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Link Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 bg-secondary rounded-lg text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
