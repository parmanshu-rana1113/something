"use client";

import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function Slide4APPuzzle({ onNext, onBack }: SlideProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.replace(/,/g, "") === "21022017") {
      setIsSuccess(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <SlideWrapper id="puzzle">
      <div className="space-y-8 w-full max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="puzzle-form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold text-romantic-rose">A Small Maths Puzzle ❤️</h2>
                <p className="text-lg text-romantic-purple italic">
                  It reminded me of you... 🙂
                </p>
              </div>

              <div className="bg-white/40 p-6 rounded-3xl border border-white/60 space-y-4 shadow-lg backdrop-blur-sm">
                <p className="text-lg text-romantic-purple leading-relaxed">
                  Every day I try to make you smile a little more than the previous day. 
                </p>
                <p className="text-lg text-romantic-purple leading-relaxed">
                  On the first day I tried <span className="font-bold text-romantic-rose">3,503,667 ways</span>, and each next day I added <span className="font-bold text-romantic-rose">1 more way</span> than the day before.
                </p>
                <p className="text-xl font-bold text-romantic-rose text-center pt-2">
                  How many total ways I tried to make you smile in the first 6 days?
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="text-romantic-purple/70 hover:text-romantic-rose text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  <span>{showHint ? "Hide Hint" : "Need a hint? 💡"}</span>
                </button>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-romantic-pink/10 p-4 rounded-2xl border border-romantic-pink/20 text-sm text-romantic-purple">
                      <p className="font-bold mb-1">In simple language:</p>
                      <p>
                        Find the sum of the first 6 terms of an arithmetic progression where:
                        <br />
                        <span className="font-mono bg-white/50 px-1 rounded">a = 3,503,667</span> and <span className="font-mono bg-white/50 px-1 rounded">d = 1</span>.
                        <br />
                        Basically, calculate the total for 6 days!
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter the magic total..."
                  className={`w-full p-4 rounded-2xl border-2 transition-colors outline-none text-center text-2xl tracking-widest font-bold ${
                    error ? "border-red-400 bg-red-50 text-red-600" : "border-romantic-pink/50 focus:border-romantic-pink bg-white/80 text-romantic-purple"
                  }`}
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-romantic-rose to-romantic-purple text-white rounded-2xl text-xl font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  DECODE THE MAGIC ✨
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-msg"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="flex flex-col items-center justify-center space-y-6 py-10"
            >
              <div className="text-6xl">🥳</div>
              <h2 className="text-4xl font-bold text-romantic-rose text-center">Maybe you'll smile once for me too? 🙂💖</h2>
              <p className="text-2xl text-romantic-purple text-center font-medium">
                21-02-2017 <br />
                The day everything changed.
              </p>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                    className="text-2xl"
                  >
                    💖
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={onNext}
                  className="w-full py-3 bg-white/40 border border-white/60 text-romantic-purple rounded-full font-bold hover:bg-white/60 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Continue →
                </motion.button>
                
                {onBack && (
                  <button
                    onClick={onBack}
                    className="w-full py-2 text-romantic-purple/50 hover:text-romantic-purple font-medium transition-colors text-sm"
                  >
                    ← Back
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideWrapper>
  );
}
