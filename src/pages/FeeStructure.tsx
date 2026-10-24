import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  AlertTriangle, 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  CheckCircle, 
  HelpCircle,
  Building,
  Calculator,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SCHOOL_FEE_STRUCTURE, SCHOOL_CONTACT_INFO, SchoolFeeItem } from '../data/feeStructureConfig';
import schoolHeroImg from '../assets/images/school.png';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export function FeeStructure() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'monthly' | 'admission' | 'transport'>('all');
  
  // Interactive parent estimation calculator (using ONLY the exact transcribed amounts)
  const [calcGrade, setCalcGrade] = useState<'pg-2' | '3-6' | '7-10'>('pg-2');
  const [includeAdmission, setIncludeAdmission] = useState<boolean>(true);
  const [includeAnnual, setIncludeAnnual] = useState<boolean>(true);
  const [includeTransport, setIncludeTransport] = useState<boolean>(false);
  const [includeProspectus, setIncludeProspectus] = useState<boolean>(true);

  const getMonthlyAmount = () => {
    switch (calcGrade) {
      case 'pg-2': return 1400;
      case '3-6': return 1600;
      case '7-10': return 2000;
    }
  };

  const calculateEstimate = () => {
    const monthly = getMonthlyAmount();
    const admission = includeAdmission ? 2000 : 0;
    const annual = includeAnnual ? 2000 : 0;
    const transport = includeTransport ? 1600 : 0;
    const prospectus = includeProspectus ? 200 : 0;
    return {
      monthly,
      oneTimeOrAnnual: admission + annual + prospectus,
      transport,
      totalInitial: monthly + admission + annual + prospectus + transport
    };
  };

  const estimate = calculateEstimate();

  const filteredFees = selectedCategory === 'all'
    ? SCHOOL_FEE_STRUCTURE
    : selectedCategory === 'monthly'
      ? SCHOOL_FEE_STRUCTURE.filter(f => f.category === 'monthly')
      : selectedCategory === 'admission'
        ? SCHOOL_FEE_STRUCTURE.filter(f => f.category === 'admission' || f.category === 'annual' || f.category === 'prospectus')
        : SCHOOL_FEE_STRUCTURE.filter(f => f.category === 'transport');

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[42vh] min-h-[340px] w-full flex items-center justify-center overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={schoolHeroImg} 
            alt="National English School Sathiala Campus" 
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* School Motto pill badge using Light Blue & Amber accents */}
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-1 text-xs sm:text-sm font-semibold text-sky-200 border border-sky-400/40 mb-4 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>{SCHOOL_CONTACT_INFO.schoolName} &bull; {SCHOOL_CONTACT_INFO.motto}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
              Official Fee Structure
            </h1>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Transparent, parent-friendly schedule for National English School Sathiala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">
        
        {/* Verification Notice Banner - Yellow/Amber warning with Red notice */}
        <div className="mb-8 rounded-2xl bg-amber-50 border-2 border-amber-300 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-red-100 text-red-700 rounded-md">
                    Administrator Confirmation Required
                  </span>
                  <span className="text-xs text-slate-600 font-medium">Official Administrative Notice</span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {SCHOOL_CONTACT_INFO.statusNotice}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Please verify with the Principal office (<span className="font-bold text-slate-900">{SCHOOL_CONTACT_INFO.principalName}</span>) at{' '}
                  <a href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="font-bold text-navy hover:underline">
                    {SCHOOL_CONTACT_INFO.phonePrimary}
                  </a>{' '}
                  or{' '}
                  <a href={`tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="font-bold text-navy hover:underline">
                    {SCHOOL_CONTACT_INFO.phoneSecondary}
                  </a>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300 shadow-sm transition-all"
                title="Print Fee Schedule"
              >
                <Printer className="w-4 h-4 text-slate-600" /> Print Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">Filter:</span>
            {[
              { id: 'all', label: 'All Fee Items' },
              { id: 'monthly', label: 'Monthly Tuition' },
              { id: 'admission', label: 'Admission & Annual' },
              { id: 'transport', label: 'Transport' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-navy text-sky-200 border border-sky-400/40 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-sky-50/50 hover:text-sky-900 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            Showing <span className="font-bold text-slate-900">{filteredFees.length}</span> verified record{filteredFees.length === 1 ? '' : 's'}
          </div>
        </div>

        {/* Parent-Friendly Clean Fee Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider font-semibold border-b border-navy-dark border-t-2 border-t-sky-400">
                  <th scope="col" className="py-4 px-6">Fee Type</th>
                  <th scope="col" className="py-4 px-6">Applicable Classes</th>
                  <th scope="col" className="py-4 px-6 text-sky-300">Amount (PKR)</th>
                  <th scope="col" className="py-4 px-6">Payment Frequency & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredFees.map((fee) => {
                  return (
                    <tr 
                      key={fee.id}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      {/* Fee Type Column with Color Category Accent */}
                      <td className="py-4 px-6 font-semibold text-slate-900">
                        <div className="flex items-center gap-2.5">
                          {fee.accentColor === 'green' && (
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" title="Monthly Tuition"></span>
                          )}
                          {fee.accentColor === 'red' && (
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" title="Non-refundable Fee"></span>
                          )}
                          {fee.accentColor === 'yellow' && (
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" title="Frequency To Be Confirmed"></span>
                          )}
                          {fee.accentColor === 'blue' && (
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" title="Prospectus Fee"></span>
                          )}
                          <div>
                            <span className="font-bold text-navy">{fee.feeType}</span>
                            {fee.isNonRefundable && (
                              <span className="ml-2 inline-block text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 px-2 py-0.5 rounded border border-red-200">
                                Non-refundable
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Applicable Classes Column */}
                      <td className="py-4 px-6 text-slate-700 font-medium">
                        <span className="inline-block bg-slate-100 text-slate-800 text-xs px-2.5 py-1 rounded-md font-semibold">
                          {fee.applicableClasses}
                        </span>
                      </td>

                      {/* Amount in PKR Column (tabular numerals) */}
                      <td className="py-4 px-6">
                        <div className="font-mono tabular-nums text-base sm:text-lg font-bold text-navy">
                          {fee.formattedAmount}
                        </div>
                      </td>

                      {/* Payment Frequency or Notes Column */}
                      <td className="py-4 px-6">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            {fee.isConfirmedFrequency ? (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                <CheckCircle className="w-3 h-3 text-emerald-600" />
                                {fee.paymentFrequency}
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                                <HelpCircle className="w-3 h-3 text-amber-600" />
                                {fee.paymentFrequency}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-500 leading-normal max-w-sm">
                            {fee.notes}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer with Color Legend */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-semibold text-slate-800">Legend:</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Green: Monthly Tuition</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-600"></span> Red: Non-Refundable Charges</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Yellow: Pending Admin Confirmation</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Blue: Prospectus</span>
            </div>
            <div className="text-slate-500 font-medium">
              Currency: Pakistani Rupees (PKR)
            </div>
          </div>
        </div>

        {/* Parent Estimation Calculator (Strictly based on confirmed transcribed numbers) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-navy text-white">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Parent Fee Estimator
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Select your child's grade and applicable charges to preview exact fee items based on the transcribed schedule.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Student Grade Level:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'pg-2', label: 'Playgroup to Class 2', fee: 'PKR 1,400 / mo' },
                    { id: '3-6', label: 'Classes 3 to 6', fee: 'PKR 1,600 / mo' },
                    { id: '7-10', label: 'Classes 7 to 10', fee: 'PKR 2,000 / mo' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCalcGrade(tier.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        calcGrade === tier.id
                          ? 'border-sky-500 bg-sky-50/80 text-navy ring-2 ring-sky-300'
                          : 'border-slate-200 bg-white hover:border-sky-200 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{tier.label}</div>
                      <div className="font-mono text-xs font-semibold text-sky-800 mt-1">{tier.fee}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Applicable Additional Items:
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={includeAdmission} 
                        onChange={(e) => setIncludeAdmission(e.target.checked)}
                        className="w-4 h-4 text-navy rounded border-slate-300 focus:ring-navy"
                      />
                      <div>
                        <span className="text-sm font-semibold text-slate-800">Admission Fee (One-Time)</span>
                        <p className="text-xs text-red-600">Non-refundable</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-900">PKR 2,000</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={includeAnnual} 
                        onChange={(e) => setIncludeAnnual(e.target.checked)}
                        className="w-4 h-4 text-navy rounded border-slate-300 focus:ring-navy"
                      />
                      <div>
                        <span className="text-sm font-semibold text-slate-800">Annual Subscription Charges</span>
                        <p className="text-xs text-red-600">Non-refundable</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-900">PKR 2,000</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={includeProspectus} 
                        onChange={(e) => setIncludeProspectus(e.target.checked)}
                        className="w-4 h-4 text-navy rounded border-slate-300 focus:ring-navy"
                      />
                      <div>
                        <span className="text-sm font-semibold text-slate-800">Prospectus Fee</span>
                        <p className="text-xs text-slate-500">One time upon form pickup</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-900">PKR 200</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-amber-200 bg-amber-50/40 hover:bg-amber-50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={includeTransport} 
                        onChange={(e) => setIncludeTransport(e.target.checked)}
                        className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                      />
                      <div>
                        <span className="text-sm font-semibold text-slate-800">Transport Fee (Optional)</span>
                        <p className="text-xs text-amber-800 font-medium">Frequency to be confirmed by administration</p>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-900">PKR 1,600</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Estimation Summary Box */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800">
              <h3 className="font-serif text-lg font-bold text-amber-300 mb-4 pb-2 border-b border-slate-800">
                Breakdown Summary
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Monthly Tuition:</span>
                  <span className="font-mono font-bold text-emerald-400">PKR {estimate.monthly.toLocaleString()}</span>
                </div>

                {includeAdmission && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Admission Fee (One-time):</span>
                    <span className="font-mono">PKR 2,000</span>
                  </div>
                )}

                {includeAnnual && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Annual Subscription:</span>
                    <span className="font-mono">PKR 2,000</span>
                  </div>
                )}

                {includeProspectus && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Prospectus:</span>
                    <span className="font-mono">PKR 200</span>
                  </div>
                )}

                {includeTransport && (
                  <div className="flex justify-between items-center text-amber-300">
                    <span>Transport Fee (Freq. TBC):</span>
                    <span className="font-mono">PKR 1,600</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Total Estimated Amount:</div>
                      <div className="text-[11px] text-amber-300/80">Pending admin confirmation</div>
                    </div>
                    <div className="font-mono text-2xl font-bold text-amber-400">
                      PKR {estimate.totalInitial.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <p>
                  * Strictly computed from the transcribed photograph figures. No additional fees or discounts are applied.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Administration Contact & Verification Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: Administrator Contact */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-50 text-navy">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-navy">
                  Principal & Administration
                </h3>
                <p className="text-xs text-slate-500">Official inquiries & fee confirmation</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Principal:</span>
                <span className="font-bold text-navy">{SCHOOL_CONTACT_INFO.principalName}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Primary Phone:</span>
                <a href={`tel:${SCHOOL_CONTACT_INFO.phonePrimary.replace(/[^0-9]/g, '')}`} className="font-mono font-bold text-emerald-700 hover:underline">
                  {SCHOOL_CONTACT_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500">Secondary Phone:</span>
                <a href={`tel:${SCHOOL_CONTACT_INFO.phoneSecondary.replace(/[^0-9]/g, '')}`} className="font-mono font-bold text-emerald-700 hover:underline">
                  {SCHOOL_CONTACT_INFO.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Official Email:</span>
                <a href={`mailto:${SCHOOL_CONTACT_INFO.email}`} className="font-mono text-xs font-semibold text-navy hover:underline">
                  {SCHOOL_CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Campus Location */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-navy">
                  Campus Address
                </h3>
                <p className="text-xs text-slate-500">In-person visits & admissions office</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2 text-slate-700 leading-relaxed">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">{SCHOOL_CONTACT_INFO.schoolName}</p>
                  <p className="text-slate-600">{SCHOOL_CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-navy hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  Visit Campus Office
                </Link>
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold transition-colors"
                >
                  Admissions Guide
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
