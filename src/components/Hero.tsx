"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, ShieldCheck, Clock, Settings } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-dark-bg">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 radial-bg pointer-events-none z-0" />
      
      {/* Animated glowing backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2"
            >
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20">
                Официальный сервис в Казахстане
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              <span className="block text-white mb-2 leading-none">Обслуживание и запчасти</span>
              <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-amber-500 bg-clip-text text-transparent glow-text">
                оборудования ТФМ-2
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Комплексный сервис, ремонт и диагностика фасовочно-упаковочных линий серии <strong>ТФМ-2</strong> на всей территории Казахстана. Поставка оригинальных запасных частей для ТФМ-2, ТФМ-18 и ТФО с гарантией качества и минимальными сроками доставки.
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-3 text-slate-300">
                <ShieldCheck className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm font-medium">Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm font-medium">Выезд по всему РК</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Settings className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm font-medium">100% оригинал запчасти</span>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact-form"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 rounded-xl hover:scale-[1.02] shadow-lg shadow-primary-500/10 hover:shadow-primary-500/25 active:scale-[0.98]"
              >
                Оставить заявку
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="https://wa.me/77777777777?text=Здравствуйте!%20Интересует%20обслуживание%20и%20запчасти%20для%20оборудования%20ТФМ."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 rounded-xl hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-green-500" />
                Связаться в WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Hero Image / Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center w-full max-w-md lg:max-w-none mx-auto"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl glow-accent">
              <Image
                src="/hero_machine.jpg"
                alt="Промышленное оборудование ТФМ-2 в Казахстане"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className="w-full h-full object-cover opacity-90 mix-blend-lighten scale-[1.02]"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
              
              {/* Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-heavy border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-medium">Модель в центре внимания</p>
                  <p className="text-sm font-bold text-white">Упаковочная линия ТФМ-2</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
