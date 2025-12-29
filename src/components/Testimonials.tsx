import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ольга Буш",
    text: "Отличный специалист! Все сделал в срок, дал рекомендации что в дальнейшем можно улучшить. Договорились уже о следующей задаче.",
  },
  {
    name: "Slava Pro",
    text: "Человек вник в мою просьбу и старался помочь. Каждый день был на связи и показал высокий уровень навыков. Рекомендую.",
  },
  {
    name: "Алексей Крепостнов",
    text: "Со сложной задачей справился отлично, хороший исполнитель рекомендую.",
  },
  {
    name: "Yolkfolk",
    text: "Отличный исполнитель, быстро, качественно, недорого. Рекомендую.",
  },
  {
    name: "Seoum",
    text: "Верстка выполнена достаточно быстро и качественно. Спасибо!",
  },
  {
    name: "Иван Smarthome24",
    text: "Руслан сделал все быстро и качественно + поправил еще пару багов на сайте бесплатно, что приятно) Продолжаем сотрудничать. Спасибо большое!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-primary">Отзывы</span> клиентов
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Все отзывы являются реальными и взяты с профиля на{" "}
            <a
              href="https://www.fl.ru/users/ruslan568/opinions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              fl.ru
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors duration-300">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">
                        {testimonial.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
