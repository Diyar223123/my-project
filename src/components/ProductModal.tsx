"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Cpu, ShieldAlert, Award } from "lucide-react";

import { Product } from "./Products";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onOrder: (productName: string) => void;
}

export default function ProductModal({ product, isOpen, onClose, onOrder }: ProductModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-bg/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel-heavy border border-white/10 shadow-2xl z-10 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-primary-500 text-slate-400 hover:text-white transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
              
              {/* Product Image Column */}
              <div className="md:col-span-5 flex flex-col space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 shadow-inner">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover opacity-90 mix-blend-lighten"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                </div>

                {/* Trust Badges */}
                <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-slate-300">
                    <Award className="w-4 h-4 text-primary-400 shrink-0" />
                    <span>Оригинальные чертежи и детали</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-slate-300">
                    <ShieldAlert className="w-4 h-4 text-primary-400 shrink-0" />
                    <span>Полноценная гарантия на запчасти</span>
                  </div>
                </div>
              </div>

              {/* Product Info Column */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-primary-400 mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Каталог оборудования</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{product.name}</h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                    {product.longDescription}
                  </p>

                  {/* Advantages list */}
                  <div className="mt-6 space-y-2">
                    <h4 className="text-sm font-semibold text-white">Ключевые особенности:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2 text-xs text-slate-400">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications Table */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Технические характеристики:</h4>
                    <div className="border border-white/5 rounded-xl overflow-hidden bg-slate-950/20 text-xs">
                      {Object.entries(product.specs).map(([key, val], index) => (
                        <div
                          key={key}
                          className={`grid grid-cols-2 py-3 px-4 ${
                            index % 2 === 0 ? "bg-slate-900/20" : "bg-transparent"
                          } border-b border-white/5 last:border-b-0`}
                        >
                          <span className="text-slate-400 font-medium">{key}</span>
                          <span className="text-white font-semibold text-right">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs text-slate-400 max-w-[250px]">
                    Закажите диагностику или подбор оригинальных запчастей для {product.name}.
                  </span>
                  <button
                    onClick={() => {
                      onOrder(product.name);
                      onClose();
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-md shadow-primary-950/20 active:scale-[0.98]"
                  >
                    Запросить сервис / запчасти
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
