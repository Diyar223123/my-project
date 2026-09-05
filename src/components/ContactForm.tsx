"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, PhoneCall, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user types
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, введите номер телефона";
    } else {
      // Basic phone check (allowing +, digits, spaces, parens)
      const phoneRegex = /^[\d\s()+-]{9,18}$/;
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Неверный формат номера телефона";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: "", phone: "", comment: "" });
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-24 bg-dark-bg/60 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual copy & callout */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary-500">
                Заявка на сервис
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 leading-tight">
                Получите расчет стоимости и подбор деталей за 15 минут
              </h3>
              <div className="h-1 bg-primary-500 w-20 mt-6 rounded-full mx-auto lg:mx-0" />
            </div>

            <p className="text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Заполните форму обратной связи. Наш технический специалист свяжется с вами, чтобы обсудить объем работ по обслуживанию, ремонту или подобрать необходимые комплектующие для вашего упаковочного автомата.
            </p>

            {/* Quick Contact Options */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-4 p-4 rounded-xl glass-panel">
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Служба технической поддержки</p>
                  <a href="tel:+77777777777" className="text-sm font-bold text-white hover:text-primary-400 transition-colors">
                    +7 (777) 777-77-77
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl glass-panel">
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Электронная почта для заявок</p>
                  <a href="mailto:info@tfm-service.kz" className="text-sm font-bold text-white hover:text-primary-400 transition-colors">
                    info@tfm-service.kz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl"
            >
              {/* Decorative top orange line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-amber-500" />
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-white">Оставить быструю заявку</h4>
                      <p className="text-xs text-slate-400 mt-1">Обычно мы перезваниваем в течение 10-15 минут.</p>
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center space-x-3">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <span>{errors.submit}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Ваше имя <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Иван Иванов"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/40 border ${
                          errors.name ? "border-red-500" : "border-slate-800 focus:border-primary-500"
                        } text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 flex items-center mt-1">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Телефон <span className="text-primary-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (___) ___-__-__"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/40 border ${
                          errors.phone ? "border-red-500" : "border-slate-800 focus:border-primary-500"
                        } text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 flex items-center mt-1">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Comment Input */}
                    <div className="space-y-2">
                      <label htmlFor="comment-field" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Комментарий или список запчастей
                      </label>
                      <textarea
                        id="comment-field"
                        name="comment"
                        rows={4}
                        value={formData.comment}
                        onChange={handleInputChange}
                        placeholder="Напишите модель оборудования, характер поломки или список необходимых запчастей"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/40 border border-slate-800 focus:border-primary-500 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                      />
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg shadow-primary-500/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Отправить запрос
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success State Animation */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-12 h-12" />
                    </motion.div>
                    
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white">Заявка успешно отправлена!</h4>
                      <p className="text-slate-400 text-sm max-w-sm mx-auto">
                        Спасибо за обращение. Наш технический специалист свяжется с вами в течение 15 минут для уточнения деталей.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      Отправить еще одну заявку
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
