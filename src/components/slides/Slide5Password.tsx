"use client";

import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Lock, Sparkles, Moon, Stars } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function Slide5Password({ onNext, onBack }: SlideProps) {
  const [hasReadPoetry, setHasReadPoetry] = useState(false);
  const [showAngryFeedback, setShowAngryFeedback] = useState(false);
  const [disagreeCount, setDisagreeCount] = useState(0);

  const poetryLines = [
    { text: "Premi accha wahi hai, jo aap mein thodi bhakti bhar dein. 🙏✨", delay: 0 },
    { text: "Prem sachha wahi hai, jo aap ko thoda Shiv, aur thoda Parvati kardein. 🔱🌸", delay: 1 },
    { text: "Jo kabhi maun bhi samaj lein, aur kabhi shabdo mein bhi uljhe. 🤫🗣️", delay: 2 },
    { text: "Jo jhukna jaanta ho, jo aapko aapke harr roop mein apna maanta ho. 🙇‍♂️🫂", delay: 3 },
    { text: "Jo khud se pehle rakhe aapka naam. ✍️❤️", delay: 4 },
    { text: "Jo bitana chahe aapke saath, har din aur har shaam. 🌅🌃", delay: 5 },
    { text: "Jo aapko bandhna nahi, thaamna chahe. 🤝🕊️", delay: 6 },
    { text: "Kyunki premi accha wahi hai, jo apne hone se aapme shakti bhar dein. 🕯️🔥", delay: 7 },
    { text: "Prem saccha wahi hai, jo aap ko thoda Shiv, aur thoda Parvati kardein. 🔱🌸", delay: 8 },
  ];

  const handleAgree = () => {
    // Detailed Tracking Logic
    const isFirstAttempt = disagreeCount === 0;
    const trackingMsg = isFirstAttempt 
      ? "🎯 AGREED ON 1ST CLICK! Total Soulmate! ❤️" 
      : `🔄 AGREED ON ATTEMPT #${disagreeCount + 1}! (She disagreed ${disagreeCount} times first! 😂❤️)`;
    
    console.log(`[DIVINE_TRACKING] ${trackingMsg}`);
    
    // Log to Vercel Server Logs via API
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    fetch(`/api/track?slide=5_agreement&choice=${isFirstAttempt ? 'immediate_agree' : 'disagree_then_agree'}&attempts=${disagreeCount + 1}&tz=${encodeURIComponent(tz)}`)
      .catch(() => {});
    
    onNext();
  };

  const handleDisagree = () => {
    const newCount = disagreeCount + 1;
    setDisagreeCount(newCount);
    setShowAngryFeedback(true);
    console.log(`[DIVINE_TRACKING] She clicked Disagree! Total disagreements now: ${newCount}`);
  };

  return (
    <SlideWrapper id="password">
      <div className="relative w-full max-w-3xl mx-auto min-h-screen flex flex-col items-center py-12 px-4 no-scrollbar">
        {/* Floating Mystical Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-4 text-romantic-pink/30 pointer-events-none"
        >
          <Stars size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-4 text-romantic-purple/20 pointer-events-none"
        >
          <Moon size={60} />
        </motion.div>

        {/* Header - More Unique */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-12 space-y-2"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-romantic-rose via-romantic-purple to-romantic-rose bg-clip-text text-transparent italic tracking-tighter">
            Our Divine Frequency ❤️
          </h2>
          <p className="text-romantic-purple/60 font-medium tracking-widest text-sm uppercase">
            Shiv-Parvati
          </p>
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-romantic-pink/40 to-transparent mx-auto mt-4" />
        </motion.div>

        {/* Poetry Section */}
        <div className="w-full bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[50px] border border-white/30 shadow-2xl mb-12 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-romantic-rose/20 via-romantic-purple/20 to-romantic-rose/20" />
          {poetryLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-romantic-purple/90 leading-relaxed font-semibold text-center italic drop-shadow-sm"
            >
              {line.text}
            </motion.p>
          ))}

          {!hasReadPoetry && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
              className="pt-8 flex justify-center"
            >
              <button
                onClick={() => setHasReadPoetry(true)}
                className="group relative px-10 py-4 bg-white/60 hover:bg-white/80 border border-white text-romantic-purple rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                <span>I've felt every word ❤️</span>
                <Sparkles className="w-5 h-5 text-romantic-rose animate-pulse" />
              </button>
            </motion.div>
          )}
        </div>

        {/* Divine Agreement - Appears after reading */}
        <AnimatePresence>
          {hasReadPoetry && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="w-full max-w-md bg-white/30 backdrop-blur-2xl p-10 rounded-[40px] border border-white/60 shadow-2xl space-y-8 relative mb-20 text-center"
            >
              <div className="flex justify-center -mt-20 mb-4">
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="bg-white/90 p-5 rounded-full shadow-2xl border-2 border-romantic-pink/20"
                >
                  <Lock className="w-10 h-10 text-romantic-rose" />
                </motion.div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-romantic-purple leading-tight">
                  Will you be my Parvati, my Laxmi, for all our lifetimes? ❤️
                </h3>
                <p className="text-xs text-romantic-purple/50 italic font-medium">
                  The universe is waiting for your soul's answer...
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={handleAgree}
                  className="w-full py-5 bg-gradient-to-r from-romantic-rose via-romantic-purple to-romantic-rose bg-[length:200%_auto] hover:bg-right text-white rounded-3xl text-xl font-bold shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-0.98 uppercase tracking-widest"
                >
                  Yes, I AGREE ✨
                </button>
                
                <button
                  onClick={handleDisagree}
                  className="w-full py-3 text-romantic-purple/40 hover:text-red-400 font-bold transition-colors text-sm"
                >
                  Disagree
                </button>
              </div>

              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full py-2 text-romantic-purple/40 hover:text-romantic-purple font-bold transition-colors text-xs mt-4"
                >
                  ← Back to Poem
                </button>
              )}

              {/* Angry Emoji Popup Overlay */}
              <AnimatePresence>
                {showAngryFeedback && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-[40px] flex flex-col items-center justify-center p-8 space-y-6 z-50 border-4 border-red-200"
                  >
                    <div className="flex space-x-2 text-6xl">
                      <span>😡</span>
                      <span>😤</span>
                      <span>😤</span>
                    </div>
                    <div className="space-y-4">
                      <p className="text-xl font-bold text-red-600 italic leading-relaxed">
                        "First agree, then we move ahead! <br /> No other way, my little Radha! ❤️😤"
                      </p>
                      <button
                        onClick={() => setShowAngryFeedback(false)}
                        className="px-8 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition-all"
                      >
                        Okay, fine! 🙌❤️
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        
        {!hasReadPoetry && onBack && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={onBack}
            className="mb-12 px-8 py-2 text-romantic-purple/50 hover:text-romantic-purple font-medium transition-colors"
          >
            ← Back to Puzzle
          </motion.button>
        )}
      </div>
    </SlideWrapper>
  );
}
