"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl mx-auto lg:mx-0 space-y-8"
    >
      {children}
    </motion.div>
  );
}
