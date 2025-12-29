import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Мини",
    price: "15 000",
    period: "мес",
    hours: "5 часов",
    reaction: "24 часа",
    features: [
      "Консультации по Битрикс",
      "Мелкие правки",
      "Email поддержка",
      "Ежемесячный отчет",
    ],
    popular: false,
  },
  {
    name: "Стандарт",
    price: "35 000",
    period: "мес",
    hours: "15 часов",
    reaction: "4 часа",
    features: [
      "Все из тарифа Мини",
      "Доработки функционала",
      "Мониторинг сайта",
      "Еженедельные бэкапы",
      "Приоритетная поддержка",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "75 000",
    period: "мес",
    hours: "40 часов",
    reaction: "2 часа",
    features: [
      "Все из тарифа Стандарт",
      "Разработка новых модулей",
      "Аудит безопасности",
      "Ежедневные бэкапы",
      "Персональный менеджер",
      "SLA договор",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Тарифы поддержки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тариф или закажите индивидуальный расчет
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card p-6 md:p-8 ${
                plan.popular ? "border-primary/50 shadow-glow" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" />
                    Популярный
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground"> ₽/{plan.period}</span>
              </div>

              {/* Hours & Reaction */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-secondary/50 rounded-xl">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    Часы
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {plan.hours}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    Реакция
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {plan.reaction}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">Выбрать</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
