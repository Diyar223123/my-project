"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardDrive, UserCheck, ShieldCheck, Zap, Layers, Landmark } from "lucide-react";

const benefits = [
  {
    title: "Собственный склад в РК",
    description: "Более 85% востребованных деталей всегда в наличии на нашем складе в Казахстане. Отправка в день заказа.",
    icon: HardDrive,
  },
  {
    title: "Сертифицированные инженеры",
    description: "Наши специалисты прошли обучение по регламентам заводов-производителей и имеют опыт ремонта ТФМ от 8 лет.",
    icon: UserCheck,
  },
  {
    title: "Оригинальное качество",
    description: "Поставляем комплектующие строго по оригинальным чертежам. Даем гарантию на все установленные детали до 12 месяцев.",
    icon: ShieldCheck,
  },
  {
    title: "Экспресс-выезд инженера",
    description: "Понимаем цену простоя. Оперативный выезд аварийной бригады на ваше производство в любой регион Казахстана.",
    icon: Zap,
  },
  {
    title: "Комплексный сервис 360°",
    description: "От мелкого расходника до капитального ремонта линии, пусконаладки и постгарантийного абонентского обслуживания.",
    icon: Layers,
  },
  {
    title: "Гибкое сотрудничество",
    description: "Индивидуальные условия оплаты, рассрочка для постоянных партнеров и прозрачное ценообразование по договору.",
    icon: Landmark,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-dark-bg/40">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3"
          >
            Почему выбирают нас
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Стандарты надежности, проверенные временем
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/5 flex flex-col space-y-4 group relative"
              >
                {/* Glow outline on card hover */}
                <div className="absolute inset-0 rounded-2xl border border-primary-500/0 group-hover:border-primary-500/20 transition-colors duration-300 pointer-events-none" />

                <div className="p-3.5 rounded-xl bg-slate-900/60 text-primary-400 group-hover:bg-primary-500/10 group-hover:text-primary-300 transition-colors w-fit">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                  {benefit.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
