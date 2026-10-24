import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Target, 
  Lightbulb, 
  GraduationCap, 
  PenTool, 
  Award, 
  Activity, 
  Laptop, 
  LifeBuoy, 
  ArrowRight,
  CheckCircle2,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import academicsHeroImg from '../assets/images/school.png';
import curriculumImg from '../assets/images/school_view_14.jpeg';
import coCurricularImg from '../assets/images/school_view_15.jpeg';

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

export function Academics() {
  return (
    <div className="flex flex-col w-full bg-white">
      <AcademicsHero />
      <OverviewSection />
      <GradeLevelsSection />
      <CurriculumSection />
      <AssessmentSection />
      <CoCurricularSection />
      <TechAndSupportSection />
      <AcademicsCTA />
    </div>
  );
}

function AcademicsHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0 z-0">
        <img 
          src={academicsHeroImg} 
          alt="Academics at National English School Sathiala" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500/20 px-4 py-1.5 text-xs font-semibold text-sky-200 backdrop-blur-md border border-sky-400/40 mb-4 uppercase tracking-widest">
            Academics & Curriculum
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            Nurturing Intellect & Character
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Providing a comprehensive, holistic education that prepares students for the challenges of tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <h2 className="font-serif text-sm font-bold tracking-widest text-gold uppercase mb-3">Academic Overview</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">
              Our Educational Approach
            </h3>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                At National English School Sathiala, we believe that education is not merely the acquisition of facts, but the training of the mind to think. Our academic framework is designed to foster critical thinking, creativity, and a lifelong love for learning.
              </p>
              <p>
                We blend traditional moral values with modern pedagogical techniques, ensuring that our students develop both strong character and academic brilliance. Our student-centered approach focuses on identifying and nurturing the unique potential within every child.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Goal-Oriented", desc: "Setting clear milestones for academic success." },
                { icon: Lightbulb, title: "Critical Thinking", desc: "Encouraging analytical and independent thought." },
                { icon: BookOpen, title: "Holistic Learning", desc: "Balancing academics with moral development." },
                { icon: Users, title: "Collaborative", desc: "Fostering teamwork and communication skills." }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-gold/30 hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-lg bg-white text-royal flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function GradeLevelsSection() {
  const grades = [
    { 
      title: "Pre-School", 
      levels: "[Playgroup to Prep]", 
      age: "[Age 3-5]", 
      desc: "[Placeholder for early childhood education focus: e.g., Play-based learning, basic motor skills, socialization, and foundational literacy.]",
      color: "border-t-royal" 
    },
    { 
      title: "Primary", 
      levels: "[Class 1 to 5]", 
      age: "[Age 6-10]", 
      desc: "[Placeholder for primary education focus: e.g., Core subjects, cognitive development, reading proficiency, and character building.]",
      color: "border-t-gold" 
    },
    { 
      title: "Middle", 
      levels: "[Class 6 to 8]", 
      age: "[Age 11-13]", 
      desc: "[Placeholder for middle school focus: e.g., Advanced concepts, critical thinking, science projects, and independent study skills.]",
      color: "border-t-navy" 
    },
    { 
      title: "High School", 
      levels: "[Class 9 & 10]", 
      age: "[Age 14-16]", 
      desc: "[Placeholder for high school focus: e.g., Board exam preparation, specialized subjects, career counseling, and leadership development.]",
      color: "border-t-royal" 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-sm font-bold tracking-widest text-gold uppercase mb-3">Academic Stages</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Classes & Grade Levels</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {grades.map((grade, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`bg-white rounded-2xl p-8 border-t-4 ${grade.color} shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
                <GraduationCap className="h-10 w-10 text-slate-400 mb-6" />
                <h4 className="font-serif text-2xl font-bold text-navy mb-2">{grade.title}</h4>
                <div className="space-y-1 mb-4 pb-4 border-b border-slate-100">
                  <p className="text-slate-700 font-bold">{grade.levels}</p>
                  <p className="text-sm text-slate-500">{grade.age} Years</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {grade.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1">
             <div className="bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center p-0 border border-slate-200 overflow-hidden shadow-lg">
                 <img src={curriculumImg} alt="Students actively participating in a classroom activity" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <h2 className="font-serif text-sm font-bold tracking-widest text-gold uppercase mb-3">What We Teach</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">Curriculum & Teaching Methodology</h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our curriculum aligns with [Board/Curriculum Name Placeholder] standards, enriched with modern educational practices to ensure a comprehensive learning experience. We employ a balanced methodology that combines explicit instruction with active, inquiry-based learning.
            </p>

            <ul className="space-y-4">
              {[
                "Interactive and engaging classroom sessions",
                "Focus on conceptual clarity over rote memorization",
                "Integration of Islamic/Moral studies across subjects",
                "Regular practical lab sessions for sciences",
                "Continuous feedback loop between teachers and students"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-gold mr-3 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AssessmentSection() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-serif text-sm font-bold tracking-widest text-gold-light uppercase mb-3">Evaluation</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Assessment & Examinations</h3>
            <p className="text-slate-300 text-lg">
              We utilize a continuous and comprehensive evaluation system to monitor student progress consistently, ensuring that learning outcomes are met effectively.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
             { title: "Formative Assessments", desc: "Regular quizzes, class participation, and monthly tests to track ongoing understanding.", icon: PenTool },
             { title: "Summative Examinations", desc: "Mid-term and Final examinations to evaluate comprehensive knowledge retention.", icon: Award },
             { title: "Progress Reporting", desc: "Detailed report cards and regular Parent-Teacher Meetings (PTMs) to discuss student growth.", icon: Activity }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <item.icon className="h-10 w-10 text-gold-light mb-6" />
                <h4 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoCurricularSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-serif text-sm font-bold tracking-widest text-gold uppercase mb-3">Beyond Books</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-6">Co-curricular & Student Development</h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Education at National English School Sathiala extends far beyond the classroom. We offer a vibrant array of co-curricular activities designed to discover hidden talents, build confidence, and promote physical and mental well-being.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From debate clubs and science fairs to sports tournaments and cultural events, our students are encouraged to explore their interests and develop leadership skills in a supportive environment.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Sports & Athletics', 'Debating Society', 'Science Exhibitions', 'Art & Craft', 'Educational Trips', 'Qiraat Competitions'].map((activity, i) => (
                <span key={i} className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                  {activity}
                </span>
              ))}
            </div>
          </FadeIn>

           <FadeIn delay={0.2} className="relative">
             <div className="bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center p-0 border border-slate-200 overflow-hidden shadow-lg">
                 <img src={coCurricularImg} alt="Students participating in a co-curricular science fair" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-royal/10 rounded-full z-[-1]" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function TechAndSupportSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
           <h3 className="font-serif text-3xl sm:text-4xl font-bold text-navy">Modern Tools & Academic Support</h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <FadeIn>
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col items-start">
              <div className="h-14 w-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                <Laptop className="h-7 w-7" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-navy mb-4">Technology in Education</h4>
              <p className="text-slate-600 leading-relaxed">
                We integrate modern technology into our teaching methodologies to prepare students for a digital future. 
                Our computer labs are equipped with up-to-date systems, and classrooms feature modern multimedia projectors and interactive learning tools to facilitate engaging visual learning.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100 h-full flex flex-col items-start">
              <div className="h-14 w-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6">
                <LifeBuoy className="h-7 w-7" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-navy mb-4">Academic Support Systems</h4>
              <p className="text-slate-600 leading-relaxed">
                We understand that every child learns at their own pace. Our academic support includes remedial classes for students needing extra help, dedicated counseling, and close parent-teacher coordination to ensure no student is left behind.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function AcademicsCTA() {
  return (
    <section className="py-20 bg-royal relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Begin Your Academic Journey With Us
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how National English School Sathiala can provide the perfect foundation for your child's future success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
              to="/admissions"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-1 transition-all duration-300"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center rounded-md border-2 border-white/30 bg-transparent px-8 py-3.5 text-base font-bold text-white backdrop-blur-sm hover:bg-white hover:text-navy transition-all duration-300"
            >
              Contact Administration
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
