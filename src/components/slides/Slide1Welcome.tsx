"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface SlideProps {
  onNext: () => void;
}

const SPARKLE_POSITIONS = [
  { top: "15%", left: "20%", delay: 0 },
  { top: "80%", left: "15%", delay: 1.2 },
  { top: "30%", left: "80%", delay: 2.5 },
  { top: "50%", left: "50%", delay: 3.1 },
  { top: "70%", left: "90%", delay: 0.5 },
  { top: "25%", left: "65%", delay: 4.2 },
  { top: "85%", left: "45%", delay: 2.1 },
  { top: "40%", left: "10%", delay: 3.8 },
  { top: "10%", left: "85%", delay: 1.5 },
  { top: "60%", left: "75%", delay: 0.8 },
  { top: "90%", left: "80%", delay: 2.9 },
  { top: "5%", left: "40%", delay: 4.5 },
  { top: "55%", left: "25%", delay: 1.9 },
  { top: "75%", left: "60%", delay: 3.4 },
  { top: "35%", left: "35%", delay: 0.2 },
];

export default function Slide1Welcome({ onNext }: SlideProps) {
  return (
    <SlideWrapper id="welcome">
      {/* Shining/Glowing Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {SPARKLE_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              top: pos.top, 
              left: pos.left,
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              delay: pos.delay
            }}
          >
            <Sparkles className="text-romantic-gold w-6 h-6 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="space-y-8 z-10"
      >
        <div className="flex justify-center flex-col items-center space-y-4">
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative"
          >
            <Heart className="w-20 h-20 text-romantic-rose fill-romantic-rose drop-shadow-lg" />
            <motion.div 
              className="absolute -inset-4 bg-romantic-pink/20 rounded-full blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <span className="text-romantic-gold font-bold tracking-[0.2em] text-sm uppercase">Radhe Radhe</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gold-text-gradient drop-shadow-md">राधे राधे</span>, <br />
            <span className="text-romantic-rose">मेरी राधा</span> ❤️✨
          </h1>
          
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl text-romantic-purple font-serif italic">
              हमारी CA साहिबा, अपूर्वा...
            </p>
            <p className="text-lg md:text-xl text-romantic-rose font-medium opacity-90 max-w-lg mx-auto leading-relaxed">
              "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः..." <br />
              पर मेरे लिए, मेरा सारा संसार बस आपमें ही है।
            </p>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="pt-4"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(244, 114, 182, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="px-12 py-5 bg-gradient-to-r from-romantic-pink to-romantic-purple text-white rounded-full text-2xl font-bold shadow-2xl transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Start the Journey ✨</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-romantic-gold to-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity"
            />
          </motion.button>
        </motion.div>

        <p className="text-sm text-romantic-purple/70 font-medium">
          I made something very special for you.
        </p>
      </motion.div>
    </SlideWrapper>
  );
}
