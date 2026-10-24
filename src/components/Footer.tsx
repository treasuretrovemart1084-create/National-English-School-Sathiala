import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.jpeg';
import { SCHOOL_CONTACT_INFO } from '../data/feeStructureConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 relative border-t border-navy-light overflow-hidden">
      {/* Decorative Brand Accent Line - Light Blue, Gold, and Emerald */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400" />
      {/* Subtle light blue radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:gap-16">
          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1 -ml-1">
              <img 
                src={logoImg} 
                alt="National English School Sathiala Logo" 
                className="h-14 w-14 object-contain shrink-0 rounded-full bg-white shadow-md p-0.5" 
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none text-white">
                  National English School
                </span>
                <span className="text-xs font-semibold tracking-widest text-sky-300 uppercase mt-1">
                  Sathiala
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 italic font-serif">
              "{SCHOOL_CONTACT_INFO.motto}"
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
            <h3 className="mb-6 font-serif text-lg font-bold text-white border-b border-navy-light pb-2">Quick Links</h3>
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
            <h3 className="mb-6 font-serif text-lg font-bold text-white border-b border-navy-light pb-2">Information & Portals</h3>
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
            <h3 className="mb-6 font-serif text-lg font-bold text-white border-b border-navy-light pb-2">Contact & Campus</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-red-400 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-white block font-medium">National English School</strong>
                  {SCHOOL_CONTACT_INFO.address}
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
