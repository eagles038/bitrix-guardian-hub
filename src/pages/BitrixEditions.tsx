import { motion } from "framer-motion";
import { Check, X, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const editions = [
  {
    id: "start",
    name: "Старт",
    price: "4 960",
    oldPrice: "6 200",
    description: "Для небольших сайтов и визиток",
    popular: false,
    features: {
      sites: "2",
      pages: "∞",
      catalog: false,
      shop: false,
      integration1c: false,
      composite: true,
      seo: true,
      backup: "2 ГБ",
      servers: "1",
    },
    link: "https://www.1c-bitrix.ru/products/cms/editions/start.php",
  },
  {
    id: "standart",
    name: "Стандарт",
    price: "14 320",
    oldPrice: "17 900",
    description: "Для корпоративных сайтов и порталов",
    popular: false,
    features: {
      sites: "∞",
      pages: "∞",
      catalog: true,
      shop: false,
      integration1c: false,
      composite: true,
      seo: true,
      backup: "2 ГБ",
      servers: "1",
    },
    link: "https://www.1c-bitrix.ru/products/cms/editions/standart.php",
  },
  {
    id: "smallbusiness",
    name: "Малый бизнес",
    price: "32 720",
    oldPrice: "40 900",
    description: "Для интернет-магазинов",
    popular: true,
    features: {
      sites: "∞",
      pages: "∞",
      catalog: true,
      shop: true,
      integration1c: false,
      composite: true,
      seo: true,
      backup: "4 ГБ",
      servers: "1",
    },
    link: "https://www.1c-bitrix.ru/products/cms/editions/smallbusiness.php",
  },
  {
    id: "business",
    name: "Бизнес",
    price: "67 120",
    oldPrice: "83 900",
    description: "Для крупных интернет-магазинов с интеграцией 1С",
    popular: false,
    features: {
      sites: "∞",
      pages: "∞",
      catalog: true,
      shop: true,
      integration1c: true,
      composite: true,
      seo: true,
      backup: "10 ГБ",
      servers: "1",
    },
    link: "https://www.1c-bitrix.ru/products/cms/editions/business.php",
  },
  {
    id: "enterprise",
    name: "Энтерпрайз",
    price: "от 1 699 000",
    oldPrice: null,
    description: "Для высоконагруженных проектов",
    popular: false,
    features: {
      sites: "∞",
      pages: "∞",
      catalog: true,
      shop: true,
      integration1c: true,
      composite: true,
      seo: true,
      backup: "∞",
      servers: "от 4",
    },
    link: "https://www.1c-bitrix.ru/products/cms/editions/enterprise.php",
  },
];

const featuresList = [
  { key: "sites", label: "Число сайтов" },
  { key: "pages", label: "Число страниц" },
  { key: "catalog", label: "Торговый каталог" },
  { key: "shop", label: "Интернет-магазин" },
  { key: "integration1c", label: "Интеграция с 1С" },
  { key: "composite", label: "Композитный сайт" },
  { key: "seo", label: "SEO-модуль" },
  { key: "backup", label: "Облачный бекап" },
  { key: "servers", label: "Серверов" },
];

const modules = [
  {
    category: "CMS",
    items: [
      "Главный модуль",
      "Сайты24",
      "Управление структурой",
      "Информационные блоки",
      "Highload-блоки",
      "Поиск",
      "Перевод",
    ],
  },
  {
    category: "Коммуникации",
    items: [
      "Форумы и Блоги",
      "Фотогалерея 2.0",
      "Социальная сеть",
      "Обучение, тестирование",
      "Бизнес-процессы",
      "Почта",
      "Техподдержка",
    ],
  },
  {
    category: "Интернет-магазин",
    items: [
      "Торговый каталог",
      "Интеграция с CRM",
      "Мастер управления магазином",
      "Складской учет",
      "Валюты",
      "Конструктор отчетов",
    ],
  },
  {
    category: "Маркетинг",
    items: [
      "SEO-модуль",
      "Социальные сервисы",
      "Интеграция с Битрикс24",
      "Веб-формы",
      "Опросы",
      "Подписка и рассылки",
      "A/B тестирование",
      "E-mail маркетинг",
    ],
  },
  {
    category: "Производительность",
    items: [
      "Композитный сайт",
      "Монитор производительности",
      "Визуальное масштабирование",
      "Пульс конверсии",
      "Веб-сервисы",
    ],
  },
  {
    category: "Безопасность",
    items: [
      "Облачные хранилища",
      "Автоматический бекап в облако",
      "Маркетплейс",
      "Проактивная защита",
      "Технология Push & Pull",
    ],
  },
];

const BitrixEditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="secondary" className="mb-4">
                Официальные лицензии
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Редакции «1С-Битрикс: Управление сайтом»
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Начните с любой редакции и развивайте проект по мере роста. 
                Платформа позволяет управлять сайтами и интернет-магазинами любого масштаба.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Editions Cards */}
        <section className="py-12 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {editions.map((edition, index) => (
                <motion.div
                  key={edition.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`h-full relative ${edition.popular ? 'border-primary shadow-lg' : ''}`}>
                    {edition.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground">
                          Популярная
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pt-8">
                      <CardTitle className="text-xl">{edition.name}</CardTitle>
                      <CardDescription className="text-sm min-h-[40px]">
                        {edition.description}
                      </CardDescription>
                      <div className="pt-4">
                        <div className="text-2xl font-bold text-foreground">
                          {edition.price} ₽
                        </div>
                        {edition.oldPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {edition.oldPrice} ₽
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {featuresList.map((feature) => {
                          const value = edition.features[feature.key as keyof typeof edition.features];
                          const isBoolean = typeof value === 'boolean';
                          
                          return (
                            <div key={feature.key} className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">{feature.label}</span>
                              {isBoolean ? (
                                value ? (
                                  <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                  <X className="w-4 h-4 text-muted-foreground/30" />
                                )
                              ) : (
                                <span className="font-medium text-foreground">{value}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <a 
                        href={edition.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button variant={edition.popular ? "default" : "outline"} className="w-full">
                          Подробнее
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Модули и возможности
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                1С-Битрикс включает широкий набор модулей для создания любых веб-проектов
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{module.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {module.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Не уверены в выборе редакции?
              </h2>
              <p className="text-muted-foreground mb-8">
                Помогу подобрать оптимальную редакцию под ваши задачи и бюджет. 
                Консультация бесплатная.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contacts">
                  <Button size="lg">
                    Получить консультацию
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a 
                  href="https://www.1c-bitrix.ru/download/cms.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Попробовать демо
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Note */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
              * Все сайты, работающие на одной лицензии, должны размещаться на одном хостинге 
              и использовать одну копию программного продукта «1С-Битрикс: Управление сайтом». 
              Цены указаны на момент публикации и могут измениться. 
              Актуальные цены уточняйте на официальном сайте 1С-Битрикс.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BitrixEditions;
