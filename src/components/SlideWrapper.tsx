"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  id: string;
}

export default function SlideWrapper({ children, id }: SlideWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 relative snap-start"
    >
      <div className="max-w-4xl w-full glass-card rounded-3xl p-8 md:p-12 flex flex-col items-center text-center space-y-8 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-romantic-pink/10 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-romantic-purple/10 rounded-full blur-3xl -ml-16 -mb-16" />
        
        {children}
      </div>
    </motion.section>
  );
}
