"use client";

import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function Slide7VideoMemory({ onNext, onBack }: SlideProps) {
  // Array of 6 videos. User can replace these with actual IDs/Songs
  const videos = [
    { id: "UKrUivSEtOs", title: "Song 1", start: 24, end: 70 }, // Corrected ID: UKrUivSEtOs
    
      { id: "948HV9e4piw", title: "Song 8", start: 5, end: 60 },
    { id: "3uCZBh2_r6s", title: "Song 3", start: 32, end: 80 },
    { id: "xZsONNB3gXU", title: "Song 4", start: 95, end: 160 },
    { id: "VT87DFblAxY", title: "Song 5", start: 22, end: 60  },
    { id: "HJMGyq8j36A", title: "Song 6", start: 48, end: 100 },
    { id: "AJTJTNP3WME", title: "Song 2", start: 57, end: 140},
     { id: "mDVoEbcEBmg", title: "Song 7", start: 18, end: 60 },
     
  ];

  return (
    <SlideWrapper id="video">
      <div className="space-y-6 w-full max-w-6xl mx-auto py-4">
        <div className="space-y-2 text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-romantic-rose to-romantic-purple bg-clip-text text-transparent">
            Our Favourite Once ✨
          </h2>
          <p className="text-romantic-purple/80 italic font-medium">
            "Songs we share, moments we live..."
          </p>
           <p className="text-romantic-purple/80 italic font-medium">
            "Be in patience every video run 30 seconds , this may take time to load do not refresh"
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          {videos.map((v, index) => {
            const timeParams = [];
            if (v.start > 0) timeParams.push(`start=${v.start}`);
            if (v.end > 0) timeParams.push(`end=${v.end}`);
            const queryStr = timeParams.length > 0 ? `&${timeParams.join("&")}` : "";

            return (
              <motion.div
                key={v.id + index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black border border-white/20 hover:shadow-romantic-pink/20 hover:shadow-2xl transition-all"
              >
                <iframe
                  className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${v.id}?controls=1&rel=0&modestbranding=1${queryStr}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center pt-4 space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="px-10 py-3 bg-gradient-to-r from-romantic-rose to-romantic-purple text-white rounded-full text-lg font-bold shadow-xl hover:shadow-romantic-rose/40 transition-all flex items-center gap-2"
          >
            Carry On ❤️
          </motion.button>
          
          {onBack && (
            <button
              onClick={onBack}
              className="text-romantic-purple/50 hover:text-romantic-purple font-medium transition-colors"
            >
              ← Back
            </button>
          )}
        </div>
      </div>
    </SlideWrapper>
  );
}
