import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, CheckCircle2, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./PortfolioDetail.css";

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
    <div className="portfolio-detail">
      <Header />
      
      <main className="portfolio-detail__main">
        {/* Breadcrumb & Back */}
        <div className="portfolio-detail__container portfolio-detail__breadcrumb">
          <Link to="/#portfolio" className="portfolio-detail__back-link">
            <ArrowLeft className="portfolio-detail__back-icon" />
            Вернуться к портфолио
          </Link>
        </div>

        {/* Project Header */}
        <div className="portfolio-detail__container portfolio-detail__header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="portfolio-detail__title">{project.title}</h1>
            <div className="portfolio-detail__date">
              <Calendar className="portfolio-detail__date-icon" />
              <span>Добавлено: {project.date}</span>
            </div>
          </motion.div>
        </div>

        {/* Project Details */}
        <div className="portfolio-detail__container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="portfolio-detail__card"
          >
            <div className="portfolio-detail__grid">
              {/* Left Column - Task & Completed */}
              <div className="portfolio-detail__column">
                <div className="portfolio-detail__section">
                  <div className="portfolio-detail__section-header">
                    <Target className="portfolio-detail__section-icon portfolio-detail__section-icon--primary" />
                    <h3 className="portfolio-detail__section-title">Задача</h3>
                  </div>
                  <p className="portfolio-detail__section-text">{project.task}</p>
                </div>

                <div className="portfolio-detail__section">
                  <div className="portfolio-detail__section-header">
                    <CheckCircle2 className="portfolio-detail__section-icon portfolio-detail__section-icon--success" />
                    <h3 className="portfolio-detail__section-title">Выполнено</h3>
                  </div>
                  <p className="portfolio-detail__section-text">{project.completed}</p>
                </div>

                <div className="portfolio-detail__section">
                  <div className="portfolio-detail__section-header">
                    <Sparkles className="portfolio-detail__section-icon portfolio-detail__section-icon--primary" />
                    <h3 className="portfolio-detail__section-title">Особенности проекта</h3>
                  </div>
                  <ul className="portfolio-detail__features-list">
                    {project.features.map((feature, index) => (
                      <li key={index} className="portfolio-detail__features-item">
                        <span className="portfolio-detail__features-bullet">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - CTA & Tags */}
              <div className="portfolio-detail__column">
                <div className="portfolio-detail__cta-card">
                  <p className="portfolio-detail__cta-text">
                    Узнать стоимость разработки подобного проекта можно в разделе
                  </p>
                  <Link to="/#pricing">
                    <Button variant="outline">Услуги и цены</Button>
                  </Link>
                  <div className="portfolio-detail__cta-divider">
                    <Link to="/#contact">
                      <Button variant="hero" size="lg" className="portfolio-detail__cta-button">
                        <Sparkles className="portfolio-detail__cta-button-icon" />
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
                    className="portfolio-detail__site-link"
                  >
                    <div>
                      <p className="portfolio-detail__site-label">Адрес сайта:</p>
                      <p className="portfolio-detail__site-url">{project.siteUrl}</p>
                    </div>
                    <ExternalLink className="portfolio-detail__site-icon" />
                  </a>
                )}

                {/* Tags */}
                <div className="portfolio-detail__tags">
                  <p className="portfolio-detail__tags-label">Технологии:</p>
                  <div className="portfolio-detail__tags-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-detail__tags-item">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Screenshots Section */}
        <div className="portfolio-detail__container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="portfolio-detail__screenshots"
          >
            <h2 className="portfolio-detail__screenshots-title">
              Скриншоты: {project.title}
            </h2>
            
            <div className="portfolio-detail__screenshots-list">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="portfolio-detail__screenshots-item"
                >
                  <img
                    src={screenshot}
                    alt={`Скриншот ${index > 0 ? `№${index}` : ""} ${project.title}`}
                    loading="lazy"
                    className="portfolio-detail__screenshots-image"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Projects / CTA Section */}
        <div className="portfolio-detail__container portfolio-detail__bottom-cta">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="portfolio-detail__bottom-cta-card"
          >
            <h2 className="portfolio-detail__bottom-cta-title">
              Нужен похожий проект?
            </h2>
            <p className="portfolio-detail__bottom-cta-text">
              Свяжитесь со мной для обсуждения вашего проекта. Бесплатная консультация и оценка сроков.
            </p>
            <div className="portfolio-detail__bottom-cta-buttons">
              <Link to="/#contact">
                <Button variant="hero" size="lg">Обсудить проект</Button>
              </Link>
              <Link to="/#portfolio">
                <Button variant="outline" size="lg">Смотреть ещё проекты</Button>
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
