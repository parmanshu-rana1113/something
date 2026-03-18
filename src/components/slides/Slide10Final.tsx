"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
  onRestart: () => void;
}

export default function Slide10Final({ onRestart, onBack }: SlideProps) {
  return (
    <SlideWrapper id="final">
      <div className="space-y-10 py-10">
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <Heart className="w-32 h-32 text-romantic-rose fill-romantic-rose" />
          </motion.div>
          
          {/* Floating hearts particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-romantic-pink"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0, 
                scale: Math.random() * 0.5 + 0.5 
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 400, 
                y: -(Math.random() * 400 + 100), 
                opacity: [0, 1, 0],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 4 + Math.random() * 2, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-romantic-rose">
            I Love You Apoorva ❤️
          </h1>
          <p className="text-2xl md:text-3xl text-romantic-purple gold-text-gradient font-bold uppercase tracking-widest">
            Happy Birthday
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-romantic-rose">
                *Yaar jo geeta laye the vo handover kardo* 
          </h1>

        <div className="flex flex-col items-center space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="px-12 py-4 border-2 border-romantic-purple text-romantic-purple rounded-full text-xl font-semibold hover:bg-romantic-purple hover:text-white transition-all shadow-lg"
          >
            Replay Journey
          </motion.button>
          
          {onBack && (
            <button
              onClick={onBack}
              className="text-romantic-purple/50 hover:text-romantic-purple font-medium transition-colors text-sm"
            >
              ← Back to Message
            </button>
          )}
        </div>
      </div>
    </SlideWrapper>
  );
}
