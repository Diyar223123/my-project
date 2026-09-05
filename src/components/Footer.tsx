"use client";

import React from "react";
import { Cpu, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-12 overflow-hidden">
      {/* Visual Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Info & Logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center space-x-2 group w-fit">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-primary-400 text-white shadow-md">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-sans font-bold text-base leading-none tracking-wider text-white">
                ТФМ <span className="text-primary-500">КАЗАХСТАН</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Специализированный технический сервис, плановое обслуживание и оперативный ремонт упаковочных автоматов серии ТФМ-2 на всей территории Казахстана. Поставка оригинальных запасных частей.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Разделы сайта</h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "О компании", href: "#about" },
                { name: "Наши услуги", href: "#services" },
                { name: "Продукция и модели", href: "#products" },
                { name: "Почему выбирают нас", href: "#why-choose-us" },
                { name: "Контакты", href: "#contacts" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-slate-600 group-hover:text-primary-500 transition-colors" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Disclaimers */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Дисклеймер</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Все торговые марки, названия оборудования (ТФМ-2, ТФМ-18, ТФО) и соответствующие товарные знаки являются собственностью их законных правообладателей. Мы осуществляем постгарантийное обслуживание оборудования и поставляем совместимые запчасти заводского производства.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {currentYear} ТФМ-Сервис Казахстан. Все права защищены.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Пользовательское соглашение</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
