import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';
import galleryHeroImg from '../assets/images/school.png';
import img1 from '../assets/images/custom_gallery_1.png';
import img2 from '../assets/images/school_view.jpeg';
import img3 from '../assets/images/school_view_2.jpeg';
import img4 from '../assets/images/school_view_3.jpeg';
import img5 from '../assets/images/school_view_4.jpeg';
import img6 from '../assets/images/school_view_model.jpeg';
import img7 from '../assets/images/school_view_7.jpeg';
import img8 from '../assets/images/school_view_8.jpeg';
import img9 from '../assets/images/school_view_9.jpeg';
import img10 from '../assets/images/school_view_10.jpeg';
import img11 from '../assets/images/school_view_11.jpeg';
import img12 from '../assets/images/school_view_12.jpeg';
import img13 from '../assets/images/school_view_13.jpeg';
import img14 from '../assets/images/school_view_14.jpeg';
import img15 from '../assets/images/school_view_15.jpeg';
import img16 from '../assets/images/school_view_16.jpeg';
import img17 from '../assets/images/school_view_17.jpeg';
import img18 from '../assets/images/school_view_18.jpeg';
import img19 from '../assets/images/school_view_19.jpeg';
import img20 from '../assets/images/school_view_20.jpeg';
import img21 from '../assets/images/school_view_21.jpeg';
import img22 from '../assets/images/school_view_22.jpeg';
import img23 from '../assets/images/school_view_23.jpeg';

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

const CATEGORIES = ["All", "Campus", "Classrooms", "Students", "Events", "Sports", "Activities"];

const ALL_IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13,
  img14, img15, img16, img17, img18, img19, img20, img21, img22, img23
];

const GALLERY_ITEMS = Array.from({ length: 23 }).map((_, i) => ({
  id: i,
  category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1], // Cycle through categories, skip "All"
  title: `Image ${i + 1}`,
  src: ALL_IMAGES[i],
  aspect: i % 3 === 0 ? "aspect-square" : i % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"
}));

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
