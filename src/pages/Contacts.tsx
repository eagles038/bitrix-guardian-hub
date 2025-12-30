import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@bitrixpro",
    href: "https://t.me/bitrixpro",
    color: "text-blue-400",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "hello@bitrixpro.ru",
    href: "mailto:hello@bitrixpro.ru",
    color: "text-primary",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 123-45-67",
    href: "tel:+79991234567",
    color: "text-green-400",
  },
];

const requisites = [
  { label: "ИП", value: "Иванов Иван Иванович" },
  { label: "ИНН", value: "123456789012" },
  { label: "ОГРНИП", value: "312345678901234" },
  { label: "Номер счета", value: "4080 2810 0000 0000 0000" },
  { label: "Валюта счета", value: "RUB (Российские рубли)" },
  { label: "Кор. счет", value: "3010 1810 0000 0000 0000" },
  { label: "Банк", value: "ПАО СБЕРБАНК г. МОСКВА" },
  { label: "БИК", value: "044525225" },
];

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setFormData({ name: "", email: "", message: "", budget: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Контактная информация
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобный способ связи, чтобы заказать разработку сайта или обсудить ваш проект. 
              Отвечаю на сообщения в течение 2-3 часов в рабочее время.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Способы связи
              </h2>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Working hours */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10"
              >
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Рабочие часы</p>
                  <p className="font-medium text-foreground">Пн-Пт: 10:00 - 19:00 (МСК)</p>
                </div>
              </motion.div>

              {/* Requisites */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Реквизиты</h3>
                <div className="glass-card p-6">
                  <ul className="space-y-3">
                    {requisites.map((item) => (
                      <li key={item.label} className="flex flex-wrap gap-2">
                        <span className="text-muted-foreground">{item.label}:</span>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Написать через сайт
              </h2>
              
              <form onSubmit={handleSubmit} className="glass-card p-6 space-y-6">
                <div>
                  <Label htmlFor="name">Как к вам обращаться? *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Электронная почта *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Несколько слов о проекте *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш проект и задачи..."
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Планируемый бюджет</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="от 50 000 руб."
                    className="mt-2"
                  />
                </div>

                <div className="text-sm text-muted-foreground">
                  Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Отправка..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacts;
