import React from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, GraduationCap, Target, Heart, Users, MapPin, Sparkles, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/school_grad_cap.png';
import campusLegacyImg from '../assets/images/school_boundary_entrance.png';
import principalImg from '../assets/images/principal.png';
import logoImg from '../assets/images/logo.png';
import { SCHOOL_CONTACT_INFO } from '../data/feeStructureConfig';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[42vh] min-h-[340px] w-full flex items-center justify-center bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="National English School Sathiala Campus" 
            className="w-full h-full object-cover opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full mb-3 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" /> {SCHOOL_CONTACT_INFO.motto}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About National English School
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Empowering youth through rigorous English-medium academics, moral character, and community leadership in Sathiala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Overview */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">
                Our Campus & History
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">
                A Tradition of Educational Excellence in Sathiala
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-navy">{SCHOOL_CONTACT_INFO.schoolName}</strong> was founded to bring modern, accessible, and high-standard English-medium education to the children of Sathiala.
                </p>
                <p>
                  Under the stewardship of <strong className="text-navy">{SCHOOL_CONTACT_INFO.principalName}</strong>, the school focuses equally on academic rigor and character building. From early childhood in Playgroup to comprehensive secondary matriculation, students are guided with individual attention and structured syllabus coverage.
                </p>
                <p>
                  We believe that education must prepare young individuals to be confident, respectful, and productive citizens who lead positive change in their families and communities.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  to="/fee-structure"
                  className="px-5 py-2.5 rounded-xl bg-navy text-white font-bold text-xs hover:bg-navy-light transition-colors"
                >
                  View Fee Structure
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                >
                  Contact Campus
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative border border-slate-200">
                <img 
                  src={campusLegacyImg} 
                  alt="National English School Sathiala Campus Building" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-navy p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3.5 border border-slate-100 max-w-[280px]">
                <div className="h-14 w-14 p-1 bg-white rounded-xl shadow-xs border border-slate-200 shrink-0">
                  <img src={logoImg} alt="National English School Crest" className="h-full w-full object-contain filter drop-shadow-xs" />
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-navy leading-tight">Your Future Begins Here</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mt-0.5">Sathiala &bull; Est. 1998</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn className="bg-white p-8 sm:p-10 rounded-2xl shadow-xs border border-slate-200">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-navy flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To be the benchmark for quality English-medium schooling in Sathiala, nurturing learners who excel in board examinations, demonstrate unwavering moral values, and step forward as proactive community contributors.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="bg-white p-8 sm:p-10 rounded-2xl shadow-xs border border-slate-200">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To provide a supportive, disciplined, and student-focused learning atmosphere that empowers children with strong English literacy, scientific thinking, moral integrity, and practical confidence.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Values & Standards</span>
            <h2 className="font-serif text-3xl font-bold text-navy">The National English School Standard</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Academic Rigor", desc: "Structured syllabus, conceptual learning, and regular diagnostic assessments.", color: "text-navy bg-blue-50" },
              { icon: Users, title: "Dedicated Faculty", desc: "Qualified teachers mentoring students under direct principal oversight.", color: "text-emerald-700 bg-emerald-50" },
              { icon: Shield, title: "Moral Values", desc: "Character building, manners, honesty, and civic responsibility.", color: "text-amber-700 bg-amber-50" },
              { icon: GraduationCap, title: "Holistic Growth", desc: "Balancing exams with sports, debates, science, and co-curriculars.", color: "text-red-600 bg-red-50" }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className={`mx-auto h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message in About */}
      <section className="py-20 bg-navy text-white relative overflow-hidden border-t border-navy-light">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <FadeIn className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-amber-400 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-64 sm:w-72 aspect-[346/417] rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl ring-4 ring-sky-400/40">
                  <img 
                    src={principalImg} 
                    alt={`Principal ${SCHOOL_CONTACT_INFO.principalName}`} 
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500" 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-navy/85 backdrop-blur-xs py-2 px-3 text-center border-t border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                      Head of School &bull; {SCHOOL_CONTACT_INFO.principalName}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-400/30 mb-3">
                <Sparkles className="w-3 h-3 text-sky-300" />
                Leadership Vision &bull; Sathiala
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Your Future <span className="text-amber-300 italic font-medium">Begins Here</span>
              </h2>
              <p className="text-base text-slate-200 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                At National English School Sathiala, we treat every child with the utmost care, guiding them through solid foundations in English literacy, science, mathematics, and moral character. We welcome parents to join hands with us in shaping a generation of leaders.
              </p>
              <div className="border-t border-navy-light pt-4 flex flex-col sm:flex-row items-center lg:items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-2xl font-bold text-white">{SCHOOL_CONTACT_INFO.principalName}</p>
                  <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase mt-0.5">Principal & Academic Director &bull; National English School Sathiala</p>
                  <p className="text-xs text-slate-400 mt-1">{SCHOOL_CONTACT_INFO.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 text-xs font-semibold border border-sky-400/30 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{SCHOOL_CONTACT_INFO.phonePrimary}</span>
                  </a>
                  <a
                    href={`mailto:${SCHOOL_CONTACT_INFO.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-300" />
                    <span>Email Office</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
