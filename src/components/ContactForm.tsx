import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа").max(100),
  website: z.string().url("Введите корректный URL").or(z.literal("")),
  task: z.string().min(10, "Опишите задачу подробнее (минимум 10 символов)").max(1000),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    task: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);

      // Simulate API call (replace with Supabase integration)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      toast({
        title: "Заявка отправлена!",
        description: "Свяжусь с вами в ближайшее время.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Свяжитесь со мной
            </h2>
            <p className="text-muted-foreground">
              Опишите вашу задачу — отвечу в течение нескольких часов
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Заявка отправлена!
                </h3>
                <p className="text-muted-foreground">
                  Спасибо за обращение. Свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Website */}
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Сайт{" "}
                    <span className="text-muted-foreground">(необязательно)</span>
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="text"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={handleChange}
                    className={errors.website ? "border-destructive" : ""}
                  />
                  {errors.website && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.website}
                    </p>
                  )}
                </div>

                {/* Task */}
                <div>
                  <label
                    htmlFor="task"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Задача
                  </label>
                  <Textarea
                    id="task"
                    name="task"
                    placeholder="Опишите вашу задачу или проблему..."
                    rows={5}
                    value={formData.task}
                    onChange={handleChange}
                    className={errors.task ? "border-destructive" : ""}
                  />
                  {errors.task && (
                    <p className="text-sm text-destructive mt-1">{errors.task}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Отправка..."
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
