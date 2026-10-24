import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Microscope, 
  Trophy, 
  Activity, 
  Bus, 
  ShieldCheck, 
  Leaf,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import facilitiesHeroImg from '../assets/images/school.png';
import campusSecurityImg from '../assets/images/school_view_4.jpeg';
import classImg from '../assets/images/school_view_11.jpeg';
import sciImg from '../assets/images/school_view_23.jpeg';
import sportsImg from '../assets/images/school_view_22.jpeg';
import actImg from '../assets/images/school_view_18.jpeg';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
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

export function Facilities() {
  return (
    <div className="flex flex-col w-full bg-white">
      <FacilitiesHero />
      <FacilitiesGrid />
      <EnvironmentSection />
      <FacilitiesCTA />
    </div>
  );
}

function FacilitiesHero() {
  return (
    <section className="relative h-[45vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src={facilitiesHeroImg} 
          alt="School Facilities at National English School Sathiala" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-light backdrop-blur-md border border-white/10 mb-4 uppercase tracking-widest">
            Campus Life
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            Our Facilities
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Providing a safe, inspiring, and well-equipped environment that supports holistic learning and development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface FacilityItem {
  title: string;
  desc: string;
  icon: React.ElementType;
  imgSrc: string;
}

function FacilitiesGrid() {
  const facilities: FacilityItem[] = [
    {
      title: "Modern Classrooms",
      desc: "Spacious, well-ventilated classrooms designed with modern seating to facilitate interactive learning and ensure maximum student comfort.",
      icon: Building2,
      imgSrc: classImg
    },
    {
      title: "Science Laboratories",
      desc: "Well-equipped science labs where students perform practical experiments in Physics, Chemistry, and Biology to foster hands-on scientific curiosity.",
      icon: Microscope,
      imgSrc: sciImg
    },
    {
      title: "Playground & Sports",
      desc: "Expansive play areas and sports facilities to promote physical fitness, teamwork, and healthy competition among students.",
      icon: Trophy,
      imgSrc: sportsImg
    },
    {
      title: "Activity Areas",
      desc: "Spaces specially designated for arts, crafts, speech, presentations, and extra-curricular events that spark creativity and cultural awareness.",
      icon: Activity,
      imgSrc: actImg
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-sm font-bold tracking-widest text-gold uppercase mb-3">Campus Infrastructure</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Equipped for Excellence</h3>
          <p className="mt-4 text-slate-600">
             [Note: Only facilities confirmed by the school are listed below. Specific details will be updated once provided.]
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {facilities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <img src={item.imgSrc} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 text-royal flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-royal group-hover:text-white transition-colors duration-300 shadow-sm">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-navy mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnvironmentSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-serif text-sm font-bold tracking-widest text-gold uppercase mb-3">Safe & Secure</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">A Clean & Safe Environment</h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              The safety, health, and well-being of our students is our highest priority. We maintain strict standards to ensure the campus remains a secure haven for learning.
            </p>

            <div className="space-y-6">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "Security Measures", 
                  desc: "Round-the-clock security staff, comprehensive CCTV surveillance, and secure entry/exit protocols to keep our campus safe." 
                },
                { 
                  icon: Leaf, 
                  title: "Cleanliness & Hygiene", 
                  desc: "Rigorous daily cleaning routines, availability of filtered drinking water, and hygienic washroom facilities for all students." 
                },
                { 
                  icon: Bus, 
                  title: "Transportation", 
                  desc: "Safe and reliable transport services covering key routes in and around Sathiala, driven by experienced staff." 
                }
              ].map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="h-12 w-12 rounded-xl bg-white text-gold-dark flex items-center justify-center shrink-0 shadow-sm border border-slate-100 mr-5">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

           <FadeIn delay={0.2} className="relative">
             <div className="bg-white rounded-3xl aspect-square lg:aspect-[4/5] overflow-hidden border border-slate-200 shadow-sm relative group">
               <img 
                 src={campusSecurityImg} 
                 alt="Campus Environment and Security" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors" />
             </div>
             {/* Decorative element */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full z-[-1]" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FacilitiesCTA() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience Our Campus
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We welcome parents and prospective students to visit National English School Sathiala and see our facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Visit
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
