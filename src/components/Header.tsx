import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import { SCHOOL_CONTACT_INFO } from '../data/feeStructureConfig';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Fee Structure', href: '/fee-structure' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const contactDetails = [
    {
      id: 'phone-primary',
      href: `tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`,
      icon: Phone,
      iconColor: 'text-emerald-400',
      label: SCHOOL_CONTACT_INFO.phonePrimary,
    },
    {
      id: 'phone-secondary',
      href: `tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`,
      icon: Phone,
      iconColor: 'text-sky-400',
      label: SCHOOL_CONTACT_INFO.phoneSecondary,
    },
    {
      id: 'email',
      href: `mailto:${SCHOOL_CONTACT_INFO.email}`,
      icon: Mail,
      iconColor: 'text-amber-300',
      label: SCHOOL_CONTACT_INFO.email,
    },
  ];

  const [activeContactIndex, setActiveContactIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveContactIndex((prev) => (prev + 1) % contactDetails.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [contactDetails.length]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
      {/* Decorative Brand Accent Line - Light Blue, Gold, and Emerald */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-400 via-amber-400 to-sky-400" />

      {/* Top Bar - Black Bar with Light Blue, Green & Yellow Accents */}
      <div className="flex items-center justify-between px-3 sm:px-6 py-1.5 sm:py-2 bg-black text-white text-xs font-medium tracking-wide border-b border-neutral-800">
        {/* Mobile Contact Cycler: Continuously transitions between Phone 1, Phone 2, and Email */}
        <div className="sm:hidden relative h-5 flex-1 max-w-[215px] overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.a
              key={contactDetails[activeContactIndex].id}
              href={contactDetails[activeContactIndex].href}
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -7 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center gap-1.5 hover:text-sky-300 focus:outline-none rounded-sm transition-colors text-[11px] font-medium tracking-wide truncate"
            >
              {(() => {
                const IconComponent = contactDetails[activeContactIndex].icon;
                return <IconComponent className={`w-3.5 h-3.5 shrink-0 ${contactDetails[activeContactIndex].iconColor}`} />;
              })()}
              <span className="truncate">{contactDetails[activeContactIndex].label}</span>
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Desktop / Tablet: Displays Phone 1, Phone 2, and Email side-by-side */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-5">
          <a 
            href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} 
            className="flex items-center gap-1.5 hover:text-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300 rounded-sm transition-colors text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 
            <span>{SCHOOL_CONTACT_INFO.phonePrimary}</span>
          </a>
          <a 
            href={`tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} 
            className="flex items-center gap-1.5 hover:text-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300 rounded-sm transition-colors text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" /> 
            <span>{SCHOOL_CONTACT_INFO.phoneSecondary}</span>
          </a>
          <a 
            href={`mailto:${SCHOOL_CONTACT_INFO.email}`} 
            className="hidden md:flex items-center gap-1.5 hover:text-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300 rounded-sm transition-colors text-xs"
          >
            <Mail className="w-3.5 h-3.5 text-amber-300 shrink-0" /> 
            <span>{SCHOOL_CONTACT_INFO.email}</span>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-slate-300 shrink-0">
          <div className="flex items-center gap-1 text-slate-200">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400 shrink-0" />
            <span>Sathiala</span>
          </div>
          <div className="h-3 w-px bg-slate-700"></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-sky-300 transition-colors"><Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-300 transition-colors"><Twitter className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-sky-300 transition-colors"><Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Area */}
        <Link to="/" aria-label="National English School Sathiala Home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1 -ml-1">
          <div className="h-13 w-13 sm:h-15 sm:w-15 shrink-0 flex items-center justify-center p-1 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 group-hover:ring-sky-300 transition-all duration-200">
            <img 
              src={logoImg} 
              alt="National English School Sathiala Crest" 
              className="h-full w-full object-contain filter drop-shadow-xs" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold leading-none text-navy group-hover:text-royal transition-colors">
              National English School
            </span>
            <span className="text-[0.68rem] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase mt-1">
              Sathiala
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-3 xl:gap-5" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold whitespace-nowrap inline-block hover:text-navy transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-navy rounded-sm px-1 py-0.5 ${
                location.pathname === link.href ? 'text-navy font-bold' : 'text-slate-600'
              }`}
              aria-current={location.pathname === link.href ? 'page' : undefined}
            >
              {link.name}
              {link.href === '/fee-structure' && (
                <span className="ml-1 text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded">
                  New
                </span>
              )}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 transition-all duration-300 ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <Link
            to="/fee-structure"
            className="inline-flex items-center justify-center rounded-md border border-sky-300 bg-sky-50/50 px-3.5 py-2 text-xs font-bold text-sky-900 hover:bg-sky-100 transition-colors shadow-2xs"
          >
            Fee Structure
          </Link>
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center rounded-md bg-navy hover:bg-sky-700 px-4 py-2 text-xs font-bold text-white shadow-sm whitespace-nowrap border border-sky-400/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
          >
            Apply for Admission
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center xl:hidden gap-3">
          <Link
            to="/admissions"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-navy px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-navy-light transition-all duration-200"
          >
            Apply Now
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
            <span className="ml-1 font-bold text-xs uppercase tracking-wide">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden overflow-hidden border-t border-slate-100 bg-white shadow-lg"
          >
            <div className="space-y-1 px-4 pb-6 pt-4">
              <div className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</div>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-slate-50 hover:text-navy transition-colors ${
                    location.pathname === link.href ? 'text-navy bg-slate-50 font-bold' : 'text-slate-700'
                  }`}
                  aria-current={location.pathname === link.href ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {link.href === '/fee-structure' && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                      Fee Table
                    </span>
                  )}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 px-3">
                <Link
                  to="/admissions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-md bg-navy px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-navy-light transition-colors"
                >
                  Apply for Admission
                </Link>
                <div className="text-xs text-slate-500 text-center mt-2">
                  Call: <a href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary}`} className="font-bold text-slate-700">{SCHOOL_CONTACT_INFO.phonePrimary}</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
