import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Eye, 
  Camera, 
  Users, 
  Database, 
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import schoolHeroImg from '../assets/images/school.png';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[38vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src={schoolHeroImg} 
            alt="National English School Sathiala Privacy Policy" 
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs sm:text-sm font-semibold text-gold-light border border-gold/30 mb-4 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Institutional Trust
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Privacy Policy & Terms
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              How National English School Sathiala protects student records, parent communication, and personal data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-md space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          <div>
            <span className="text-xs font-bold text-royal uppercase tracking-wider block mb-1">Effective Date: Academic Session 2025–2026</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">Our Commitment to Privacy</h2>
            <p className="mt-3 text-slate-600">
              National English School Sathiala values the trust of students, parents, guardians, and faculty. We maintain rigorous standards to ensure the confidentiality, safety, and security of all personal, academic, and contact information entrusted to us.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8 space-y-3">
            <h3 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
              <Database className="w-5 h-5 text-royal" /> 1. Information We Collect
            </h3>
            <p className="text-slate-600">
              When students enroll or parents interact with our school administration, portals, or inquiry forms, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
              <li><strong>Student Academic Information:</strong> Full name, date of birth, B-Form number, prior school leaving certificates, examination records, attendance logs, and conduct remarks.</li>
              <li><strong>Parent & Guardian Information:</strong> Parent names, CNIC, residential addresses, emergency contact telephone numbers, and email addresses.</li>
              <li><strong>Financial & Fee Records:</strong> Tuition payment status, bank challan numbers, and fee voucher records.</li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-8 space-y-3">
            <h3 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
              <Eye className="w-5 h-5 text-royal" /> 2. Use of Information
            </h3>
            <p className="text-slate-600">
              All personal information collected is utilized strictly for educational and administrative purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
              <li>Maintaining official academic transcripts and registration with educational boards (BISE).</li>
              <li>Delivering critical school notices, emergency weather alerts, and progress reports via SMS or portal.</li>
              <li>Facilitating parent-teacher conferences and academic counseling sessions.</li>
              <li>Ensuring campus security, safety, and emergency medical response preparedness.</li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-8 space-y-3">
            <h3 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
              <Camera className="w-5 h-5 text-royal" /> 3. Photography and Media Consent
            </h3>
            <p className="text-slate-600">
              Photographs and video clips taken during official school activities, sports days, celebrations, exhibitions, and award ceremonies are showcased in our institutional gallery, annual magazines, and official social media pages to celebrate student achievements. Guardians who prefer their children's photographs not to be published may submit a written opt-out request to the Administration Office at the start of the session.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8 space-y-3">
            <h3 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
              <Lock className="w-5 h-5 text-royal" /> 4. Data Security and Confidentiality
            </h3>
            <p className="text-slate-600">
              We never sell, trade, or disclose student or parent personal data to commercial third parties or external marketing firms. Access to student records is restricted strictly to authorized teachers, principals, and administrative staff members.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-8 space-y-3">
            <h3 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
              <Phone className="w-5 h-5 text-gold" /> 5. Inquiries & Data Updates
            </h3>
            <p className="text-slate-600">
              If your contact number, address, or guardian information changes, please inform our registrar immediately to keep student emergency records up to date.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
              <p className="font-semibold text-navy">National English School Sathiala Administrative Office</p>
              <p className="text-slate-600 mt-1">Sathiala, District Narowal, Punjab, Pakistan</p>
              <p className="text-slate-600">Telephone: 0346-6206624 / 0310-7777265 &bull; Email: infones.scl@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
