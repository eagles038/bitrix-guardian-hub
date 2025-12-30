import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, CheckCircle2, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PortfolioDetail = () => {
  const project = {
    title: "Интернет-магазин электроники с интеграцией 1С",
    date: "15 декабря 2024",
    task: "Разработать высоконагруженный интернет-магазин электроники с каталогом на 50 000+ товаров. Необходима бесшовная интеграция с 1С для синхронизации остатков, цен и заказов в реальном времени.",
    completed: "Разработан и запущен полнофункциональный интернет-магазин на «1С-Битрикс: Управление сайтом» редакции «Бизнес». Реализована двусторонняя интеграция с 1С, настроен композитный сайт для максимальной скорости загрузки.",
    features: [
      "Highload-каталог с фасетным поиском и умными фильтрами",
      "Интеграция с 1С:Управление торговлей через REST API",
      "Синхронизация остатков каждые 5 минут",
      "Автоматическая выгрузка заказов в 1С",
      "Личный кабинет покупателя с историей заказов",
      "Интеграция с CDEK, Boxberry и Почтой России",
      "Подключение эквайринга Сбербанк и ЮKassa"
    ],
    siteUrl: "https://electroshop-example.ru",
    screenshots: [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1300&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1300&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1300&h=800&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1300&h=800&fit=crop"
    ],
    tags: ["D7", "Highload", "1С", "REST API", "Композит", "Эквайринг"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumb & Back */}
        <div className="container mx-auto px-4 mb-8">
          <Link 
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Вернуться к портфолио
          </Link>
        </div>

        {/* Project Header */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Добавлено: {project.date}</span>
            </div>
          </motion.div>
        </div>

        {/* Project Details */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Task & Completed */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Задача</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.task}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <h3 className="text-lg font-semibold text-foreground">Выполнено</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.completed}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Особенности проекта</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - CTA & Tags */}
              <div className="space-y-6">
                <div className="glass-card-hover p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    Узнать стоимость разработки подобного проекта можно в разделе
                  </p>
                  <Link to="/#pricing">
                    <Button variant="outline" className="mb-4">
                      Услуги и цены
                    </Button>
                  </Link>
                  <div className="border-t border-glass-border pt-4 mt-4">
                    <Link to="/#contact">
                      <Button variant="hero" size="lg" className="w-full gap-2">
                        <Sparkles className="w-4 h-4" />
                        Заказать разработку
                      </Button>
                    </Link>
                  </div>
                </div>

                {project.siteUrl && (
                  <a 
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card-hover p-4 flex items-center justify-between group"
                  >
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес сайта:</p>
                      <p className="text-foreground font-medium">{project.siteUrl}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )}

                {/* Tags */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Технологии:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-mono px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Screenshots Section */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Скриншоты: {project.title}
            </h2>
            
            <div className="space-y-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card overflow-hidden"
                >
                  <img
                    src={screenshot}
                    alt={`Скриншот ${index > 0 ? `№${index}` : ""} ${project.title}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Projects / CTA Section */}
        <div className="container mx-auto px-4 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Нужен похожий проект?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Свяжитесь со мной для обсуждения вашего проекта. Бесплатная консультация и оценка сроков.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="hero" size="lg">
                  Обсудить проект
                </Button>
              </Link>
              <Link to="/#portfolio">
                <Button variant="outline" size="lg">
                  Смотреть ещё проекты
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
