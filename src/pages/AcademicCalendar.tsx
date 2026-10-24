import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Flag, 
  Award, 
  BookOpen, 
  FileText, 
  ChevronRight, 
  Download,
  Filter
} from 'lucide-react';
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

interface CalendarEvent {
  title: string;
  category: 'term' | 'exam' | 'holiday' | 'activity';
  date: string;
  month: string;
  desc: string;
  badge: string;
}

export function AcademicCalendar() {
  const [filter, setFilter] = useState<'all' | 'exam' | 'holiday' | 'activity'>('all');

  const events: CalendarEvent[] = [
    {
      title: "New Academic Session Commencement",
      category: "term",
      date: "April 01, 2025",
      month: "April 2025",
      desc: "Orientation classes begin for Nursery through Matriculation classes.",
      badge: "Term Start"
    },
    {
      title: "First Monthly Class Assessments",
      category: "exam",
      date: "May 10 – 16, 2025",
      month: "May 2025",
      desc: "Initial diagnostic tests and syllabus check across all wings.",
      badge: "Assessment"
    },
    {
      title: "Summer Vacation Period",
      category: "holiday",
      date: "June 01 – August 14, 2025",
      month: "Jun – Aug 2025",
      desc: "Summer recess; summer vacation homework packages distributed.",
      badge: "Vacation"
    },
    {
      title: "Independence Day Celebration & Reopening",
      category: "activity",
      date: "August 14, 2025",
      month: "August 2025",
      desc: "Patriotic flag hoisting, speech competitions, and campus cultural program.",
      badge: "Celebration"
    },
    {
      title: "Mid-Term Examinations",
      category: "exam",
      date: "October 15 – 27, 2025",
      month: "October 2025",
      desc: "Formal mid-term examination covering 50% course completion.",
      badge: "Major Exam"
    },
    {
      title: "Mid-Term Parent Teacher Meeting (PTM)",
      category: "activity",
      date: "November 08, 2025",
      month: "November 2025",
      desc: "Result card distribution and individual student progress counseling.",
      badge: "PTM"
    },
    {
      title: "Annual Sports & Physical Fitness Week",
      category: "activity",
      date: "December 05 – 10, 2025",
      month: "December 2025",
      desc: "Inter-house athletic meets, races, cricket and badminton tournaments.",
      badge: "Sports Week"
    },
    {
      title: "Winter Recess / Winter Holidays",
      category: "holiday",
      date: "December 24 – January 05, 2026",
      month: "Dec – Jan 2026",
      desc: "Winter vacation break as announced by Punjab Education Department.",
      badge: "Holiday"
    },
    {
      title: "Pre-Board Mock Examinations (Classes 9 & 10)",
      category: "exam",
      date: "January 18 – 28, 2026",
      month: "January 2026",
      desc: "BISE pattern practice examinations for board candidates.",
      badge: "Board Prep"
    },
    {
      title: "Kashmir Solidarity Day",
      category: "holiday",
      date: "February 05, 2026",
      month: "February 2026",
      desc: "National public holiday and solidarity observance.",
      badge: "National Holiday"
    },
    {
      title: "Final Annual Examinations (Classes 1–8)",
      category: "exam",
      date: "March 02 – 15, 2026",
      month: "March 2026",
      desc: "Comprehensive annual examinations for junior and middle wings.",
      badge: "Annual Exam"
    },
    {
      title: "Annual Prize Distribution & Result Day",
      category: "activity",
      date: "March 28, 2026",
      month: "March 2026",
      desc: "Grand annual ceremony celebrating position holders and academic excellence.",
      badge: "Ceremony"
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.category === filter);

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'exam':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'holiday':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'activity':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[38vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src={schoolHeroImg} 
            alt="National English School Sathiala Academic Calendar" 
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
              <CalendarIcon className="w-4 h-4" /> Academic Year 2025–2026
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Academic Calendar
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Plan your academic year with comprehensive dates for terms, examinations, holidays, and school functions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        {/* Filter bar and download */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs uppercase font-bold text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {[
              { id: 'all', label: 'All Dates' },
              { id: 'exam', label: 'Examinations' },
              { id: 'holiday', label: 'Holidays & Recess' },
              { id: 'activity', label: 'Events & Sports' },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === btn.id
                    ? 'bg-royal text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-navy hover:text-white text-slate-700 text-xs font-semibold transition-colors border border-slate-200"
          >
            <Download className="w-4 h-4" /> Print / Save Calendar
          </button>
        </div>

        {/* Calendar Timeline List */}
        <div className="space-y-4">
          {filteredEvents.map((evt, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center shrink-0 text-center">
                    <CalendarIcon className="w-5 h-5 text-royal mb-1" />
                    <span className="text-[10px] uppercase font-bold text-slate-500 leading-tight">
                      {evt.month.split(' ')[0]}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-serif text-lg font-bold text-navy">{evt.title}</h3>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(evt.category)}`}>
                        {evt.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">{evt.desc}</p>
                  </div>
                </div>

                <div className="text-right sm:shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <span className="font-mono text-xs sm:text-sm font-bold text-royal bg-royal/5 px-3 py-1.5 rounded-lg border border-royal/10 block sm:inline-block">
                    {evt.date}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Note on official Gazetted holidays */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 text-xs sm:text-sm text-slate-500 leading-relaxed">
          <p className="font-bold text-slate-700 mb-1">Please Note:</p>
          <p>
            Religious holidays (Eid-ul-Fitr, Eid-ul-Adha, Eid Milad-un-Nabi, Youm-e-Ashura) are subject to the sighting of the moon and official notification by the Government of the Punjab. Any emergency weather or flood-related holiday notifications will be circulated via SMS to all registered guardian mobile numbers.
          </p>
        </div>
      </div>
    </div>
  );
}
