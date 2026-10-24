import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Megaphone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const announcements = [
  {
    id: 1,
    tag: "Admissions",
    tagColor: "bg-sky-500 text-white font-bold",
    text: "Admissions for National English School Sathiala are now open from Playgroup to Class 10.",
    link: "/admissions"
  },
  {
    id: 2,
    tag: "Fee Schedule",
    tagColor: "bg-amber-500 text-slate-950 font-bold",
    text: "Parent Notice: Official fee structure is published. Please confirm figures with administrator Sir Abdul Salam.",
    link: "/fee-structure"
  },
  {
    id: 3,
    tag: "School Motto",
    tagColor: "bg-navy text-white",
    text: "National English School Sathiala: Your Future Begins Here.",
    link: "/about"
  }
];

export function AnnouncementTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = announcements[currentIndex];

  return (
    <div className="bg-slate-50 text-slate-800 py-2 px-4 border-b border-slate-200 flex justify-center z-40 relative shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center w-full">
        <div className="flex items-center gap-2 bg-navy text-amber-300 font-bold text-xs px-3.5 py-1.5 rounded-lg uppercase tracking-wider shrink-0 mr-3 border border-navy-light">
          <Megaphone className="w-3.5 h-3.5 text-amber-400" />
          <span>Notice</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative h-6 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="absolute w-full whitespace-nowrap overflow-hidden text-ellipsis text-xs sm:text-sm font-medium flex items-center gap-2"
            >
              <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${current.tagColor}`}>
                {current.tag}
              </span>
              <span className="text-slate-800 truncate">
                {current.text}
              </span>
              {current.link && (
                <Link 
                  to={current.link}
                  className="inline-flex items-center text-navy font-bold hover:text-royal ml-1 transition-colors text-xs shrink-0"
                >
                  View <ChevronRight className="w-3 h-3 ml-0.5" />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
