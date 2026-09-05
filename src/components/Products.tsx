"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductModal from "./ProductModal";
import { ArrowRight, Wrench, ShieldCheck, Box } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  longDescription: string;
  specs: Record<string, string>;
  features: string[];
}

const productsList: Product[] = [
  {
    id: "tfm-2",
    name: "ТФМ-2",
    image: "/tfm2_machine.jpg",
    description: "Автоматический линейный автомат для фасовки жидких и вязких молочных продуктов в готовые пластиковые стаканы с запайкой фольгой.",
    longDescription: "Линейный фасовочно-упаковочный автомат серии ТФМ-2 предназначен для точного порционного дозирования и герметичной упаковки молочных (сметана, йогурт, творог, сливки) и других жидких, пастообразных или вязких продуктов. Конструкция автомата выполнена из высококачественной нержавеющей стали марки AISI 304, что гарантирует соответствие строгим санитарным нормам пищевых производств.",
    specs: {
      "Производительность": "до 2 000 стаканов/час",
      "Объем дозирования": "50 — 500 мл",
      "Метод запайки": "Термозапайка платинкой из фольги",
      "Расход сжатого воздуха": "550 л/мин",
      "Рабочее давление": "0.6 МПа",
      "Потребляемая мощность": "2.2 кВт",
      "Габаритные размеры": "1800 х 900 х 1700 мм",
      "Масса автомата": "450 кг"
    },
    features: [
      "Автоматическая подача стаканов",
      "Высокоточное дозирование без капель",
      "УФ-стерилизация стаканов и фольги",
      "Электронное управление процессом",
      "Система быстрой промывки дозатора",
      "Защитное ограждение зоны розлива"
    ]
  },
  {
    id: "tfm-18",
    name: "ТФМ-18",
    image: "/tfm18_machine.jpg",
    description: "Высокопроизводительный роторный автомат для фасовки творога, сметаны, йогуртов с повышенной точностью дозирования.",
    longDescription: "Роторный упаковочный автомат ТФМ-18 представляет собой компактное и высокопроизводительное решение для автоматического розлива и запайки стаканов. Карусельная конструкция позволяет значительно экономить производственную площадь, обеспечивая при этом высокую скорость и ювелирную точность наполнения для широкого спектра вязких пищевых продуктов.",
    specs: {
      "Производительность": "до 1 800 стаканов/час",
      "Объем дозирования": "100 — 500 мл",
      "Тип конструкции": "Карусельный (роторный)",
      "Рабочее давление": "0.6 МПа",
      "Потребляемая мощность": "1.8 кВт",
      "Габаритные размеры": "1200 х 1200 х 1800 мм",
      "Масса автомата": "380 кг"
    },
    features: [
      "Компактный роторный дизайн",
      "Сенсорный пульт управления PLC",
      "Универсальный дозатор для паст",
      "Датчик наличия стакана (нет стакана - нет розлива)",
      "Модуль укладки пластиковой крышки",
      "Высокая энергоэффективтивность"
    ]
  },
  {
    id: "tfo",
    name: "ТФО",
    image: "/tfo_machine.jpg",
    description: "Линия для розлива и запайки продуктов в готовые полимерные пакеты или стаканы увеличенного объема. Оптимально для соусов и джемов.",
    longDescription: "Специализированная серия упаковочных машин ТФО спроектирована для работы с тарой различной конфигурации, включая крупногабаритные пластиковые ведра, контейнеры и пакеты. Данная модель оптимальна для предприятий среднего и крупного бизнеса, упаковывающих соусы, майонезы, джемы, пастообразные десерты или строительные смеси.",
    specs: {
      "Производительность": "до 1 200 единиц/час",
      "Диапазон дозирования": "200 — 1 000 мл",
      "Вид тары": "Полимерные стаканы, ведра, пакеты",
      "Рабочее давление": "0.6 МПа",
      "Потребляемая мощность": "1.5 кВт",
      "Габаритные размеры": "1500 х 800 х 1600 мм",
      "Масса автомата": "320 кг"
    },
    features: [
      "Поддержка тары большого объема",
      "Пневматический привод узлов",
      "Регулируемый подъемный столик розлива",
      "Легкая переналадка под другой формат тары",
      "Исполнение из пищевой нержавеющей стали",
      "Надежная запайка толстых пленок"
    ]
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOrderProduct = (productName: string) => {
    // Fill the message field of the contact form and scroll to it
    const textarea = document.getElementById("comment-field") as HTMLTextAreaElement;
    if (textarea) {
      textarea.value = `Здравствуйте! Меня интересуют запасные части и сервис для оборудования ${productName}. Прошу проконсультировать по ценам и срокам.`;
      // Trigger native textarea change if needed
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
    }
    
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="relative py-24 bg-dark-bg/60 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-3xl pointer-events-none" />

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
            Продукция и оборудование
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Поставка оригинальных запчастей и комплектующих
          </motion.h3>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Мы обслуживаем и поставляем комплектующие для широкого спектра упаковочного оборудования. Выберите модель, чтобы узнать больше.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsList.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl overflow-hidden border border-white/5 group shadow-lg"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary-600/90 text-white border border-primary-500/25">
                  Оборудование
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-3">
                  <h4 className="text-2xl font-extrabold text-white group-hover:text-primary-400 transition-colors">
                    Серия {product.name}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {/* Small specs snippet */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center"><Wrench className="w-3.5 h-3.5 mr-1 text-primary-500" /> Запчасти</span>
                    <span className="text-white font-medium">В наличии и под заказ</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1 text-primary-500" /> Гарантия</span>
                    <span className="text-white font-medium">12 месяцев</span>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 border border-slate-800 hover:border-primary-500/35 hover:bg-slate-950 transition-all duration-300 group-hover:scale-[1.01]"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrder={handleOrderProduct}
      />
    </section>
  );
}
