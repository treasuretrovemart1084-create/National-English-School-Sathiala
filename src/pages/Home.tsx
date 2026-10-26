import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  BookOpen, 
  Users, 
  Building, 
  Heart, 
  Building2,
  Microscope, 
  Activity, 
  Trophy,
  ArrowRight,
  Calendar,
  Quote,
  GraduationCap,
  CreditCard,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/school_hero_clean.png';
import campusImg from '../assets/images/school_hero_clean.png';
import principalImg from '../assets/images/principal.png';
import logoImg from '../assets/images/logo.png';
import eventAdmissionsImg from '../assets/images/school_boundary_entrance.png';
import eventScienceImg from '../assets/images/real_science_lab.png';
import eventDramaImg from '../assets/images/magic_show_mascot.png';
import eventTrophiesImg from '../assets/images/annual_trophies_awards.png';
import eventCamoImg from '../assets/images/camo_stage_performance.png';
import { SCHOOL_CONTACT_INFO, SCHOOL_FEE_STRUCTURE } from '../data/feeStructureConfig';

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

export function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <HeroSection />
      <MissionSection />
      <WelcomeSection />
      <WhyChooseSection />
      <FeeHighlightSection />
      <ProgramsSection />
      <FacilitiesSection />
      <PrincipalSection />
      <HighlightsSection />
      <NewsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <QuickApplyButton />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[620px] w-full flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="National English School Sathiala Campus" 
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badges row with Light Blue, Emerald, and Yellow accents */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-300 backdrop-blur-md border border-sky-400/40 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              English Medium Excellence
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-emerald-400/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admissions Open 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md border border-amber-400/30 uppercase tracking-widest">
              Sathiala Campus
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-sky-200 uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-sky-400/60 hidden sm:inline-block"></span>
            <span>Welcome to National English School</span>
            <span className="w-6 h-px bg-sky-400/60 hidden sm:inline-block"></span>
          </p>

          {/* School's Motto: "Your Future Begins Here" */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
            <span>Your Future </span>
            <span className="text-amber-300 italic font-medium">Begins Here</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Providing high-standard English-medium education, moral discipline, and intellectual empowerment from Playgroup to Matric in Sathiala.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/admissions"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-amber-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/30 hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              Apply for Admission
            </Link>
            <Link
              to="/fee-structure"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-sky-500/20 border border-sky-400/40 px-7 py-3.5 text-base font-bold text-white backdrop-blur-md hover:bg-sky-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-sky-950/40"
            >
              <CreditCard className="w-4 h-4 mr-2 text-sky-300" />
              Official Fee Structure
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="relative">
              {/* Decorative color accents */}
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-amber-200/40 rounded-tl-3xl z-0" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-200/40 rounded-br-3xl z-0" />
              
              <div className="relative z-10 aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-100 flex items-center justify-center border border-slate-200">
                <img 
                  src={campusImg} 
                  alt="National English School Campus in Sathiala" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Motto badge overlay */}
              <div className="absolute -bottom-4 left-6 z-20 bg-navy text-white px-5 py-2.5 rounded-xl shadow-lg border border-navy-light hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Your Future Begins Here
                </span>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2 inline-block">
                Welcome to Sathiala Campus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                A Legacy of Quality Education in Sathiala
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                <p>
                  At <strong className="text-navy">National English School Sathiala</strong>, we are committed to providing an inspiring learning environment where every child discovers their inner capabilities. Our core foundation rests on academic discipline, ethical strength, and progressive pedagogy.
                </p>
                <p>
                  Guided by the vision of our principal, <strong className="text-navy">{SCHOOL_CONTACT_INFO.principalName}</strong>, we prepare our scholars to thrive in high school matriculation and become conscientious leaders in our society.
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link to="/about" className="inline-flex items-center text-navy font-bold hover:text-royal transition-colors group text-base">
                  Read our full story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-slate-300">|</span>
                <Link to="/fee-structure" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-800 transition-colors text-base">
                  Fee Schedule
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      desc: "Structured English-medium curriculum designed to build critical thinking and exam mastery.",
      color: "border-navy text-navy bg-blue-50"
    },
    {
      icon: Users,
      title: "Dedicated Faculty",
      desc: "Mentorship by caring educators dedicated to student character building and academic success.",
      color: "border-emerald-600 text-emerald-700 bg-emerald-50"
    },
    {
      icon: Heart,
      title: "Moral & Ethical Values",
      desc: "Deep respect for cultural heritage, Islamic values, character building, and social responsibility.",
      color: "border-amber-500 text-amber-700 bg-amber-50"
    },
    {
      icon: Building,
      title: "Safe & Modern Campus",
      desc: "Stimulating, secure classrooms and purposeful learning spaces in Sathiala.",
      color: "border-red-500 text-red-600 bg-red-50"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2 inline-block">
            The National English School Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Why Choose Our School?</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-7 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 border ${reason.color} transition-colors duration-300`}>
                  <reason.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-2.5">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* Special Fee Structure Highlight Strip on Home */}
function FeeHighlightSection() {
  return (
    <section className="py-16 bg-navy text-white relative overflow-hidden border-b border-navy-light">
      {/* Background light blue ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-500/20 px-3 py-1 rounded-md border border-sky-400/40">
                <CreditCard className="w-3.5 h-3.5 text-sky-300" /> Transparent Fee Schedule
              </span>
              <span className="text-xs text-amber-300 font-semibold bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                PKR Transcribed
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
              Official School Fee Schedule
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">
              Monthly tuition starts at <span className="font-bold text-sky-300 font-mono">PKR 1,400</span> for Playgroup to Class Two, <span className="font-bold text-emerald-400 font-mono">PKR 1,600</span> for Classes Three to Six, and <span className="font-bold text-amber-300 font-mono">PKR 2,000</span> for Classes Seven to Ten.
            </p>
            <p className="text-xs text-sky-200/80 italic">
              * Figures transcribed from school administration document. Please verify with Principal Sir Abdul Salam before payment.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <Link
              to="/fee-structure"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 text-sm transition-colors shadow-md"
            >
              Open Complete Fee Table <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center justify-center rounded-xl bg-sky-950/60 hover:bg-sky-900/60 text-sky-100 font-bold px-6 py-3.5 text-sm transition-colors border border-sky-400/30"
            >
              <Phone className="w-4 h-4 mr-2 text-sky-400" />
              Call Accounts Desk: {SCHOOL_CONTACT_INFO.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    { title: "Pre-School", grades: "Playgroup to Prep", age: "Age 3-5", fee: "PKR 1,400 / mo", color: "border-t-emerald-600" },
    { title: "Primary", grades: "Class 1 to 5", age: "Age 6-10", fee: "From PKR 1,400 / mo", color: "border-t-amber-500" },
    { title: "Middle", grades: "Class 6 to 8", age: "Age 11-13", fee: "From PKR 1,600 / mo", color: "border-t-navy" },
    { title: "High School", grades: "Class 9 & 10", age: "Age 14-16", fee: "PKR 2,000 / mo", color: "border-t-red-600" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2 inline-block">
              Academic Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-3">Our Educational Programs</h2>
            <p className="text-base sm:text-lg text-slate-600">A comprehensive learning pathway tailored to every stage of your child's growth.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/academics" className="inline-flex items-center justify-center rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-navy-light transition-colors">
              View All Academics
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`bg-slate-50 rounded-2xl p-7 border-t-4 ${prog.color} shadow-xs hover:shadow-md transition-shadow flex flex-col h-full border border-slate-200`}>
                <GraduationCap className="h-9 w-9 text-slate-400 mb-5" />
                <h3 className="font-serif text-2xl font-bold text-navy mb-2">{prog.title}</h3>
                <div className="space-y-1 mb-4">
                  <p className="text-slate-800 font-semibold text-sm">{prog.grades}</p>
                  <p className="text-xs text-slate-500">{prog.age} Years</p>
                </div>
                <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-700">{prog.fee}</span>
                  <Link to="/academics" className="inline-flex items-center text-xs font-bold text-navy hover:text-royal">
                    Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const facilities = [
    { icon: Building2, title: "Classrooms" },
    { icon: Microscope, title: "Science Laboratories" },
    { icon: Building2, title: "Reception Block" },
    { icon: Activity, title: "Activity & Event Spaces" },
  ];

  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-amber-300 uppercase mb-2 inline-block">
            Campus Life
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Our Facilities in Sathiala</h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {facilities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-amber-300 mb-4 sm:mb-6" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{item.title}</h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipalSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
            
            {/* Principal Photo Column - Executive Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[340px]">
                {/* Decorative glowing backdrops */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-400 via-amber-300 to-sky-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity" />
                
                {/* Photo frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-slate-900 ring-4 ring-sky-300/40">
                  <img 
                    src={principalImg} 
                    alt={`Principal ${SCHOOL_CONTACT_INFO.principalName}`} 
                    className="w-full aspect-[346/417] object-cover object-top hover:scale-[1.02] transition-transform duration-500" 
                  />
                  {/* Subtle inner gradient badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy via-navy/85 to-transparent p-4 text-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider bg-navy/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30 shadow-xs">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Head of School &bull; {SCHOOL_CONTACT_INFO.principalName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="flex items-center gap-2 mt-5 flex-wrap justify-center">
                <a
                  href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-royal bg-white hover:bg-sky-50 px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{SCHOOL_CONTACT_INFO.phonePrimary}</span>
                </a>
                <a
                  href={`mailto:${SCHOOL_CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-navy bg-white hover:bg-sky-50 px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <span>Email Principal</span>
                </a>
              </div>
            </div>

            {/* Principal Message Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest text-sky-800 bg-sky-100/80 px-3 py-1 rounded-full border border-sky-200 uppercase">
                  <Sparkles className="w-3 h-3 text-sky-600" />
                  Leadership Message
                </span>
                <span className="text-xs font-semibold text-slate-500">Sathiala Campus</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4 leading-tight">
                Your Future <span className="text-royal italic font-medium">Begins Here</span>
              </h2>

              <div className="relative mb-6 p-5 sm:p-6 rounded-2xl bg-white/95 border border-sky-100 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-12 bg-gradient-to-b from-sky-400 via-royal to-amber-400 rounded-full shrink-0 mt-1" />
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
                    Welcome to National English School Sathiala. Our guiding philosophy is that each student possesses immense, unique potential. Through dedicated teaching, disciplined character development, and modern academic standards, we empower every learner with the confidence to step forward and succeed in life.
                  </p>
                </div>
              </div>

              {/* 3 Executive Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white border border-sky-100 shadow-2xs">
                  <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-500" /> English Medium
                  </div>
                  <p className="text-xs text-slate-600">Conceptual fluency and strong literacy.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-emerald-100 shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Board Success
                  </div>
                  <p className="text-xs text-slate-600">Thorough exam preparation & mentoring.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-amber-100 shadow-2xs">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500" /> Moral Values
                  </div>
                  <p className="text-xs text-slate-600">Character, manners, and civic duty.</p>
                </div>
              </div>

              {/* Signature block */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-serif font-bold text-2xl text-navy">{SCHOOL_CONTACT_INFO.principalName}</p>
                  <p className="text-sky-800 font-semibold text-xs tracking-wider uppercase mt-0.5">
                    Principal & Academic Director &bull; National English School Sathiala
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">District Narowal, Punjab</p>
                </div>
                <Link
                  to="/faculty"
                  className="inline-flex items-center text-xs font-bold text-navy hover:text-royal bg-sky-50 hover:bg-sky-100 px-3.5 py-2 rounded-lg border border-sky-200 transition-colors"
                >
                  Meet All Faculty <ChevronRight className="w-3.5 h-3.5 ml-1 text-sky-600" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Key Milestones</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-12">School Highlights</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { metric: "98%", label: "Matric Result Pass Rate", color: "text-emerald-700" },
            { metric: "10+", label: "Years of Educational Service", color: "text-amber-600" },
            { metric: "850+", label: "Enrolled Students", color: "text-navy" },
            { metric: "45+", label: "Qualified Teaching Staff", color: "text-red-600" },
          ].map((stat, i) => (
             <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200">
                <div className={`font-serif text-4xl sm:text-5xl font-bold mb-2 font-mono tabular-nums ${stat.color}`}>{stat.metric}</div>
                <div className="text-slate-600 font-semibold uppercase tracking-wide text-xs">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const latestUpdates = [
    {
      id: 1,
      day: "15",
      month: "AUG",
      dateStr: "Admissions Session 2026",
      title: "Admissions Open for Playgroup to Matric",
      desc: "Registration is open at National English School Sathiala. Visit our campus office for admission forms and prospectus.",
      image: eventAdmissionsImg
    },
    {
      id: 2,
      day: "10",
      month: "SEP",
      dateStr: "Annual Gala",
      title: "Annual Function Stage & Character Mascot Gala",
      desc: "Celebrations featuring stage performances, magic shows, Mickey Mouse mascot, and motivational addresses under our school motto.",
      image: eventDramaImg
    },
    {
      id: 3,
      day: "05",
      month: "OCT",
      dateStr: "Annual Prize Ceremony",
      title: "Annual Prize Distribution & Academic Honors",
      desc: "Prestigious honors ceremony awarding 1st Position crystal trophies and distinction shields to top achievers and board position holders.",
      image: eventTrophiesImg
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <FadeIn>
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Campus Announcements</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Latest News & Events</h2>
          </FadeIn>
          <FadeIn delay={0.2} className="hidden sm:block">
            <Link to="/news" className="inline-flex items-center text-navy font-bold hover:text-royal transition-colors group">
              View All
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestUpdates.map((item) => (
            <FadeIn key={item.id} delay={item.id * 0.1}>
              <div className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-navy text-white rounded-lg px-3 py-1.5 shadow-sm text-center min-w-[3rem] border border-white/20">
                    <span className="block text-sm font-bold leading-none mb-0.5">{item.day}</span>
                    <span className="block text-[10px] font-bold text-amber-300 uppercase leading-none">{item.month}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-xs text-slate-500 mb-2.5">
                    <Calendar className="mr-2 h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span>{item.dateStr}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 line-clamp-2 mb-4 text-xs leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  <Link to="/news" className="inline-flex items-center text-xs font-bold text-navy hover:text-royal transition-colors mt-auto">
                    Read More
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

{/* Testimonials with specified review names: 1st Abid Hussain Shah, 2nd Sabir Hussain */}
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Abid Hussain Shah",
      relation: "Parent of 8th Grade Student",
      quote: "National English School Sathiala has been a truly exceptional institution for our child. The personal guidance from Sir Abdul Salam and the faculty's focus on both high academic standards and strong moral values make this school unique in the region."
    },
    {
      name: "Sabir Hussain",
      relation: "Parent of 10th Grade Matric Student",
      quote: "I am extremely proud of the educational progress and character development my child has achieved at National English School Sathiala. The teachers provide personalized mentorship, and the school truly lives up to its motto: Your Future Begins Here."
    },
    {
      name: "Muhammad Khalid",
      relation: "Parent of Primary Wing Student",
      quote: "Choosing National English School Sathiala was the best decision for our family. The administration is transparent, the curriculum is rigorous, and children are inspired to learn with curiosity and discipline every day."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Parent Community Voice</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">What Parents Say</h2>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={handlePrev} 
              className="p-3 bg-white rounded-full shadow-md text-navy hover:text-amber-600 hover:scale-110 transition-all border border-slate-200"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={handleNext} 
              className="p-3 bg-white rounded-full shadow-md text-navy hover:text-amber-600 hover:scale-110 transition-all border border-slate-200"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center text-center relative"
              >
                <Quote className="w-10 h-10 text-amber-500 mb-6" />
                <p className="text-base sm:text-lg md:text-xl text-slate-700 italic mb-8 leading-relaxed font-serif max-w-3xl">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-serif font-bold text-navy text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-xs text-slate-500 font-medium">{testimonials[currentIndex].relation}</p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-1">Verified Parent Review &bull; National English School Sathiala</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-amber-500 w-6' : 'bg-slate-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What is the admission procedure at National English School Sathiala?",
      answer: "Parents visit the school campus in Sathiala, obtain the admission prospectus (PKR 200), and submit the admission form. The student undergoes a readiness interaction, and upon approval, one-time admission and session charges apply."
    },
    {
      question: "What are the school fees for different classes?",
      answer: "Monthly tuition is PKR 1,400 for Playgroup to Class 2; PKR 1,600 for Classes 3 to 6; and PKR 2,000 for Classes 7 to 10. Admission fee is PKR 2,000 (one time, non-refundable), and annual subscription is PKR 2,000 (non-refundable). Please see our Fee Structure page for full details."
    },
    {
      question: "Is transport available, and what is the transport fee?",
      answer: "Transport service is available for students in Sathiala and surrounding areas at PKR 1,600. The specific billing period/frequency is to be confirmed by the school administrator upon inquiry."
    },
    {
      question: "Who is the principal of National English School Sathiala?",
      answer: "The principal is Sir Abdul Salam, leading our school's academic and administrative standards. Parents can contact the school at 0346-6206624 or 0310-7777265."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Frequently Asked Questions</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Got Questions?</h2>
        </FadeIn>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'border-navy bg-navy/5 shadow-xs' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-serif text-base sm:text-lg font-bold ${openIndex === index ? 'text-navy' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-navy transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden border-t border-sky-500/30 text-white">
      {/* Sky Blue Smoky Ambient Cloud & Radial Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/25 via-sky-600/10 to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-sky-400/25 via-sky-300/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-sky-400/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[400px] bg-sky-300/18 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.18),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-400/20 border border-sky-300/40 text-sky-200 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {SCHOOL_CONTACT_INFO.motto}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 drop-shadow-md">
            Ready to Enroll at National English School?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your child's bright educational journey. Visit our Sathiala campus or contact administrator Sir Abdul Salam.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-3.5 text-base font-bold text-slate-950 shadow-xl hover:from-amber-300 hover:to-amber-400 transition-all duration-200"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-sky-950/40 border border-sky-300/40 px-8 py-3.5 text-base font-bold text-white hover:bg-sky-500/20 transition-all duration-200 backdrop-blur-xs"
            >
              Contact Campus Office
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden text-white border-y border-sky-500/30">
      {/* Sky Blue Smoky Ambient Cloud & Radial Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/25 via-sky-600/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[340px] bg-gradient-to-r from-sky-400/20 via-sky-300/25 to-sky-400/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-sky-300/18 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-400/20 border border-sky-300/30 text-amber-300 mb-6 shadow-sm backdrop-blur-xs">
            <Sparkles className="h-6 w-6 text-amber-300" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-relaxed mb-6">
            Your Future <span className="text-amber-300 font-bold italic">Begins Here</span> through academic excellence, moral integrity, and character building.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 via-amber-300 to-sky-400 mx-auto rounded-full"></div>
          <p className="text-xs uppercase tracking-widest text-sky-200 mt-4 font-semibold">
            National English School Sathiala
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function QuickApplyButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/admissions"
        className="group flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-bold text-white shadow-xl hover:bg-navy-light hover:scale-105 transition-all duration-200 border border-navy-light"
      >
        <span className="mr-2">Apply Now</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
      </Link>
    </div>
  );
}
