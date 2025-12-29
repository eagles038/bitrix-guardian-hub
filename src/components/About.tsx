import { motion } from "framer-motion";
import { Award, Clock, Users, Code2 } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Лет опыта" },
  { icon: Users, value: "200+", label: "Проектов" },
  { icon: Code2, value: "50K+", label: "Часов кода" },
  { icon: Award, value: "5", label: "Сертификатов" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Обо мне
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Привет! Я — фрилансер с более чем 10-летним опытом работы с 
              1С-Битрикс: Управление сайтом. За это время успешно реализовал 
              более 200 проектов разной сложности — от небольших корпоративных 
              сайтов до высоконагруженных интернет-магазинов.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Специализируюсь на разработке с использованием D7 API, 
              Highload-блоков, интеграциях с 1С и CRM-системами. 
              Работаю по договору с фиксированными сроками и SLA.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {[
                "Битрикс: Разработчик",
                "Битрикс: Администратор",
                "Битрикс: Интегратор",
              ].map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm"
                >
                  <Award className="w-4 h-4 text-primary" />
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
