import React from 'react';
import { motion } from 'motion/react';
import { Users, UserCircle, Mail, BookOpen, Shield, Heart, Target, Award, Phone } from 'lucide-react';
import facultyHeroImg from '../assets/images/school.png';
import principalImg from '../assets/images/principal.png';
import { SCHOOL_CONTACT_INFO } from '../data/feeStructureConfig';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export function Faculty() {
  return (
    <div className="flex flex-col w-full bg-white">
      <FacultyHero />
      <FacultyIntroduction />
      <LeadershipSection />
      <TeachingFacultySection />
      <AdministrationSection />
    </div>
  );
}

function FacultyHero() {
  return (
    <section className="relative h-[42vh] min-h-[340px] w-full flex items-center justify-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={facultyHeroImg} 
          alt={`Faculty and Staff at ${SCHOOL_CONTACT_INFO.schoolName}`} 
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400/20 px-4 py-1 text-xs font-semibold text-amber-300 border border-amber-400/30 mb-4 uppercase tracking-widest">
            {SCHOOL_CONTACT_INFO.motto}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
            Faculty & Leadership
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            Meet the experienced educators and leadership team guiding National English School Sathiala.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FacultyIntroduction() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <Users className="mx-auto h-11 w-11 text-amber-500 mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-4">
            Excellence in Teaching & Student Mentorship
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            At National English School Sathiala, we take immense pride in our faculty. Our teachers are not just subject instructors; they are caring mentors who uphold high moral discipline, ignite critical curiosity, and build foundational academic strength from early childhood through secondary matriculation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-sky-800 bg-sky-100 px-3 py-1 rounded-full uppercase mb-2">
            Leadership & Vision
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy">School Leadership</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-amber-400 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative w-44 sm:w-56 aspect-[346/417] rounded-2xl overflow-hidden border-2 border-white shadow-xl ring-4 ring-sky-300/40">
                <img 
                  src={principalImg} 
                  alt={`Principal ${SCHOOL_CONTACT_INFO.principalName}`} 
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                  Head of School
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                  Executive Director
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy">{SCHOOL_CONTACT_INFO.principalName}</h3>
              <p className="text-slate-600 font-semibold text-sm mb-3">Principal, National English School Sathiala</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-5 border-l-2 border-sky-400 pl-3">
                "Our commitment is to guide our students with moral integrity and educational excellence so they are well-prepared for higher board examinations and a bright future. Your future begins here."
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs font-semibold flex-wrap">
                <a 
                  href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> {SCHOOL_CONTACT_INFO.phonePrimary}
                </a>
                <a 
                  href={`tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" /> {SCHOOL_CONTACT_INFO.phoneSecondary}
                </a>
                <a 
                  href={`mailto:${SCHOOL_CONTACT_INFO.email}`} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-navy" /> Email Office
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TeachingFacultySection() {
  const teacherQualities = [
    { icon: BookOpen, title: "Subject Specialists", desc: "Trained in mathematics, English language, sciences, and Urdu.", color: "text-navy bg-blue-50" },
    { icon: Heart, title: "Nurturing Care", desc: "Dedicated to individual attention for primary and middle school students.", color: "text-emerald-700 bg-emerald-50" },
    { icon: Target, title: "Rigorous Standards", desc: "Focused on preparing matric students for high board marks.", color: "text-amber-700 bg-amber-50" },
    { icon: Award, title: "Moral Character", desc: "Role models fostering respect, honesty, and civic responsibility.", color: "text-red-600 bg-red-50" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Teaching Staff</span>
          <h2 className="font-serif text-3xl font-bold text-navy">Our Teaching Faculty</h2>
          <p className="text-sm text-slate-600 mt-2">
            National English School Sathiala is proud to have a qualified team of dedicated male and female educators committed to child development.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teacherQualities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all text-center">
                <div className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AdministrationSection() {
  return (
    <section className="py-16 bg-navy text-white text-center border-t border-navy-light">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
          Have Questions for Our Faculty?
        </h2>
        <p className="text-slate-300 text-sm mb-6">
          Meet with our teachers and administration at National English School, Sathiala.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
          >
            Call {SCHOOL_CONTACT_INFO.phonePrimary}
          </a>
          <a
            href={`mailto:${SCHOOL_CONTACT_INFO.email}`}
            className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20"
          >
            {SCHOOL_CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </section>
  );
}
