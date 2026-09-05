"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, Clock, Map as MapIcon, Loader2 } from "lucide-react";

const contactInfo = [
  {
    title: "Телефон для связи",
    value: "+7 (777) 777-77-77",
    subtext: "Пн-Вс: с 08:00 до 22:00",
    href: "tel:+77777777777",
    icon: Phone,
  },
  {
    title: "Электронная почта",
    value: "info@tfm-service.kz",
    subtext: "Отвечаем в течение 1 часа",
    href: "mailto:info@tfm-service.kz",
    icon: Mail,
  },
  {
    title: "Наш главный офис",
    value: "Казахстан, г. Алматы, пр. Аль-Фараби, д. 77/7",
    subtext: "БЦ 'Grand Alatau', офис 404",
    href: "https://yandex.ru/maps/-/CCU4ZHd2cD",
    icon: MapPin,
  },
  {
    title: "Прямая связь WhatsApp",
    value: "Чат с техническим специалистом",
    subtext: "Быстрый ответ онлайн",
    href: "https://wa.me/77777777777",
    icon: MessageSquare,
  },
];

export default function Contacts() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contacts" className="relative py-24 bg-dark-bg">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

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
            Контактная информация
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Всегда на связи для поддержки вашего производства
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-panel glass-panel-hover p-5 rounded-xl border border-white/5 flex items-start space-x-4 group"
                  >
                    <div className="p-3 rounded-lg bg-slate-900/60 text-primary-400 group-hover:bg-primary-500/10 group-hover:text-primary-300 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{contact.title}</h4>
                      <p className="text-sm sm:text-base font-bold text-white mt-1 group-hover:text-primary-400 transition-colors">
                        {contact.value}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{contact.subtext}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Support Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-xl border border-dashed border-slate-800 bg-slate-950/20 text-center"
            >
              <div className="flex items-center justify-center space-x-2 text-xs font-semibold text-slate-400">
                <Clock className="w-4 h-4 text-primary-500" />
                <span>Аварийная служба ремонта: круглосуточно</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden glass-panel border border-white/10 min-h-[350px] lg:min-h-full flex flex-col justify-between"
          >
            {/* Map iframe with lazy loading state */}
            <div className="absolute inset-0 z-0 bg-slate-950/40">
              {!mapLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-slate-500 z-10 bg-slate-950/90">
                  <MapIcon className="w-12 h-12 text-primary-500/40 animate-pulse" />
                  <p className="text-sm font-semibold text-slate-400">Интерактивная карта Алматы</p>
                  <button
                    onClick={() => setMapLoaded(true)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-primary-600 hover:bg-primary-500 transition-colors shadow-lg active:scale-95"
                  >
                    Показать карту
                  </button>
                </div>
              )}
              {mapLoaded && (
                <iframe
                  title="TFM Service office on Yandex Maps"
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Af791054a1ea014e21a221f7b8801d0a514d3f57279313cb88a38a39a8c02c0b7&amp;source=constructor"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
            </div>

            {/* Map Overlay Badge */}
            <div className="relative z-10 m-4 p-4 rounded-xl glass-panel-heavy border border-white/5 max-w-sm pointer-events-none mt-auto">
              <p className="text-xs text-primary-400 font-semibold">Наш адрес в Алматы</p>
              <p className="text-sm font-bold text-white mt-1">Аль-Фараби, БЦ &quot;Grand Alatau&quot;</p>
              <p className="text-[10px] text-slate-400 mt-1">Ориентир: напротив Esentai Mall, удобный паркинг со стороны проспекта.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
