"use client";

import React from "react";
import { motion } from "framer-motion";
import { Settings2, Activity, Wrench, Boxes, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Техническое обслуживание",
    description: "Регулярное плановое ТО, смазка, регулировка и калибровка всех узлов упаковочных машин ТФМ-2 для предотвращения простоев.",
    icon: Settings2,
  },
  {
    title: "Комплексная диагностика",
    description: "Проверка механических узлов, пневматики, электроники и программного обеспечения. Дефектовка с предоставлением детального отчета.",
    icon: Activity,
  },
  {
    title: "Ремонт любой сложности",
    description: "Оперативный выезд инженеров, устранение аварийных поломок, капитальный ремонт дозаторов, запаечных станций и механизмов протяжки.",
    icon: Wrench,
  },
  {
    title: "Продажа запчастей",
    description: "Быстрый подбор и поставка оригинальных деталей и расходных материалов для оборудования ТФМ-2, ТФМ-18 и ТФО со склада в РК.",
    icon: Boxes,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-dark-bg/40">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

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
            Наши услуги
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Профессиональный сервис для стабильного производства
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden group glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                {/* Visual Accent Hover Bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className="inline-flex p-4 rounded-xl bg-slate-900/60 text-primary-400 group-hover:bg-primary-500/10 group-hover:text-primary-300 transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Link */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>Узнать подробнее</span>
                  <div className="p-1.5 rounded-full bg-slate-900 text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-primary-500/2 rounded-full blur-2xl group-hover:bg-primary-500/5 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
