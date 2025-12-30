import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Code, 
  Palette, 
  Rocket, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Zap,
  Server,
  Layers
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "8+", label: "лет опыта в e-commerce" },
  { icon: ShoppingCart, value: "50+", label: "интернет-магазинов запущено" },
  { icon: Users, value: "30+", label: "клиентов на поддержке" },
  { icon: Code, value: "15+", label: "модулей на маркетплейсе" },
  { icon: Shield, value: "1 год", label: "гарантии на все работы" },
  { icon: Zap, value: "24/7", label: "техническая поддержка" },
];

const workSteps = [
  { num: 1, title: "Анализ требований", description: "Изучаем вашу нишу, конкурентов и целевую аудиторию" },
  { num: 2, title: "Подбор решения", description: "Предлагаем оптимальный вариант: готовое решение или индивидуальная разработка" },
  { num: 3, title: "Согласование", description: "Фиксируем сроки, бюджет и технические требования в договоре" },
  { num: 4, title: "Разработка", description: "Создаем уникальный дизайн, верстаем и программируем функционал" },
  { num: 5, title: "Наполнение", description: "Загружаем товары, настраиваем оплату и доставку" },
  { num: 6, title: "Тестирование", description: "Проверяем работу магазина на всех устройствах" },
  { num: 7, title: "Запуск", description: "Переносим сайт на боевой сервер и запускаем продажи" },
  { num: 8, title: "Поддержка", description: "Обеспечиваем гарантийное обслуживание и развитие проекта" },
];

const controlFeatures = [
  {
    title: "Работа через Битрикс24",
    description: "Вы видите все задачи, сроки и статусы в реальном времени. Полная прозрачность на каждом этапе."
  },
  {
    title: "Персональный менеджер",
    description: "За вашим проектом закреплен выделенный специалист, который контролирует качество и сроки."
  },
  {
    title: "Быстрая реакция",
    description: "Время ответа на обращение — до 1 часа в рабочее время. Критичные задачи решаем в приоритете."
  },
];

const pricingItems = [
  {
    icon: Code,
    title: "Разработка и дизайн",
    price: "от 2 500 ₽/час",
    features: ["Дизайн интерфейсов", "Frontend-разработка", "Backend и интеграции", "Доработка модулей"]
  },
  {
    icon: Layers,
    title: "Контент и наполнение",
    price: "от 1 200 ₽/час",
    features: ["Загрузка товаров", "Оформление карточек", "Настройка фильтров", "SEO-оптимизация"]
  },
  {
    icon: Server,
    title: "Поддержка",
    price: "от 15 000 ₽/мес",
    features: ["Мониторинг 24/7", "Резервное копирование", "Обновления безопасности", "Консультации"]
  },
];

const EcommerceDevelopment = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Разработка интернет-магазинов
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Интернет-магазин на{" "}
                <span className="text-primary">1С-Битрикс</span>
                <br />от 120 000 ₽
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Современный дизайн, высокая конверсия и полная интеграция с 1С. 
                Запускаем магазины, которые продают.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={scrollToContact}
                >
                  Обсудить проект
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={scrollToContact}
                >
                  Получить консультацию
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Опыт, подтвержденный цифрами и успешными проектами
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Как мы работаем
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Прозрачный процесс с четкими этапами и контрольными точками
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Control Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Контроль исполнения
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Вы всегда в курсе статуса работ. Используем современные инструменты 
                  для прозрачного взаимодействия.
                </p>
                
                <div className="space-y-6">
                  {controlFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Битрикс24</div>
                      <div className="text-sm text-muted-foreground">Система управления проектами</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {["Постановка задач", "Отслеживание сроков", "Обсуждения", "История изменений"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Стоимость работ
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Прозрачное ценообразование без скрытых платежей
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <div className="text-2xl font-bold text-primary mb-6">
                    {item.price}
                  </div>
                  <ul className="space-y-3 text-left">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Готовы обсудить ваш проект?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Оставьте заявку — перезвоним в течение 30 минут и бесплатно 
                проконсультируем по всем вопросам
              </p>
              <Button 
                size="lg" 
                className="text-lg px-10 py-6"
                onClick={scrollToContact}
              >
                Оставить заявку
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceDevelopment;
