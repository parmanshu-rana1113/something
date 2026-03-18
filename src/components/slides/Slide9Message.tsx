import { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, Heart, MousePointerClick } from "lucide-react";

interface SlideProps {
  onNext: () => void;
  onBack?: () => void;
}

export default function Slide9Message({ onNext, onBack }: SlideProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const message = `Apoorva,

You balance the books of your life with such grace, but you've already balanced my Soul perfectly. ❤️

I know yaar, main handle nahi kar paya jo situation thi. Already told you, mujhe knowledge naahi thi iss baare mein. But terko kyun aisa lagta hai ki tu nahi kar paa rahi? Yaar, teri feelings samajhta hu. Tune aaj tak kitna kiya hai mera... hamesha 50%-50% nahi hota hai. Main toh abhi jyada karne laga, terko feel/guilt hua ki "ye karta hai, main nahi kar rahi". Yaar, hamesha se karte aayi hai tu itna! Tabhi main aisa insaan ban paya. Saari ego khatam ki hai tune meri, merko accha insaan banaya hai. Sab galat cheejon se door rakha, padhaya, saath rehkar. Aur yaar, humne ek dusre ko bahut support kiya hai... ab kyun low feel kar rahi hai? Tu khud kehti hai "10/10 ho yaar aap", phir bhi... AB SACH MEIN NEED H SUCCESS KAISE HOIUNGA YR MEIN🥺

Yaar, ab tak hum sirf shaadi karne ke liye ladte the. Tu khud kehti hai jaldi set hoja. Main bhi isiliye idhar mehnat kar raha tha... Yaar, sach mein thoda kam dhayan tha teri taraf kyunki ab tu set ho chuki thi, aur main bhi jaldi-jaldi set hokar phir aage sochte. Aur yaar, ek galti ye kardi Harshit pe vishwas kar liya ki wo sambhal lega terko... sabse badi galti ho gayi merse. 😞

Tu itni samajhdaar hai, main 300km door hu. Jo 8-10 hour tere paas hai, utna toh main kar hi nahi paunga na? Agar terko koi bhi x-y-z influence karta hai toh bacche aap toh samajhdaar ho... 🤔

Main bhi kuch activities karte, saath khana banate, movie, cricket, ghumte, sab karte bacche, sab theek rehta yaar. I'm not waiting for that much time ki physical intimacy chahiye, bas jo sukoon tere saath rehne se hai wo chahiye. 🥰

Yaar Lavish tera bhai hai ya Shiva hai, wo nahi karte aisi teri, ya Harshit jitni teri kara itni apni sister ki bhi aise hi hai same... kyu terko itna sab accha dikhaya jaa raha hai? Main nahi kehta wo galat hai, but itna influence kyu? Aisa nahi hai apni sister ke saath kam banti hai, terse jyada nahi. Terko life ke har mod par acche insaan milte hai, school se ab tak bahut mile hai. Kahan hai wo sab bacche? Hamesha ye mat socho ki ab jo feel kar rahi, wo fix hai. Tu Lavnish ke liye merse ladti thi ki accha dost hai falana... I respect your feelings ki tu kisi ke liye galat bhavna nahi rakhti. Tu bilkul pure dil se karne lag jaati hai thode time mein hi... par bacche, tu kisi ke mann mein nahi jhaak sakti. 💔

Tera saath dene wale, pamper karne wale, care karne wale har jagah mil jayenge, par teri responsibility har koi nahi lega bacche. Main bhi itna accha nahi hu ki main bahut accha insaan hu, but tere liye meri soul bahut pure hai, bahut jyada yaar. Sach mein terko hamesha mummy se compare kiya ki acchi ladki hai, sab sikhati hai limitation, boundaries, accha bura kya hai. 🕊️

Aur merko bhi tu jab apne papa se compare karti hai, kehti hai aapki bhi aadat waisi hi hai... yaar accha lagta hai ki ladki apne father se compare karti hai. Maine suna hai ladki apne partner mein apne father ko dhundti hai. Itna sab drama nahi ho sakta yaar, I know tune kabhi merko chhodna plan nahi kiya tha. I understand your feelings, but bacche inn butterflies ko, naye sheher ko, chandni ko permanent mat samajh... ye sab terse door chale hi jayenge, ye sheher, ye log. 🏙️🦋

Merko pata hai tere pass hamesha merse best options the. Aur ab tu Cyber Hub mein kaam kar rahi hai, sab merse intelligent, merse badhiya, perfect honge... but maintere mann ko itna jaanta hu ki jo kehti thi, "terse badhiya chahiye hi kyu?" SORRY yaar... 😔

Terko hamesha support karne ki koshish ki hai yaar. Tere CA banne par itni khushi hui na, ki bas jaise merko hi sab mil gaya ho. Apni tension bhool jata tha ki "tu hai saath, tu sab karwa degi". Kehti thi na ki bataya nahi kuch? Hamesha ye hi tha ki kar lenge saath milkar sab tu... tu sab job mein waise itna krti hai yaar, aur kya maangta main terse? Paise ka aur cheejon ka itna shauk nahi rakhta. Tera mann, tera dil hi mere liye sab kuch hai. ❤️

Har b'day pe merko kehti thi na "terse pehle kisi ki wish naa aaye"? I know last year room dhundhne ke chakkar mein bhool gaya tha, is saaal sach mein plan kiya tha... but tu bulayegi nahi ab merko... 🥀

TU TENSION NA LIO... EK INSAAN HAMESA TERE PAKSHA MEIN HOGA. KOI FARAK NAHI PADTA TERE THEEK YA GALAT HONE SE. 🫂❤️`;

  const handleOpen = () => {
    setIsOpen(true);
    // Vercel-Safe Tracking
    fetch('/api/track?slide=9_message&choice=opened_envelope&attempts=1')
      .catch(() => {});
    console.log("[DIVINE_TRACKING] Envelope Opened! ❤️✉️");
  };

  return (
    <SlideWrapper id="message">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-12 py-8">
        
        {/* Interactive Envelope Container */}
        <div className="relative w-full flex justify-center items-center min-h-[400px]">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="envelope"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0, rotate: 5 }}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer group"
                onClick={handleOpen}
              >
                {/* Envelope Base */}
                <div className="w-80 h-56 bg-[#fdfaf5] rounded-lg shadow-2xl border-2 border-romantic-rose/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                    <div className="p-4 bg-romantic-rose/10 rounded-full animate-pulse">
                      <MailOpen className="text-romantic-rose w-10 h-10" />
                    </div>
                    <span className="text-romantic-rose font-bold tracking-widest uppercase text-sm group-hover:scale-110 transition-transform flex items-center gap-2">
                       Click Me <MousePointerClick size={16} />
                    </span>
                  </div>
                  {/* Decorative Flaps (Visual only for the closed state) */}
                  <div className="absolute top-0 left-0 w-full h-1/2 border-b-2 border-romantic-rose/10 bg-white/50 skew-y-6 origin-top-left" />
                  <div className="absolute top-0 right-0 w-full h-1/2 border-b-2 border-romantic-rose/10 bg-white/50 -skew-y-6 origin-top-right" />
                </div>
                
                {/* Heart Seal */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute -top-4 -right-4 bg-white p-2 rounded-full shadow-lg border border-romantic-rose/20"
                >
                  <Heart className="text-romantic-rose fill-romantic-rose w-6 h-6" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                className="w-full max-w-3xl"
              >
                <div className="glass-card bg-white/95 p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(255,192,203,0.3)] border-2 border-white relative text-left">
                  <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-romantic-rose to-romantic-purple rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                    💌
                  </div>
                  
                  <motion.div
                    className="text-sm md:text-base text-gray-800 font-medium font-serif whitespace-pre-line overflow-y-auto max-h-[60vh] pr-4 space-y-4 no-scrollbar border-b border-romantic-rose/10 pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <p className="leading-relaxed">{message}</p>
                  </motion.div>
                  
                  <div className="mt-4 pt-2 flex justify-end items-center gap-2">
                    <p className="italic text-romantic-rose font-semibold text-lg">Yours always, Nara...</p>
                    <Heart className="text-romantic-rose fill-romantic-rose animate-pulse" size={20} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center space-y-4 pt-4">
          <AnimatePresence>
            {isOpen && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="px-12 py-4 bg-gradient-to-r from-romantic-rose to-romantic-purple text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-romantic-rose/40 transition-all uppercase tracking-widest"
              >
                Almost There... ✨
              </motion.button>
            )}
          </AnimatePresence>
          
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
