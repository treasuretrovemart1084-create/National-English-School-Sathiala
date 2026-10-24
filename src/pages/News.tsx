import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Tag, Clock, Megaphone, Trophy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import newsHeroImg from '../assets/images/school.png';
import admissionsImg from '../assets/images/school.png';
import exhibitionImg from '../assets/images/school_view_2.jpeg';
import sportsImg from '../assets/images/school_view_4.jpeg';
import ptmImg from '../assets/images/school_view_3.jpeg';
import culturalImg from '../assets/images/school_view_7.jpeg';
import vacationImg from '../assets/images/school_view_8.jpeg';

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

export function News() {
  return (
    <div className="flex flex-col w-full bg-white">
      <NewsHero />
      <NewsContent />
    </div>
  );
}

function NewsHero() {
  return (
    <section className="relative h-[40vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src={newsHeroImg} 
          alt="News and Events at National English School Sathiala" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-light backdrop-blur-md border border-white/10 mb-4 uppercase tracking-widest">
            Stay Updated
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            News & Events
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            The latest announcements, upcoming activities, and achievements from National English School Sathiala.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function NewsContent() {
  const newsItems = [
    {
      category: "Announcements",
      icon: Megaphone,
      title: "Admissions Open for Academic Year",
      date: "August 15, 2024",
      time: "",
      desc: "Details regarding the admission process, deadlines, and requirements for the upcoming academic session.",
      color: "text-royal bg-royal/10",
      image: admissionsImg
    },
    {
      category: "Upcoming Events",
      icon: Calendar,
      title: "Annual Science Exhibition",
      date: "September 10, 2024",
      time: "09:00 AM - 02:00 PM",
      desc: "Information about the upcoming science fair where students will showcase their innovative projects and experiments.",
      color: "text-gold-dark bg-gold/10",
      image: exhibitionImg
    },
    {
      category: "Sports Events",
      icon: Trophy,
      title: "Inter-School Sports Tournament",
      date: "October 5, 2024",
      time: "",
      desc: "Summary of the upcoming sports tournament, participating teams, and schedule of events.",
      color: "text-green-700 bg-green-100",
      image: sportsImg
    },
    {
      category: "Academic Events",
      icon: BookOpen,
      title: "Parent-Teacher Meeting (PTM)",
      date: "November 20, 2024",
      time: "08:30 AM - 01:30 PM",
      desc: "Schedule and details for the first term Parent-Teacher Meeting to discuss student progress.",
      color: "text-purple-700 bg-purple-100",
      image: ptmImg
    },
    {
      category: "School Activities",
      icon: Tag,
      title: "Cultural Day Celebrations",
      date: "December 12, 2024",
      time: "",
      desc: "Highlights of the upcoming cultural day, including performances, dress codes, and activities.",
      color: "text-orange-700 bg-orange-100",
      image: culturalImg
    },
    {
      category: "Important Notices",
      icon: Megaphone,
      title: "Winter Vacation Schedule",
      date: "December 20, 2024",
      time: "",
      desc: "Official announcement regarding the dates for winter vacations and school reopening schedule.",
      color: "text-red-700 bg-red-100",
      image: vacationImg
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                {/* News & Event Card Image */}
                <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col">
                  {/* Tags */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold ${item.color}`}>
                      <item.icon className="w-3.5 h-3.5 mr-1.5" />
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy mb-4 group-hover:text-royal transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-col gap-2 mb-4 text-sm text-slate-500 font-medium">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gold" />
                      {item.date}
                    </div>
                    {item.time && (
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gold" />
                        {item.time}
                      </div>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <a href="#" className="inline-flex items-center text-sm font-bold text-royal hover:text-navy transition-colors">
                      Read More
                      <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
