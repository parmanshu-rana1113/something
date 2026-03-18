"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1Welcome from "./slides/Slide1Welcome";
import Slide2Birthday from "./slides/Slide2Birthday";
import Slide3Cake from "./slides/Slide3Cake";
import Slide4APPuzzle from "./slides/Slide4APPuzzle";
import Slide5Password from "./slides/Slide5Password";
import Slide6Gallery from "./slides/Slide6Gallery";
import Slide7VideoMemory from "./slides/Slide7VideoMemory";
import Slide8NineYears from "./slides/Slide8NineYears";
import Slide9Message from "./slides/Slide9Message";
import Slide10Final from "./slides/Slide10Final";
import Slide11Travel from "./slides/Slide11Travel";

const slides = [
  Slide1Welcome,
  Slide2Birthday,
  Slide3Cake,
  Slide4APPuzzle,
  Slide5Password,
  Slide6Gallery,
  Slide7VideoMemory,
  Slide8NineYears,
  Slide9Message,
  Slide11Travel,
  Slide10Final,
];

export default function NavigationWrapper() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide, slides.length]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Track slide change
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      fetch(`/api/track?slide=${currentSlide + 1}&tz=${encodeURIComponent(tz)}`).catch(console.error);
    } catch (e) {
      fetch(`/api/track?slide=${currentSlide + 1}`).catch(console.error);
    }
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <main className="romantic-gradient min-h-screen overflow-y-auto md:overflow-hidden snap-y snap-mandatory no-scrollbar">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <CurrentSlideComponent 
            onNext={goToNext} 
            onBack={goToPrevious}
            onRestart={() => goToSlide(0)}
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
