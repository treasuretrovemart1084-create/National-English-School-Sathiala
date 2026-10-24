import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, CheckCircle2, Clock, Phone, MapPin, FileText, CreditCard, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/school.png';
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

export function Admissions() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-[42vh] min-h-[340px] w-full flex items-center justify-center bg-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt={`Admissions at ${SCHOOL_CONTACT_INFO.schoolName}`} 
            className="w-full h-full object-cover opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full mb-3 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" /> Session 2026 Admissions
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Student Admissions
            </h1>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Join National English School Sathiala. Playgroup to Class 10 admissions now open under the guidance of Principal {SCHOOL_CONTACT_INFO.principalName}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 inline-block">Enrollment Steps</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">Application & Admission Process</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We welcome new students from Sathiala and surrounding areas. Our admissions procedure is clear, straightforward, and supportive for parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                step: "01", 
                title: "Inquiry & Campus Visit", 
                icon: MapPin,
                desc: `Visit our Sathiala campus to meet the administration, explore classrooms, and get full orientation on curriculum.` 
              },
              { 
                step: "02", 
                title: "Prospectus & Form (PKR 200)", 
                icon: FileText,
                desc: "Obtain the official school prospectus and admission form from our front desk (PKR 200 one-time fee) and submit required documents." 
              },
              { 
                step: "03", 
                title: "Assessment & Principal Interview", 
                icon: ClipboardList,
                desc: `Prospective students undergo a basic readiness check followed by meeting Principal ${SCHOOL_CONTACT_INFO.principalName}.` 
              }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-md transition-shadow group">
                <div className="absolute top-6 right-6 font-serif text-4xl font-bold text-slate-200 group-hover:text-amber-400 transition-colors">{step.step}</div>
                <div className="h-12 w-12 rounded-xl bg-white shadow-xs flex items-center justify-center mb-6 relative z-10 border border-slate-200">
                  <step.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-slate-600 relative z-10 leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>

          {/* Fee Reference Banner */}
          <div className="mb-20 rounded-2xl bg-gradient-to-r from-navy via-navy to-[#0c2f57] border border-sky-400/30 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-200 bg-sky-500/20 px-2.5 py-0.5 rounded border border-sky-400/30">
                  Official Fee Schedule
                </span>
                <span className="text-xs text-amber-300 font-semibold">Transcribed from school records</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Review School Fee Structure
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                Monthly tuition: <span className="font-bold text-sky-300">PKR 1,400</span> (PG&ndash;Class 2), <span className="font-bold text-emerald-400">PKR 1,600</span> (Class 3&ndash;6), <span className="font-bold text-amber-300">PKR 2,000</span> (Class 7&ndash;10). Admission: PKR 2,000 (one-time non-refundable). Annual charges: PKR 2,000.
              </p>
            </div>
            <Link
              to="/fee-structure"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 transition-colors shadow-md"
            >
              <CreditCard className="w-4 h-4" /> Open Complete Fee Schedule
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">Required Documents</h3>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                <ul className="space-y-3.5">
                  {[
                    "Completed Admission Form (available with Prospectus)",
                    "Four (4) recent passport-sized student photographs",
                    "Copy of Student's B-Form / Birth Certificate",
                    "Copy of Father's / Guardian's CNIC",
                    "Previous School Leaving Certificate (if transferring from another school)",
                    "Latest academic progress or result card"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h3 className="font-serif text-2xl font-bold text-navy mb-6">Admissions Office & Inquiries</h3>
              <div className="space-y-4 text-slate-600 text-sm">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                  <Clock className="h-7 w-7 text-navy shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Admissions Desk Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Monday to Saturday: 8:00 AM &ndash; 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <Phone className="h-7 w-7 text-emerald-700 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Call for Assistance</h4>
                    <p className="text-xs sm:text-sm font-mono text-emerald-800">
                      {SCHOOL_CONTACT_INFO.phonePrimary} / {SCHOOL_CONTACT_INFO.phoneSecondary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <MapPin className="h-7 w-7 text-amber-700 shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy">Campus Location</h4>
                    <p className="text-xs sm:text-sm text-slate-700">{SCHOOL_CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white text-center px-4 border-t border-navy-light">
        <FadeIn className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Secure Your Child's Future at National English School
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-6">
            Contact us today to schedule a visit or begin the application process.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="inline-flex rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 px-7 py-3 text-sm font-bold shadow-md transition-all">
              Contact Admissions Office
            </Link>
            <Link to="/fee-structure" className="inline-flex rounded-xl bg-white/10 hover:bg-white/20 text-white px-7 py-3 text-sm font-bold transition-all border border-white/20">
              Check Fee Structure
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
