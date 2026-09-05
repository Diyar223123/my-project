"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Pulsing Outer Rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/30 -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/20 -z-10"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          delay: 0.5,
          ease: "easeInOut",
        }}
      />

      {/* Button */}
      <motion.a
        href="https://wa.me/77777777777?text=Здравствуйте!%20Интересует%20обслуживание%20и%20запчасти%20для%20оборудования%20ТФМ."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/20 transition-colors cursor-pointer"
        aria-label="Связаться в WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-5.5 h-5.5 fill-current" />
      </motion.a>
    </div>
  );
}
