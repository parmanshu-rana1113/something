"use client";

import SlideWrapper from "../SlideWrapper";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

function Counter({ from, to, duration = 3 }: { from: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Slide8NineYears({ onNext, onBack }: SlideProps) {
  // 3285 days * 24 * 60 = 4,730,400 minutes
  // 4,730,400 * 60 = 283,824,000 seconds
  return (
    <SlideWrapper id="timeline">
      <div className="space-y-12 py-8 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-bold gold-text-gradient drop-shadow-xl"
          >
            <Counter from={0} to={9} duration={2} /> Years
          </motion.h2>
          <p className="text-romantic-purple/60 tracking-[0.3em] uppercase font-black text-sm md:text-base">
            Of Unstoppable Love ❤️
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
          <div className="glass-card bg-white/20 p-6 rounded-3xl border border-white/30 backdrop-blur-md space-y-2">
            <p className="text-3xl md:text-4xl font-black text-romantic-rose">
              <Counter from={0} to={3285} duration={3} />
            </p>
            <p className="text-romantic-purple/60 uppercase tracking-widest font-bold text-[10px] md:text-xs">Days</p>
          </div>
          <div className="glass-card bg-white/20 p-6 rounded-3xl border border-white/30 backdrop-blur-md space-y-2">
            <p className="text-3xl md:text-4xl font-black text-romantic-rose">
              <Counter from={0} to={78840} duration={3.5} />
            </p>
            <p className="text-romantic-purple/60 uppercase tracking-widest font-bold text-[10px] md:text-xs">Hours</p>
          </div>
          <div className="glass-card bg-white/20 p-6 rounded-3xl border border-white/30 backdrop-blur-md space-y-2">
            <p className="text-2xl md:text-3xl font-black text-romantic-rose">
              <Counter from={0} to={4730400} duration={4} />
            </p>
            <p className="text-romantic-purple/60 uppercase tracking-widest font-bold text-[10px] md:text-xs">Minutes</p>
          </div>
          <div className="glass-card bg-white/20 p-6 rounded-3xl border border-white/30 backdrop-blur-md space-y-2">
            <p className="text-2xl md:text-3xl font-black text-romantic-rose overflow-hidden truncate">
              <Counter from={0} to={283824000} duration={4.5} />
            </p>
            <p className="text-romantic-purple/60 uppercase tracking-widest font-bold text-[10px] md:text-xs">Seconds</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative w-full h-2 bg-white/20 rounded-full overflow-hidden border border-white/10">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "easeInOut" }}
              className="absolute h-full bg-gradient-to-r from-romantic-rose via-romantic-purple to-romantic-rose bg-[length:200%_auto] animate-gradient-x"
            />
          </div>
          <p className="text-center text-romantic-purple/40 italic font-medium text-sm">
            ...and counting every heartbeat in between. ❤️
          </p>
           <p className="text-center text-romantic-purple/40 italic font-medium text-sm">
             Hamm call limits khatam kardete the  ❤️
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="px-12 py-4 bg-romantic-rose text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-romantic-rose/40 transition-all uppercase tracking-widest"
          >
            Forever To Go ✨
          </motion.button>
          
          {onBack && (
            <button
              onClick={onBack}
              className="text-romantic-rose/50 hover:text-romantic-rose font-medium transition-colors text-sm"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </SlideWrapper>
  );
}
