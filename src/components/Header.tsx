"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Phone } from "lucide-react";

const navItems = [
  { name: "О компании", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Продукция", href: "#products" },
  { name: "Преимущества", href: "#why-choose-us" },
  { name: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-primary-600 to-primary-400 text-white shadow-md shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300">
                <Cpu className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg leading-none tracking-wider text-white">
                  ТФМ <span className="text-primary-500">КАЗАХСТАН</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-0.5">
                  Сервис и запчасти
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 py-2 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+77777777777"
                className="flex items-center text-slate-300 hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                +7 (777) 777-77-77
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 transition-all duration-300 hover:scale-[1.02] shadow-md shadow-primary-950/20 hover:shadow-primary-500/20 active:scale-[0.98]"
              >
                Оставить заявку
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <a
                href="tel:+77777777777"
                className="text-slate-300 hover:text-primary-400 transition-colors p-2"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-dark-bg/95 backdrop-blur-lg pt-24 px-4 flex flex-col justify-between pb-8"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-slate-300 hover:text-primary-400 transition-colors py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+77777777777"
                className="flex items-center justify-center text-slate-300 hover:text-primary-400 transition-colors py-3 text-lg font-medium border-t border-white/5"
              >
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                +7 (777) 777-77-77
              </a>
              <a
                href="#contact-form"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 text-center text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl font-semibold hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg"
              >
                Оставить заявку
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
