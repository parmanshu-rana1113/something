"use client";

import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

const MEMORIES = [
  { id: 1, url: "/images/pic/IMG_20251231_162819_083.jpg", caption: "Try to impress you Again  ✨" },
  { id: 2, url: "/images/pic/IMG-20230210-WA0012.jpg", caption: "your obsession for that day ❤️" },
  { id: 3, url: "/images/pic/Screenshot_2026-03-17-23-56-03-81_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Always Champion in my Mind" },
  { id: 4, url: "/images/pic/Screenshot_2026-03-17-23-50-13-99_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Dress make my love insane for you 📸" },
  { id: 5, url: "/images/pic/Screenshot_2025-04-12-22-12-16-49_6012fa4d4ddec268fc5c7112cbb265e7.jpg", caption: "The face always in my Eyes 🌎" },
  { id: 6, url: "/images/pic/Screenshot_2026-03-18-01-25-54-23_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "No Comments May be you remember 😊" },
  { id: 7, url: "/images/pic/Screenshot_2026-03-18-01-26-56-27_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Thinking of you 💭" },
  { id: 8, url: "/images/pic/Screenshot_2026-03-18-01-26-59-37_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "jab b tune sath dene ko khae kbhi juth n bola terko ye meri soul janti h 🦋" },
  { id: 9, url: "/images/pic/Screenshot_2026-03-18-01-27-50-37_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Treasured seconds ⏳" },
  { id: 10, url: "/images/pic/Screenshot_2026-03-18-01-40-35-20_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Heart to heart ❤️" },
  { id: 11, url: "/images/pic/Screenshot_2026-03-18-01-29-37-71_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "I really need motivation 🌟" },
  { id: 12, url: "/images/pic/Screenshot_2026-03-18-01-29-07-12_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Our journey together 🛣️" },
  { id: 13, url: "/images/pic/Screenshot_2026-03-18-01-40-50-80_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Forever vibes ♾️" },
  { id: 14, url: "/images/pic/Screenshot_2026-03-18-01-44-29-47_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Love in focus 🔍❤️" },
  { id: 15, url: "/images/pic/Screenshot_2026-03-18-01-45-17-65_e2d5b3f32b79de1d45acd1fad96fbb0f.jpg", caption: "Or kitne efforts karegi tu you make me good Men👑" },
];

export default function Slide6Gallery({ onNext, onBack }: SlideProps) {
  const [selectedImg, setSelectedImg] = useState<typeof MEMORIES[0] | null>(null);

  return (
    <SlideWrapper id="gallery">
      <div className="w-full space-y-6 h-full flex flex-col py-6">
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-romantic-rose to-romantic-purple bg-clip-text text-transparent italic">Our Memories ❤️</h2>
          <p className="text-romantic-purple/70 italic font-medium">"Every picture tells a story of us... ❤️ ZOOM iT"</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-y-auto max-h-[65vh] p-4 no-scrollbar bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20">
          {MEMORIES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
              whileTap={{ scale: 0.97 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-white/50 group"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.url} 
                alt={img.caption}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] text-white font-medium truncate">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="px-12 py-4 bg-gradient-to-r from-romantic-rose to-romantic-purple text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-romantic-rose/40 transition-all uppercase tracking-widest"
          >
            See More ✨
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

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-5xl w-full bg-white/5 rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(255,192,203,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 backdrop-blur-md border border-white/20"
                onClick={() => setSelectedImg(null)}
              >
                <X size={24} />
              </button>
              
              <div className="relative group cursor-zoom-in overflow-auto max-h-[85vh]">
                <img 
                  src={selectedImg.url} 
                  alt={selectedImg.caption}
                  className="w-full h-auto object-contain block mx-auto transition-transform duration-300 hover:scale-150 origin-center"
                />
              </div>

              <div className="p-6 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm text-center border-t border-white/10">
                <p className="text-2xl font-bold gold-text-gradient drop-shadow-md">{selectedImg.caption}</p>
                <p className="text-white/50 text-xs mt-2 italic">Hover to zoom into details 🔍</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideWrapper>
  );
}
