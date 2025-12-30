import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, ArrowRight, Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  views: number;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Оптимизация производительности сайта на 1С-Битрикс: полное руководство",
    excerpt: "Разбираем основные методы ускорения работы сайта: кеширование, оптимизация БД, сжатие файлов и настройка серверного окружения.",
    views: 2847,
    date: "2024-12-28",
    category: "Производительность",
    slug: "optimizaciya-proizvoditelnosti"
  },
  {
    id: 2,
    title: "Настройка композитного сайта: пошаговая инструкция",
    excerpt: "Детальный разбор технологии композитного кеширования в Битрикс. Настройка, диагностика проблем и решение типичных ошибок.",
    views: 1956,
    date: "2024-12-25",
    category: "Кеширование",
    slug: "nastroyka-kompozitnogo-sayta"
  },
  {
    id: 3,
    title: "Интеграция 1С:Предприятие с интернет-магазином на Битрикс",
    excerpt: "Настройка двустороннего обмена данными: каталог товаров, остатки, цены, заказы. Решение проблем синхронизации.",
    views: 3421,
    date: "2024-12-22",
    category: "Интеграции",
    slug: "integratsiya-1c-predpriyatie"
  },
  {
    id: 4,
    title: "Создание кастомных компонентов в 1С-Битрикс",
    excerpt: "Архитектура компонентов, шаблоны, кеширование результатов. Примеры создания компонента каталога с нуля.",
    views: 1823,
    date: "2024-12-20",
    category: "Разработка",
    slug: "sozdanie-kastomnyh-komponentov"
  },
  {
    id: 5,
    title: "Безопасность сайта на Битрикс: защита от взлома",
    excerpt: "Проактивная защита, настройка WAF, защита админки, безопасное хранение паролей и противодействие SQL-инъекциям.",
    views: 2156,
    date: "2024-12-18",
    category: "Безопасность",
    slug: "bezopasnost-sayta-bitrix"
  },
  {
    id: 6,
    title: "Работа с инфоблоками: best practices",
    excerpt: "Оптимальная структура инфоблоков, правильные запросы, использование ORM D7 вместо старого API.",
    views: 1647,
    date: "2024-12-15",
    category: "Разработка",
    slug: "rabota-s-infoblokami"
  },
  {
    id: 7,
    title: "Настройка SEO-модуля в 1С-Битрикс",
    excerpt: "Автоматическая генерация meta-тегов, карта сайта, ЧПУ, настройка robots.txt и микроразметка Schema.org.",
    views: 2934,
    date: "2024-12-12",
    category: "SEO",
    slug: "nastroyka-seo-modulya"
  },
  {
    id: 8,
    title: "Миграция сайта на новый сервер без потери данных",
    excerpt: "Пошаговый чек-лист переноса: база данных, файлы, настройка сервера, проверка работоспособности.",
    views: 1289,
    date: "2024-12-10",
    category: "Администрирование",
    slug: "migratsiya-sayta-na-server"
  },
  {
    id: 9,
    title: "REST API в 1С-Битрикс: создание и использование",
    excerpt: "Разработка собственного REST API, авторизация OAuth 2.0, документирование endpoints и тестирование.",
    views: 1756,
    date: "2024-12-08",
    category: "Разработка",
    slug: "rest-api-bitrix"
  },
  {
    id: 10,
    title: "Оптимизация работы с базой данных MySQL",
    excerpt: "Индексы, профилирование запросов, настройка my.cnf, партиционирование таблиц для больших каталогов.",
    views: 1423,
    date: "2024-12-05",
    category: "Производительность",
    slug: "optimizatsiya-mysql"
  },
  {
    id: 11,
    title: "Настройка многосайтовости в Битрикс",
    excerpt: "Создание нескольких сайтов на одной лицензии: общий каталог, разные домены, управление контентом.",
    views: 987,
    date: "2024-12-03",
    category: "Администрирование",
    slug: "mnogosaytovost-bitrix"
  },
  {
    id: 12,
    title: "Отладка и логирование в 1С-Битрикс",
    excerpt: "Встроенные инструменты отладки, настройка логов, профилирование производительности и поиск узких мест.",
    views: 1134,
    date: "2024-12-01",
    category: "Разработка",
    slug: "otladka-i-logirovanie"
  },
  {
    id: 13,
    title: "Кастомизация оформления заказа в интернет-магазине",
    excerpt: "Модификация компонента sale.order.ajax, добавление своих полей, интеграция с доставками и оплатами.",
    views: 2567,
    date: "2024-11-28",
    category: "E-commerce",
    slug: "kastomizatsiya-oformleniya-zakaza"
  },
  {
    id: 14,
    title: "Работа с Highload-блоками: когда и как использовать",
    excerpt: "Преимущества HL-блоков перед инфоблоками, API для работы, примеры использования в реальных проектах.",
    views: 1876,
    date: "2024-11-25",
    category: "Разработка",
    slug: "rabota-s-highload-blokami"
  },
  {
    id: 15,
    title: "Push-уведомления в мобильном приложении Битрикс",
    excerpt: "Настройка Firebase Cloud Messaging, отправка уведомлений по событиям, сегментация аудитории.",
    views: 934,
    date: "2024-11-22",
    category: "Мобильная разработка",
    slug: "push-uvedomleniya-bitrix"
  },
  {
    id: 16,
    title: "Автоматизация бизнес-процессов в Битрикс24",
    excerpt: "Создание роботов и триггеров, настройка воронок продаж, интеграция с внешними сервисами через вебхуки.",
    views: 2123,
    date: "2024-11-20",
    category: "Автоматизация",
    slug: "avtomatizatsiya-biznes-protsessov"
  },
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisible = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Заметки и инструкции
                <span className="block text-primary mt-2">по 1С-Битрикс</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Практические советы, решения задач и полезные материалы для разработчиков и владельцев сайтов на платформе Битрикс
              </p>
              
              {/* Search */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск по статьям..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-12 pr-4 py-6 text-lg glass-card border-glass-border focus:border-primary/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Items */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-xl text-muted-foreground">
                  Статьи не найдены. Попробуйте изменить поисковый запрос.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid gap-6">
                  {currentPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="glass-card-hover p-6 group cursor-pointer"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                              <Tag className="w-3.5 h-3.5" />
                              {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(post.date)}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                              <Eye className="w-3.5 h-3.5" />
                              {formatViews(post.views)} просмотров
                            </span>
                          </div>
                          
                          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center md:self-center">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-12 h-12 rounded-full border border-glass-border group-hover:border-primary group-hover:bg-primary/10 transition-all"
                          >
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </Button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-12"
                  >
                    <Pagination>
                      <PaginationContent className="gap-2">
                        <PaginationItem>
                          <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) handlePageChange(currentPage - 1);
                            }}
                            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                        
                        {renderPaginationItems()}
                        
                        <PaginationItem>
                          <PaginationNext
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) handlePageChange(currentPage + 1);
                            }}
                            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                    
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Показано {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length)} из {filteredPosts.length} статей
                    </p>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
