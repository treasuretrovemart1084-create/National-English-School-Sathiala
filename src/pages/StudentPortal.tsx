import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  FileText, 
  Award, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Lock, 
  User, 
  ArrowRight,
  Download,
  Bell
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

export function StudentPortal() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim() || !password.trim()) {
      setLoginError('Please enter both Student Roll No / ID and password.');
      return;
    }
    // Demo login simulation
    setLoginError('');
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[38vh] min-h-[320px] w-full flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src={schoolHeroImg} 
            alt="National English School Sathiala Student Portal" 
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
              <GraduationCap className="w-4 h-4" /> Academic Hub
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Student Portal
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Access your digital homework diary, examination timetables, term results, and learning syllabi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        {!isLoggedIn ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            {/* Login Card */}
            <FadeIn className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200/80 shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy">Student Sign In</h2>
                  <p className="text-xs sm:text-sm text-slate-500">Sign in using your school-assigned roll number</p>
                </div>
              </div>

              {loginError && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Student Roll No / ID
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text"
                      placeholder="e.g. HSPS-2025-1042"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Password / PIN
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300 text-royal focus:ring-royal" defaultChecked />
                    Remember on this device
                  </label>
                  <a href="#help" onClick={() => alert("Please contact the school office at 0346-6206624 to reset your student portal PIN.")} className="text-royal hover:underline font-medium">
                    Forgot PIN?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-royal hover:bg-navy text-white font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Access Student Portal <ArrowRight className="w-4 h-4" />
                </button>

                <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-500 text-center border border-slate-100">
                  Quick demo: Enter any Roll Number (e.g. <span className="font-mono text-royal font-semibold">HSPS-101</span>) and any PIN to preview student dashboard.
                </div>
              </form>
            </FadeIn>

            {/* Quick Information & Support */}
            <FadeIn delay={0.1} className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-gold" /> Noticeboard & Updates
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-amber-900">
                    <span className="font-semibold block mb-0.5">Mid-Term Date Sheet 2025</span>
                    Mid-term assessments begin next Monday. Prepare according to syllabus.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-700">
                    <span className="font-semibold block mb-0.5">Science Fair Registration Open</span>
                    Submit project proposals to your respective Science instructors by Friday.
                  </div>
                </div>
              </div>

              <div className="bg-royal text-white rounded-2xl p-6 shadow-md">
                <h3 className="font-serif text-lg font-bold mb-2">Need Login Assistance?</h3>
                <p className="text-xs sm:text-sm text-slate-200 mb-4 leading-relaxed">
                  If you haven't received your Roll Number card or require password assistance, visit the Admin Office during campus hours.
                </p>
                <div className="text-xs bg-white/10 rounded-xl p-3 border border-white/20">
                  <p className="font-semibold text-gold-light">National English School Administration</p>
                  <p className="text-slate-200 mt-1">Phone: 0346-6206624 / 0310-7777265</p>
                  <p className="text-slate-200">Email: infones.scl@gmail.com</p>
                </div>
              </div>
            </FadeIn>
          </div>
        ) : (
          /* Logged In Dashboard View */
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-royal font-semibold">Active Session</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">Welcome, Student ({studentId || 'NES-101'})</h2>
                <p className="text-sm text-slate-500 mt-1">National English School Sathiala &bull; Academic Session 2026</p>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Sign Out
              </button>
            </div>

            {/* Quick Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Attendance", value: "96%", desc: "Term Attendance", icon: CheckCircle, color: "text-emerald-600 bg-emerald-50" },
                { title: "Current Term", value: "Term 1", desc: "Mid-Term Examinations", icon: Calendar, color: "text-royal bg-royal/10" },
                { title: "Homework Tasks", value: "3 Due", desc: "English, Science, Math", icon: BookOpen, color: "text-amber-600 bg-amber-50" },
                { title: "Last Term Rank", value: "Grade A+", desc: "Top 5% in Class", icon: Award, color: "text-purple-600 bg-purple-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{stat.title}</h4>
                  <div className="text-2xl font-bold text-navy mt-1">{stat.value}</div>
                  <p className="text-xs text-slate-500 mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Timetable & Downloads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-royal" /> Daily Class Schedule
                </h3>
                <div className="space-y-3">
                  {[
                    { time: "08:00 AM - 08:45 AM", subject: "Mathematics", teacher: "Faculty Dept." },
                    { time: "08:45 AM - 09:30 AM", subject: "English Language & Literature", teacher: "Faculty Dept." },
                    { time: "09:30 AM - 10:15 AM", subject: "Physics / General Science", teacher: "Science Lab Block" },
                    { time: "10:15 AM - 10:45 AM", subject: "Morning Break / Refreshment", teacher: "School Grounds" },
                    { time: "10:45 AM - 11:30 AM", subject: "Urdu Literature & Composition", teacher: "Faculty Dept." },
                    { time: "11:30 AM - 12:15 PM", subject: "Islamic Studies / Pak Studies", teacher: "Faculty Dept." },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-navy block">{row.subject}</span>
                        <span className="text-slate-500 text-xs">{row.teacher}</span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-royal bg-white px-2.5 py-1 rounded-md border border-slate-200">
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-gold" /> Syllabus & Resources
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "2025-2026 Academic Syllabus Book", size: "2.4 MB PDF" },
                    { name: "Mid-Term Examination Date Sheet", size: "480 KB PDF" },
                    { name: "Science Lab Practical Guidelines & Safety Rules", size: "1.1 MB PDF" },
                    { name: "School Code of Conduct & Ethics Handbook", size: "890 KB PDF" },
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-royal transition-all group">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-royal shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-navy block group-hover:text-royal transition-colors">{doc.name}</span>
                          <span className="text-xs text-slate-400">{doc.size}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => alert(`Downloading ${doc.name}`)}
                        className="p-2 rounded-lg bg-slate-100 group-hover:bg-royal group-hover:text-white text-slate-600 transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
