import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import { SCHOOL_CONTACT_INFO } from '../data/feeStructureConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 relative border-t border-neutral-800 overflow-hidden">
      {/* Decorative Brand Accent Line - Light Blue, Gold, and Emerald */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400" />
      {/* Subtle light blue radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-16">
          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3.5 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1 -ml-1 group">
              <div className="h-16 w-16 shrink-0 flex items-center justify-center p-1.5 rounded-2xl bg-white shadow-lg ring-2 ring-white/20 group-hover:ring-sky-400 transition-all duration-200">
                <img 
                  src={logoImg} 
                  alt="National English School Sathiala Official Crest" 
                  className="h-full w-full object-contain filter drop-shadow-xs" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight text-white group-hover:text-sky-300 transition-colors">
                  National English School
                </span>
                <span className="text-xs font-semibold tracking-wider text-sky-300 uppercase mt-1 flex items-center gap-1.5 flex-wrap">
                  <span>Sathiala</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-[11px] text-amber-300 font-bold normal-case tracking-normal">Your Future Begins Here</span>
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-amber-300 italic font-serif">
              {SCHOOL_CONTACT_INFO.motto}
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Building academic discipline, character, and lifelong leadership in students from Playgroup to Matric.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-amber-300 transition-colors focus:outline-none">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-bold text-white border-b border-neutral-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Academics', path: '/academics' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Fee Structure', path: '/fee-structure' },
                { name: 'Faculty & Staff', path: '/faculty' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-sm text-slate-300 hover:text-amber-300 transition-colors py-0.5">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-amber-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals & Information */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-bold text-white border-b border-neutral-800 pb-2">Information & Portals</h3>
            <ul className="space-y-3">
              {[
                { name: 'Fee Structure (PKR Schedule)', path: '/fee-structure' },
                { name: 'Academic Calendar', path: '/academic-calendar' },
                { name: 'Campus Facilities', path: '/facilities' },
                { name: 'School Photo Gallery', path: '/gallery' },
                { name: 'Student Portal', path: '/student-portal' },
                { name: 'Parent Portal', path: '/parent-portal' },
                { name: 'Privacy Policy', path: '/privacy-policy' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="group flex items-center text-sm text-slate-300 hover:text-amber-300 transition-colors py-0.5">
                    <ArrowRight className="mr-2 h-3.5 w-3.5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-amber-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="mb-6 font-serif text-lg font-bold text-white border-b border-neutral-800 pb-2">Contact & Campus</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-red-400 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-white block font-medium">National English School</strong>
                  <a 
                    href="https://www.google.com/maps/place/NES+National+English+School+%D9%86%DB%8C%D8%B4%D9%86%D9%84+%D8%A7%D9%86%DA%AF%D9%84%D8%B4+%D8%B3%DA%A9%D9%88%D9%84%E2%80%AD/@32.2646417,74.9754334,17z/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-amber-300 transition-colors inline-block"
                  >
                    {SCHOOL_CONTACT_INFO.address}
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-emerald-400 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="hover:text-white font-mono transition-colors">
                    {SCHOOL_CONTACT_INFO.phonePrimary}
                  </a>
                  <a href={`tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="hover:text-white font-mono transition-colors">
                    {SCHOOL_CONTACT_INFO.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
                <a href={`mailto:${SCHOOL_CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all font-mono text-xs">
                  {SCHOOL_CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-700/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {currentYear} {SCHOOL_CONTACT_INFO.schoolName}. All rights reserved. &bull; Principal: {SCHOOL_CONTACT_INFO.principalName}
          </p>
          <div className="flex gap-6">
            <Link to="/fee-structure" className="hover:text-white transition-colors">Fee Policy</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Office</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
