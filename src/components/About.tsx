"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Users, MapPin } from "lucide-react";

const stats = [
  { id: 1, name: "Лет опыта в индустрии", value: "12+", icon: Award },
  { id: 2, name: "Обслужено единиц оборудования", value: "180+", icon: Shield },
  { id: 3, name: "Инженеров в штате", value: "15+", icon: Users },
  { id: 4, name: "Поставка запчастей по РК", value: "100%", icon: MapPin },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-dark-bg/60 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3"
          >
            О компании
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Лидеры в обслуживании фасовочного оборудования
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Grid: Text & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-300"
          >
            <h4 className="text-xl font-semibold text-white">
              Надежное партнерство для вашего производства
            </h4>
            <p className="leading-relaxed">
              Мы специализируемся на профессиональном техническом обслуживании, ремонте и модернизации фасовочно-упаковочного оборудования серии <strong>ТФМ-2</strong> в Республике Казахстан. Наша цель — минимизировать простои вашего производства и обеспечить стабильную работу упаковочных линий.
            </p>
            <p className="leading-relaxed">
              Обладая глубокой технической экспертизой и собственным складом оригинальных комплектующих, мы решаем задачи любой сложности: от оперативного выезда инженера для устранения неполадок до капитального ремонта и пусконаладочных работ.
            </p>
            <p className="leading-relaxed">
              Мы также поставляем сертифицированные запасные части для оборудования серий <strong>ТФМ-2, ТФМ-18 и ТФО</strong> напрямую, что гарантирует абсолютную совместимость деталей, долгий срок службы и соответствие строгим санитарным стандартам пищевых производств.
            </p>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel glass-panel-hover p-6 rounded-xl border border-white/5 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-slate-900/60 text-primary-400 group-hover:bg-primary-500/10 group-hover:text-primary-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <dd className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-primary-400 transition-colors">
                      {stat.value}
                    </dd>
                    <dt className="text-xs sm:text-sm font-medium text-slate-400 mt-2 leading-snug">
                      {stat.name}
                    </dt>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
