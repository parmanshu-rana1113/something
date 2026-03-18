"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function Slide2Birthday({ onNext, onBack }: SlideProps) {
  return (
    <SlideWrapper id="birthday">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <Heart className="w-8 h-8 text-romantic-pink" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="space-y-8 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold gold-text-gradient drop-shadow-sm leading-tight">
          Happy Birthday <br /> Arithmetic 🎂✨
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto space-y-4"
        >
          <p className="text-xl md:text-2xl text-romantic-rose italic leading-relaxed">
            "Even when you're angry with me, you are still the most beautiful part of my life."
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="w-full px-12 py-4 border-2 border-romantic-rose text-romantic-rose rounded-full text-xl font-semibold hover:bg-romantic-rose hover:text-white transition-all shadow-lg"
          >
            Next Step ❤️
          </motion.button>
          
          {onBack && (
            <button
              onClick={onBack}
              className="w-full py-2 text-romantic-rose/50 hover:text-romantic-rose font-medium transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
      </motion.div>
    </SlideWrapper>
  );
}
