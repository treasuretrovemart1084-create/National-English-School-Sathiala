import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle, UserCheck, ExternalLink, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactHeroImg from '../assets/images/school.png';
import { SCHOOL_CONTACT_INFO } from '../data/feeStructureConfig';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
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

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="flex flex-col w-full bg-white">
      <ContactHero />
      <ContactInfoSection formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
      <MapAndDirectionsSection />
      <ContactCTA />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="relative h-[42vh] min-h-[340px] w-full flex items-center justify-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 z-0">
        <img 
          src={contactHeroImg} 
          alt={`Contact ${SCHOOL_CONTACT_INFO.schoolName}`} 
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
            Contact Administration
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            Get in touch with National English School Sathiala for admissions, fee schedule verification, and campus inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfoSection({ formSubmitted, setFormSubmitted }: { formSubmitted: boolean, setFormSubmitted: (v: boolean) => void }) {
  return (
    <section className="py-20 bg-white relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-5">
            <FadeIn>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-1 inline-block">Official Details</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy mb-6">School Office</h2>
            </FadeIn>

            {/* Principal Card - Light Blue Theme */}
            <FadeIn delay={0.05}>
              <div className="flex items-start p-5 bg-sky-50/70 rounded-2xl border border-sky-200 hover:border-sky-400 shadow-2xs transition-all">
                <div className="h-11 w-11 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 mr-4 shadow-xs">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded mb-1 border border-sky-300/60">
                    School Leadership
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy">School Principal</h3>
                  <p className="text-sm font-semibold text-slate-800">{SCHOOL_CONTACT_INFO.principalName}</p>
                  <p className="text-xs text-slate-600 mt-0.5">Available for student enrollment meetings and academic counseling in Sathiala.</p>
                </div>
              </div>
            </FadeIn>
            
            {/* Phone numbers */}
            <FadeIn delay={0.1}>
              <div className="flex items-start p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all">
                <div className="h-11 w-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy mb-1">Phone Numbers</h3>
                  <div className="flex flex-col gap-1">
                    <a href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="font-mono text-sm font-bold text-emerald-700 hover:underline">
                      {SCHOOL_CONTACT_INFO.phonePrimary} (Primary)
                    </a>
                    <a href={`tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="font-mono text-sm font-bold text-emerald-700 hover:underline">
                      {SCHOOL_CONTACT_INFO.phoneSecondary} (Administration)
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Email */}
            <FadeIn delay={0.2}>
              <div className="flex items-start p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-amber-500 transition-all">
                <div className="h-11 w-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy mb-1">Official Email</h3>
                  <a href={`mailto:${SCHOOL_CONTACT_INFO.email}`} className="text-sm font-mono text-slate-800 hover:text-navy hover:underline break-all">
                    {SCHOOL_CONTACT_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Direct inbox for admission queries and document submissions.</p>
                </div>
              </div>
            </FadeIn>

            {/* Address */}
            <FadeIn delay={0.3}>
              <div className="flex items-start p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-red-500 transition-all">
                <div className="h-11 w-11 rounded-xl bg-red-100 text-red-800 flex items-center justify-center shrink-0 mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy mb-1">School Campus</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    National English School<br />
                    {SCHOOL_CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Timings */}
            <FadeIn delay={0.4}>
              <div className="flex items-start p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="h-11 w-11 rounded-xl bg-blue-100 text-navy flex items-center justify-center shrink-0 mr-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-navy mb-1">Office Hours</h3>
                  <p className="text-xs sm:text-sm text-slate-700">
                    Monday &ndash; Thursday &amp; Saturday: 8:00 AM &ndash; 2:00 PM<br />
                    Friday: 8:00 AM &ndash; 12:30 PM
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Message Form */}
          <FadeIn delay={0.2} className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-navy text-amber-300 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">Send an Inquiry</h3>
                  <p className="text-xs text-slate-500">We respond to parent questions promptly.</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900 mb-1">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you for reaching out to National English School Sathiala. Our administration team will contact you shortly via phone or email.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-4 py-2 text-xs font-bold rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700">Student / Parent Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        placeholder="e.g. Abid Hussain" 
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        placeholder="03XXXXXXXXX" 
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all font-mono" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="parent@example.com" 
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="grade" className="text-xs font-bold uppercase tracking-wider text-slate-700">Interested Grade</label>
                      <select 
                        id="grade"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all"
                      >
                        <option value="">Select Class</option>
                        <option value="playgroup">Playgroup / Nursery / Prep (PKR 1,400/mo)</option>
                        <option value="primary1-2">Class 1 &ndash; 2 (PKR 1,400/mo)</option>
                        <option value="primary3-6">Class 3 &ndash; 6 (PKR 1,600/mo)</option>
                        <option value="middle7-10">Class 7 &ndash; 10 (PKR 2,000/mo)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Your Inquiry Details *</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      required
                      placeholder="Please ask any question regarding admissions, fee schedule, transport facility, or campus visit..." 
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all resize-none" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl bg-navy text-white font-bold text-sm hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    Submit Message to School Office
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MapAndDirectionsSection() {
  const googleMapsUrl = "https://www.google.com/maps/place/NES+National+English+School+%D9%86%DB%8C%D8%B4%D9%86%D9%84+%D8%A7%D9%86%DA%AF%D9%84%D8%B4+%D8%B3%DA%A9%D9%88%D9%84%E2%80%AD/@32.2646417,74.9754334,17z/";

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            Official Campus Location
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
            Find Us on Google Maps
          </h2>
          <p className="text-slate-600 text-base">
            National English School (نیشنل انگلش سکول) is located in Sathiala, District Narowal, Punjab.
          </p>
        </FadeIn>

        {/* Interactive Google Map Embed Card */}
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden p-3 sm:p-5">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] min-h-[380px] max-h-[520px] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.756183342005!2d74.9754334!3d32.26464169999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c010cabfc0b4f%3A0xa7e4f691033c74a7!2zTkVTIE5hdGlvbmFsIEVuZ2xpc2ggU2Nob29sINmG24zYtNmG2YQg2KfZhtqv2YTYtCDYs9qp2YjZhA!5e0!3m2!1sen!2s!4v1793026130587!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                title="NES National English School Location Map"
                className="w-full h-full"
              />
            </div>

            {/* Information Bar beneath Map */}
            <div className="mt-5 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy">
                    NES National English School
                  </h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Sathiala
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  {SCHOOL_CONTACT_INFO.address} &bull; Coordinates: 32.2646° N, 74.9754° E
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto flex-wrap sm:flex-nowrap">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white font-bold text-xs sm:text-sm hover:bg-sky-800 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <a
                  href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Campus</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-16 bg-navy text-white text-center px-4 border-t border-navy-light">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
          Your Future Begins Here
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mb-6">
          Connect with Sir Abdul Salam and the faculty team at National English School Sathiala.
        </p>
        <Link
          to="/admissions"
          className="inline-flex rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 px-7 py-3 text-sm font-bold transition-all shadow-md"
        >
          Begin Admission Process
        </Link>
      </div>
    </section>
  );
}
