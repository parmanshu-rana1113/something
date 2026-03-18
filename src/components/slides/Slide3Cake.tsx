"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { useState } from "react";
import { Watch, Shirt, Wallet, Headphones, Plane, DollarSign, Gem } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

const GIFT_LIST = [
  { icon: <Gem className="w-5 h-5" />, text: "Shoes 👟" },
  { icon: <Watch className="w-5 h-5" />, text: "Watch ⌚" },
  { icon: <Shirt className="w-5 h-5" />, text: "Shirt 👕" },
  { icon: <Wallet className="w-5 h-5" />, text: "Wallet (Ek baar dekar , kitne time se ni use kra mein ki degi)  👛" },
  { icon: <Headphones className="w-5 h-5" />, text: "Ear phone (C-type) 🎧" },
  { icon: <DollarSign className="w-5 h-5" />, text: "Rupees 💸" },
  { icon: <Plane className="w-5 h-5" />, text: "Trip Expenses Mere ✈️" },
];

export default function Slide3Cake({ onNext, onBack }: SlideProps) {
  return (
    <SlideWrapper id="gifts">
      <motion.div className="space-y-6 w-full max-w-lg mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-romantic-rose">
            My Birthday Reward System 🎁✨
          </h2>
          <p className="text-lg text-romantic-purple italic leading-relaxed">
            "You give me gifts on your birthday... this time I already have a list! <br />
            Waiting for your job... uske baad mereko ye sab dilaoge apne hi khae tha  ! 😉"
          </p>
        </div>

        <div className="glass-card bg-white/50 rounded-2xl p-6 shadow-inner">
          <ul className="space-y-3 text-left">
            {GIFT_LIST.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/40 transition-colors group"
              >
                <div className="p-2 bg-romantic-pink/20 rounded-lg text-romantic-rose group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-lg font-medium text-romantic-purple">
                  {item.text}
                </span>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-center pt-4 text-romantic-rose font-bold italic"
            >
              ... aur bhi bohot hai! 😂
            </motion.li>
          </ul>
        </div>

        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="w-full py-4 bg-romantic-rose text-white rounded-xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Deal Done? 🤝❤️
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
    </SlideWrapper>
  );
}
