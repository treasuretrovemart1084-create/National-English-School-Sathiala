import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Calendar, 
  CreditCard, 
  FileCheck, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  Download
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

export function ParentPortal() {
  const [phone, setPhone] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || !studentId.trim()) {
      setLoginError('Please enter both your registered Phone number and Child Student ID.');
      return;
    }
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
            alt="National English School Sathiala Parent Portal" 
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
              <Users className="w-4 h-4" /> Parent Engagement
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              Parent Portal
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Track student attendance, academic report cards, fee vouchers, and connect with faculty members.
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
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy">Parent Verification</h2>
                  <p className="text-xs sm:text-sm text-slate-500">Sign in with your registered contact number</p>
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
                    Registered Mobile Number
                  </label>
                  <div className="relative">
                    <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="tel"
                      placeholder="e.g. 0300-1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Child's Student Roll No / ID
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text"
                      placeholder="e.g. HSPS-2025-1042"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300 text-gold focus:ring-gold" defaultChecked />
                    Keep me logged in
                  </label>
                  <Link to="/contact" className="text-royal hover:underline font-medium">
                    Help with contact number?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-navy hover:bg-royal text-white font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Verify & Enter Portal <ArrowRight className="w-4 h-4 text-gold-light" />
                </button>

                <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-500 text-center border border-slate-100">
                  Quick demo: Enter any Mobile Number and Roll Number to preview parent dashboard.
                </div>
              </form>
            </FadeIn>

            {/* Parent Information Services */}
            <FadeIn delay={0.1} className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-royal" /> PTM & Communication
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <p>
                    Regular Parent-Teacher Meetings are held after each term assessment to discuss your child's moral, academic, and personal growth.
                  </p>
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-navy font-medium">
                    Upcoming PTM: Saturday, 10:00 AM – 01:00 PM in Main Auditorium
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gold" /> Fee Vouchers Online
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  Monthly tuition vouchers are issued between the 1st and 5th of each month. Check voucher status or download copies inside the portal.
                </p>
                <Link to="/fee-structure" className="inline-flex items-center text-xs font-bold text-royal hover:text-navy">
                  View Full School Fee Schedule &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        ) : (
          /* Parent Dashboard View */
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-gold font-bold">Guardian Dashboard</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy">Student: Muhammad Ali ({studentId || 'NES-101'})</h2>
                <p className="text-sm text-slate-500 mt-1">Class 7 &bull; National English School Sathiala &bull; Principal: Sir Abdul Salam</p>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Sign Out
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Monthly Attendance", value: "98.2%", status: "Present: 22/22 Days", icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50" },
                { title: "Fee Status", value: "Paid", status: "Current Month Cleared", icon: CreditCard, color: "text-royal bg-royal/10" },
                { title: "Academic Term", value: "Top 3", status: "Class Rank", icon: FileCheck, color: "text-amber-600 bg-amber-50" },
                { title: "Next PTM", value: "15 Oct", status: "10:00 AM Meeting", icon: Calendar, color: "text-indigo-600 bg-indigo-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/70 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{stat.title}</h4>
                  <div className="text-2xl font-bold text-navy mt-1">{stat.value}</div>
                  <p className="text-xs text-slate-500 mt-1">{stat.status}</p>
                </div>
              ))}
            </div>

            {/* Recent Vouchers & Term Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gold" /> Fee Vouchers History
                </h3>
                <div className="space-y-3">
                  {[
                    { month: "Current Month Tuition Voucher", status: "Paid", date: "Paid on 03rd", amount: "PKR Confirmed" },
                    { month: "Previous Month Tuition Voucher", status: "Paid", date: "Paid on 04th", amount: "PKR Confirmed" },
                    { month: "Annual Examination Charges", status: "Paid", date: "Paid on 10th", amount: "PKR Confirmed" },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                      <div>
                        <span className="font-bold text-navy block">{row.month}</span>
                        <span className="text-slate-500 text-xs">{row.date} &bull; {row.amount}</span>
                      </div>
                      <span className="font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs">
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-royal" /> Progress Reports & Vouchers
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "First Term Progress Report Card", size: "Official PDF" },
                    { name: "Monthly Attendance & Conduct Summary", size: "Official PDF" },
                    { name: "Fee Payment Challan Copy", size: "Bank Copy PDF" },
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-gold transition-all group">
                      <div>
                        <span className="text-sm font-semibold text-navy block group-hover:text-gold-dark transition-colors">{doc.name}</span>
                        <span className="text-xs text-slate-400">{doc.size}</span>
                      </div>
                      <button 
                        onClick={() => alert(`Downloading ${doc.name}`)}
                        className="p-2 rounded-lg bg-slate-100 group-hover:bg-navy group-hover:text-white text-slate-600 transition-colors"
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
