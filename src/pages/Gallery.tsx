import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';
import galleryHeroImg from '../assets/images/school_grad_cap.png';
import campusBuildingImg from '../assets/images/school_grad_cap.png';
import boundaryEntranceImg from '../assets/images/school_boundary_entrance.png';
import mainGateImg from '../assets/images/school_main_gate.png';
import magicShowImg from '../assets/images/magic_show_mascot.png';
import annualTrophiesImg from '../assets/images/annual_trophies_awards.png';
import camoStageImg from '../assets/images/camo_stage_performance.png';
import prayerStageImg from '../assets/images/prayer_recitation_stage.png';
import classroomImg from '../assets/images/real_classroom.png';
import scienceLabImg from '../assets/images/real_science_lab.png';
import receptionImg from '../assets/images/reception_block.png';
import dramaDayImg from '../assets/images/drama_day_stage.png';
import marqueeEventImg from '../assets/images/school_marquee_event.png';
import cultureDayImg from '../assets/images/culture_day_celebration.png';
import graduationCapImg from '../assets/images/graduation_cap_building.png';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const CATEGORIES = ["All", "Campus", "Events", "Students", "Classrooms", "Activities"];

const GALLERY_ITEMS = [
  {
    id: 0,
    category: "Campus",
    title: "National English School Campus Facade & Grounds",
    src: campusBuildingImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 1,
    category: "Campus",
    title: "National English School Sathiala Entrance & Signboard",
    src: boundaryEntranceImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Function Stage with Magician & Mickey Mascot",
    src: magicShowImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 3,
    category: "Events",
    title: "Annual Prize Distribution 1st Position Crystal Trophies",
    src: annualTrophiesImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 4,
    category: "Events",
    title: "Annual Prize Distribution Ceremony Stage Performance",
    src: camoStageImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 5,
    category: "Activities",
    title: "Annual Ceremony Recitation & Stage Presentation",
    src: prayerStageImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    category: "Campus",
    title: "Campus Main Gate & Security Entrance",
    src: mainGateImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 7,
    category: "Classrooms",
    title: "Classroom Learning & Student Engagement",
    src: classroomImg,
    aspect: "aspect-[3/4]"
  },
  {
    id: 8,
    category: "Students",
    title: "Science Laboratory & Practical Examination",
    src: scienceLabImg,
    aspect: "aspect-[3/4]"
  },
  {
    id: 9,
    category: "Campus",
    title: "Reception & Administrative Office Block",
    src: receptionImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 10,
    category: "Events",
    title: "Annual Drama Day Stage Performance",
    src: dramaDayImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 11,
    category: "Events",
    title: "Annual Ceremony in Grand Marquee",
    src: marqueeEventImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 12,
    category: "Events",
    title: "Culture Day - Regional Heritage Presentations & Attire",
    src: cultureDayImg,
    aspect: "aspect-[4/3]"
  },
  {
    id: 13,
    category: "Campus",
    title: "National English School Campus & Graduation Cap",
    src: graduationCapImg,
    aspect: "aspect-[4/3]"
  }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full bg-white">
      <GalleryHero />
      
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <FadeIn className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-navy text-white shadow-md" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </FadeIn>

          {/* Image Grid */}
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="break-inside-avoid"
                >
                  <div 
                    className={`group relative bg-slate-100 rounded-2xl overflow-hidden cursor-pointer w-full ${item.aspect} focus:outline-none focus:ring-4 focus:ring-royal focus:ring-offset-2`}
                    onClick={() => setSelectedImage(item.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full image for ${item.category} ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedImage(item.id);
                      }
                    }}
                  >
                    <img 
                      src={item.src} 
                      alt={`${item.category} - ${item.title}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="h-12 w-12 rounded-full bg-gold-light flex items-center justify-center text-navy translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No images available in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-navy w-full max-w-5xl aspect-video rounded-2xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage !== null && (
                <img 
                  src={GALLERY_ITEMS.find(item => item.id === selectedImage)?.src}
                  alt="Selected view"
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryHero() {
  return (
    <section className="relative h-[40vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src={galleryHeroImg} 
          alt="Gallery at National English School Sathiala" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-light backdrop-blur-md border border-white/10 mb-4 uppercase tracking-widest">
            Visual Journey
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            School Gallery
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Explore the vibrant campus life, memorable events, and academic excellence at National English School Sathiala.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
