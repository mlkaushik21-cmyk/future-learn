import React, { useState } from 'react';

// Types
interface ClassData {
  id: number;
  grade: string;
  subjects: string[];
  students: string;
  duration: string;
  price: string;
  description: string;
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
  experience: string;
  students: string;
  rating: number;
  bio: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  class: string;
}

interface EnrolledCourse {
  id: number;
  grade: string;
  progress: number;
  lastLesson: string;
}

interface LiveClass {
  id: number;
  grade: string;
  subject: string;
  teacher: string;
  time: string;
  date: string;
  students: number;
}

// Data
const classesData: ClassData[] = [
  { id: 1, grade: "Class 1", subjects: ["Hindi", "English", "Mathematics", "EVS"], students: "42,500+", duration: "9 months", price: "₹999", description: "Foundation building with fun learning" },
  { id: 2, grade: "Class 2", subjects: ["Hindi", "English", "Mathematics", "EVS"], students: "38,900+", duration: "9 months", price: "₹999", description: "Interactive learning for young minds" },
  { id: 3, grade: "Class 3", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Studies"], students: "35,200+", duration: "9 months", price: "₹1,199", description: "Building strong academic base" },
  { id: 4, grade: "Class 4", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Studies"], students: "41,100+", duration: "9 months", price: "₹1,199", description: "Comprehensive curriculum" },
  { id: 5, grade: "Class 5", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Studies"], students: "47,800+", duration: "9 months", price: "₹1,299", description: "Preparation for middle school" },
  { id: 6, grade: "Class 6", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science"], students: "52,400+", duration: "9 months", price: "₹1,499", description: "Advanced concepts introduction" },
  { id: 7, grade: "Class 7", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science"], students: "49,700+", duration: "9 months", price: "₹1,499", description: "Deep understanding development" },
  { id: 8, grade: "Class 8", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science"], students: "55,900+", duration: "9 months", price: "₹1,699", description: "Board exam foundation" },
  { id: 9, grade: "Class 9", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science"], students: "61,300+", duration: "9 months", price: "₹1,899", description: "Board preparation begins" },
  { id: 10, grade: "Class 10", subjects: ["Hindi", "English", "Mathematics", "Science", "Social Science"], students: "78,500+", duration: "9 months", price: "₹1,999", description: "Board exam mastery program" },
];

const teachersData: Teacher[] = [
  { id: 1, name: "Alok Kumar Sir", subject: "Mathematics", experience: "14 years", students: "2.1 Lakh+", rating: 4.9, bio: "Ex-IITian with passion for making Math fun and simple for school students.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
  { id: 2, name: "Dr. Priya Sharma", subject: "Science", experience: "11 years", students: "1.8 Lakh+", rating: 4.8, bio: "PhD in Physics, makes complex Science concepts easy with real-life examples.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" },
  { id: 3, name: "Rahul Verma Sir", subject: "Social Science", experience: "9 years", students: "1.4 Lakh+", rating: 4.7, bio: "Specialist in making History & Civics engaging and easy to remember.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
  { id: 4, name: "Ananya Gupta Ma'am", subject: "English", experience: "12 years", students: "1.6 Lakh+", rating: 4.9, bio: "Expert in English grammar, literature and communication skills.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
];

const testimonialsData: Testimonial[] = [
  { id: 1, name: "Arjun Patel", role: "Class 10 Student", content: "PW School helped me score 97% in boards! The recorded lectures and daily practice problems are amazing.", rating: 5, class: "Class 10" },
  { id: 2, name: "Sneha Reddy", role: "Parent of Class 7", content: "My daughter loves the live classes. Teachers explain everything so well. Best decision for her education.", rating: 5, class: "Class 7" },
  { id: 3, name: "Vikram Singh", role: "Class 9 Student", content: "Doubt solving is lightning fast! I cleared all my concepts in Science. Thank you PW!", rating: 4, class: "Class 9" },
];

const liveClassesData: LiveClass[] = [
  { id: 1, grade: "Class 10", subject: "Mathematics", teacher: "Alok Kumar Sir", time: "6:00 PM", date: "Today", students: 1240 },
  { id: 2, grade: "Class 9", subject: "Science", teacher: "Dr. Priya Sharma", time: "5:00 PM", date: "Today", students: 980 },
  { id: 3, grade: "Class 8", subject: "English", teacher: "Ananya Gupta Ma'am", time: "7:30 PM", date: "Tomorrow", students: 670 },
  { id: 4, grade: "Class 10", subject: "Social Science", teacher: "Rahul Verma Sir", time: "4:00 PM", date: "Tomorrow", students: 850 },
];

const features = [
  { icon: "📺", title: "Live + Recorded Classes", desc: "Attend live or watch anytime" },
  { icon: "📝", title: "Daily Practice Problems", desc: "1000+ DPPs with solutions" },
  { icon: "💬", title: "24×7 Doubt Solving", desc: "Instant answers from teachers" },
  { icon: "📚", title: "Study Material & Notes", desc: "Chapter-wise PDFs & summaries" },
  { icon: "📊", title: "Tests & Analysis", desc: "Weekly tests + performance reports" },
  { icon: "🎯", title: "Personal Mentor", desc: "Dedicated guidance & motivation" },
];

export default function FutureLearnSchool() {
  // State Management
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false);
  const [selectedLiveClass, setSelectedLiveClass] = useState<LiveClass | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([
    { id: 10, grade: "Class 10", progress: 67, lastLesson: "Trigonometry - Ch 8" },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterGrade, setFilterGrade] = useState<number | null>(null);
  const [showMyLearning, setShowMyLearning] = useState(false);
  const [showDoubtModal, setShowDoubtModal] = useState(false);
  const [doubtMessage, setDoubtMessage] = useState('');
  const [doubtSubmitted, setDoubtSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Filtered Classes
  const filteredClasses = classesData.filter(cls => {
    const matchesSearch = cls.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cls.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterGrade === null || cls.id === filterGrade;
    return matchesSearch && matchesFilter;
  });

  // Handlers
  const openClassModal = (cls: ClassData) => {
    setSelectedClass(cls);
    setMobileMenuOpen(false);
  };

  const closeClassModal = () => {
    setSelectedClass(null);
  };

  const enrollInClass = (cls: ClassData) => {
    const alreadyEnrolled = enrolledCourses.some(c => c.id === cls.id);
    if (!alreadyEnrolled) {
      const newCourse: EnrolledCourse = {
        id: cls.id,
        grade: cls.grade,
        progress: Math.floor(Math.random() * 40) + 20,
        lastLesson: `${cls.subjects[0]} - Chapter 1`,
      };
      setEnrolledCourses([...enrolledCourses, newCourse]);
    }
    // Close modal and open My Learning
    setSelectedClass(null);
    setShowMyLearning(true);
    // Toast simulation
    setTimeout(() => {
      alert(`🎉 Successfully enrolled in ${cls.grade}! Welcome to Future Learn.`);
    }, 300);
  };

  const openTeacherModal = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeTeacherModal = () => {
    setSelectedTeacher(null);
  };

  const joinLiveClass = (liveClass: LiveClass) => {
    setSelectedLiveClass(liveClass);
    setShowLiveModal(true);
  };

  const closeLiveModal = () => {
    setShowLiveModal(false);
    setSelectedLiveClass(null);
  };

  const openDoubtModal = () => {
    setShowDoubtModal(true);
    setDoubtSubmitted(false);
    setDoubtMessage('');
  };

  const submitDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (doubtMessage.trim()) {
      setDoubtSubmitted(true);
      setTimeout(() => {
        setShowDoubtModal(false);
        alert("✅ Your doubt has been submitted! Our teacher will reply within 5 minutes.");
        setDoubtMessage('');
      }, 1400);
    }
  };

  const updateProgress = (courseId: number, newProgress: number) => {
    setEnrolledCourses(prev =>
      prev.map(course =>
        course.id === courseId ? { ...course, progress: Math.min(100, Math.max(0, newProgress)) } : course
      )
    );
  };

  // Login / Signup handlers (simulated)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoginModal(false);
    alert("✅ Logged in successfully! Welcome back to Future Learn.");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSignupModal(false);
    alert("🎉 Account created! Welcome to Future Learn family. Start your free trial now.");
  };

  const unsubscribeCourse = (courseId: number) => {
    setEnrolledCourses(prev => prev.filter(c => c.id !== courseId));
  };

  // Auto testimonial slider
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 flex items-center justify-center">
                <span className="font-bold text-2xl tracking-tighter">FL</span>
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tight">Future Learn</div>
                <div className="text-[10px] text-violet-400 -mt-1 font-medium">SCHOOL • CLASSES 1-10</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-9 text-sm font-medium">
              <a href="#classes" className="hover:text-violet-400 transition-colors">Classes</a>
              <a href="#teachers" className="hover:text-violet-400 transition-colors">Teachers</a>
              <a href="#live" className="hover:text-violet-400 transition-colors">Live Classes</a>
              <a href="#pricing" className="hover:text-violet-400 transition-colors">Pricing</a>
              <button onClick={() => setShowMyLearning(true)} className="flex items-center gap-2 text-violet-400 hover:text-violet-300">
                <span>My Learning</span>
                {enrolledCourses.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-violet-500 text-xs font-semibold">{enrolledCourses.length}</span>
                )}
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowMyLearning(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-700 transition-all"
              >
                📚 My Courses
              </button>
              <button 
                onClick={() => setShowLoginModal(true)} 
                className="px-5 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-900 transition-all border border-slate-700"
              >
                Log in
              </button>
              <button 
                onClick={() => setShowSignupModal(true)}
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 transition-all rounded-xl text-sm font-semibold shadow-lg shadow-violet-500/20"
              >
                Join Free
              </button>

              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col gap-4 text-sm">
                <a href="#classes" className="py-1" onClick={() => setMobileMenuOpen(false)}>Classes</a>
                <a href="#teachers" className="py-1" onClick={() => setMobileMenuOpen(false)}>Teachers</a>
                <a href="#live" className="py-1" onClick={() => setMobileMenuOpen(false)}>Live Classes</a>
                <button onClick={() => { setShowMyLearning(true); setMobileMenuOpen(false); }} className="py-1 text-left">My Learning ({enrolledCourses.length})</button>
                <div className="pt-2 flex gap-3">
                  <button onClick={() => { setShowLoginModal(true); setMobileMenuOpen(false); }} className="flex-1 py-2.5 border border-slate-700 rounded-xl">Log in</button>
                  <button onClick={() => { setShowSignupModal(true); setMobileMenuOpen(false); }} className="flex-1 py-2.5 bg-violet-600 rounded-xl">Join Free</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION - PW Style */}
      <div className="pt-20 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_0.6px,transparent_1px)] bg-[length:4px_4px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 rounded-full border border-slate-700 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-emerald-400 font-medium">2025-26 Session Open • 4.9 Lakh+ Students</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6">
                India's Most<br />Trusted Education<br />for <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Classes 1-10</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg mb-9">
                Learn like never before with India's best teachers. Live classes, recorded lectures, 
                instant doubt solving &amp; complete study material.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all active:scale-[0.985]"
                >
                  Explore Classes
                </button>
                <button 
                  onClick={() => setShowSignupModal(true)}
                  className="px-8 py-4 border border-white/40 hover:bg-white/5 rounded-2xl font-semibold text-lg transition-all flex items-center gap-2"
                >
                  Start Free Trial <span className="text-xl">→</span>
                </button>
              </div>

              <div className="flex items-center gap-8 mt-9">
                <div>
                  <div className="text-3xl font-bold">4.9L+</div>
                  <div className="text-sm text-slate-500">Happy Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98.4%</div>
                  <div className="text-sm text-slate-500">Avg. Board Score</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="Future Learn School Classroom" 
                  className="w-full aspect-[16/11] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="px-4 py-1 rounded-full bg-emerald-500/90 text-xs font-semibold">LIVE NOW</div>
                    <div className="text-white/90">Class 10 - Mathematics • 1,240 students watching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="border-b border-slate-800 bg-slate-900 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-3 text-sm text-slate-400">
          <div>Trusted by students from <span className="text-white font-medium">CBSE • ICSE • State Boards</span></div>
          <div className="flex gap-7 text-xs tracking-widest font-medium">
            <div>CBSE TOPPERS</div> <div>STATE RANKERS</div> <div>OLYMPIAD WINNERS</div>
          </div>
        </div>
      </div>

      {/* FEATURES HIGHLIGHT */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-violet-400 text-sm tracking-[3px] font-semibold mb-3">WHY FUTURE LEARN?</div>
          <h2 className="text-4xl font-semibold tracking-tight">Everything you need to excel in school</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="group p-7 bg-slate-900 rounded-3xl border border-slate-800 hover:border-violet-900 transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 tracking-tight">{feature.title}</h4>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CLASSES SECTION - Interactive */}
      <div id="classes" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <div className="text-violet-400 text-sm font-medium tracking-widest">EXPLORE OUR BATCHES</div>
              <h2 className="text-5xl font-semibold tracking-tighter mt-1">Classes 1 to 10</h2>
            </div>
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative w-72">
                <input 
                  type="text" 
                  placeholder="Search class or subject..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl pl-11 py-3 text-sm focus:outline-none focus:border-violet-600"
                />
                <div className="absolute left-4 top-3.5 text-xl">🔍</div>
              </div>
              {/* Filter */}
              <select 
                value={filterGrade || ''} 
                onChange={(e) => setFilterGrade(e.target.value ? parseInt(e.target.value) : null)}
                className="bg-slate-950 border border-slate-700 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-violet-600"
              >
                <option value="">All Classes</option>
                {classesData.map(c => <option key={c.id} value={c.id}>{c.grade}</option>)}
              </select>
            </div>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls) => {
                const isEnrolled = enrolledCourses.some(ec => ec.id === cls.id);
                return (
                  <div 
                    key={cls.id} 
                    onClick={() => openClassModal(cls)}
                    className="group cursor-pointer bg-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-violet-700 transition-all active:scale-[0.985] flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-3xl font-bold tracking-tight">{cls.grade}</div>
                        <div className="text-emerald-400 text-xs tracking-widest mt-1 font-semibold">{cls.students} STUDENTS</div>
                      </div>
                      {isEnrolled && <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">ENROLLED</div>}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-slate-400 mb-3">{cls.description}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {cls.subjects.slice(0, 3).map((sub, i) => (
                          <div key={i} className="bg-slate-900 text-xs px-3 py-1 rounded-full border border-slate-800">{sub}</div>
                        ))}
                        {cls.subjects.length > 3 && <div className="bg-slate-900 text-xs px-3 py-1 rounded-full border border-slate-800">+{cls.subjects.length - 3}</div>}
                      </div>
                    </div>

                    <div className="pt-6 mt-auto flex justify-between items-center border-t border-slate-800">
                      <div>
                        <div className="text-xs text-slate-500">Starting at</div>
                        <div className="font-bold tracking-tight">{cls.price}<span className="font-normal text-xs text-slate-400">/yr</span></div>
                      </div>
                      <div className="px-6 py-2 text-sm font-semibold bg-white text-slate-950 group-hover:bg-violet-600 group-hover:text-white rounded-xl transition-colors">
                        View Details →
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-5 text-center py-12 text-slate-400">No classes found matching your search.</div>
            )}
          </div>
        </div>
      </div>

      {/* LIVE CLASSES - Real Time Feel */}
      <div id="live" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-9">
          <div>
            <div className="uppercase text-xs font-semibold tracking-[3px] text-emerald-400">HAPPENING RIGHT NOW</div>
            <h3 className="font-semibold tracking-tighter text-4xl">Live Classes</h3>
          </div>
          <button onClick={openDoubtModal} className="px-6 py-3 text-sm flex items-center gap-2 border border-slate-700 hover:bg-slate-900 rounded-2xl">
            💬 Ask a Doubt
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {liveClassesData.map((live) => (
            <div key={live.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs px-3 py-px rounded-full bg-emerald-400/10 text-emerald-400 font-medium">{live.date}</div>
                <div className="text-xs px-3 py-px bg-red-500 text-white rounded-full font-bold tracking-widest animate-pulse">LIVE</div>
              </div>
              <div className="font-semibold text-xl tracking-tight mb-1">{live.subject}</div>
              <div className="text-sm text-slate-400 mb-5">{live.grade} • {live.teacher}</div>
              
              <div className="mt-auto flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold tracking-tight">{live.time}</div>
                  <div className="text-xs text-slate-400">{live.students} students joined</div>
                </div>
                <button 
                  onClick={() => joinLiveClass(live)}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 transition-all font-semibold rounded-2xl text-sm"
                >
                  Join Live
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TEACHERS SECTION */}
      <div id="teachers" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-violet-400 text-sm tracking-[3px]">LEARN FROM THE BEST</div>
            <h2 className="text-4xl font-semibold tracking-tight mt-2">Our Expert Faculty</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachersData.map((teacher) => (
              <div key={teacher.id} onClick={() => openTeacherModal(teacher)} className="group bg-slate-950 border border-slate-800 hover:border-violet-700 rounded-3xl p-7 cursor-pointer transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-2xl object-cover ring-1 ring-slate-700" />
                  <div>
                    <div className="font-semibold text-xl tracking-tight">{teacher.name}</div>
                    <div className="text-sm text-violet-400">{teacher.subject}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-6">
                  <div>{teacher.experience}</div>
                  <div className="text-emerald-400">★ {teacher.rating}</div>
                </div>
                <div className="text-sm text-slate-400 line-clamp-3">{teacher.bio}</div>
                <div className="text-xs mt-4 pt-4 border-t border-slate-800 text-violet-400 group-hover:underline">View full profile →</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS - Carousel */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="text-violet-400 text-sm tracking-[3px] mb-3">STUDENTS &amp; PARENTS LOVE US</div>
        <h2 className="text-4xl font-semibold tracking-tight mb-12">Real Results. Real Stories.</h2>

        <div className="relative max-w-3xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={`transition-all duration-700 ${currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
              <div className="text-2xl leading-tight tracking-tight mb-8">"{testimonial.content}"</div>
              <div>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role} • {testimonial.class}</div>
              </div>
              <div className="flex justify-center mt-3">{"★".repeat(testimonial.rating)}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonialsData.map((_, i) => (
            <button key={i} onClick={() => setCurrentTestimonial(i)} className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === i ? 'bg-white w-7' : 'bg-slate-700'}`}></button>
          ))}
        </div>
      </div>

      {/* PRICING SECTION */}
      <div id="pricing" className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="font-medium tracking-[4px] text-violet-400 text-sm">AFFORDABLE EXCELLENCE</div>
            <h2 className="text-5xl font-semibold tracking-tighter mt-2">Simple Pricing for Every Student</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Monthly */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-9 flex flex-col">
              <div className="text-sm uppercase tracking-[3px] text-slate-400">Monthly</div>
              <div className="mt-3 flex items-baseline"><span className="text-6xl font-bold tracking-tighter">₹299</span><span className="ml-1 text-xl text-slate-400">/mo</span></div>
              <div className="text-sm text-emerald-400 mt-1">Billed monthly • Cancel anytime</div>
              <ul className="mt-8 text-sm space-y-3 flex-1 text-slate-400">
                <li>✓ All Live &amp; Recorded Classes</li>
                <li>✓ Daily Practice Problems</li>
                <li>✓ Study Material</li>
                <li>✓ Basic Doubt Support</li>
              </ul>
              <button onClick={() => setShowSignupModal(true)} className="mt-8 py-4 rounded-2xl bg-white text-black font-semibold">Start Monthly Plan</button>
            </div>

            {/* Most Popular - Annual */}
            <div className="relative bg-gradient-to-b from-violet-600 to-indigo-600 rounded-3xl p-9 flex flex-col shadow-xl scale-[1.02]">
              <div className="absolute -top-3 right-8 px-5 py-1 bg-white text-slate-950 rounded-full text-xs font-bold tracking-widest">MOST POPULAR</div>
              <div className="text-sm uppercase tracking-[3px] text-white/80">Annual Plan</div>
              <div className="mt-3 flex items-baseline"><span className="text-6xl font-bold tracking-tighter">₹1,499</span><span className="ml-1 text-xl text-white/70">/yr</span></div>
              <div className="text-xs text-white/80">Save ₹2,089 • Includes all subjects</div>
              <ul className="mt-8 text-sm space-y-3 flex-1 text-white/90">
                <li>✓ Everything in Monthly +</li>
                <li>✓ 24×7 Instant Doubt Solving</li>
                <li>✓ Personal Mentor Support</li>
                <li>✓ Full Test Series &amp; Analysis</li>
                <li>✓ Priority Live Class Access</li>
              </ul>
              <button onClick={() => setShowSignupModal(true)} className="mt-8 py-4 rounded-2xl bg-white text-violet-700 font-bold">Get Annual Plan</button>
            </div>

            {/* Premium */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-9 flex flex-col">
              <div className="text-sm uppercase tracking-[3px] text-slate-400">Premium</div>
              <div className="mt-3 flex items-baseline"><span className="text-6xl font-bold tracking-tighter">₹2,499</span><span className="ml-1 text-xl text-slate-400">/yr</span></div>
              <div className="text-sm text-emerald-400 mt-1">Best for Class 9-10</div>
              <ul className="mt-8 text-sm space-y-3 flex-1 text-slate-400">
                <li>✓ All Annual Features</li>
                <li>✓ 1:1 Personal Mentorship</li>
                <li>✓ Board Exam Crash Course</li>
                <li>✓ Printed Study Material</li>
                <li>✓ Guaranteed Results Program</li>
              </ul>
              <button onClick={() => setShowSignupModal(true)} className="mt-8 py-4 rounded-2xl border border-white font-semibold">Enroll in Premium</button>
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl tracking-tighter font-bold">Ready to start learning with the best?</div>
        <p className="mt-4 text-xl text-slate-400">Join 4.9 Lakh+ students and parents who trust Future Learn for school education.</p>
        <div className="mt-9 flex justify-center gap-4">
          <button onClick={() => setShowSignupModal(true)} className="px-10 py-4 bg-violet-600 hover:bg-violet-700 rounded-2xl font-bold text-lg transition-all">Start Free 7-Day Trial</button>
          <button onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-4 border border-slate-600 hover:bg-slate-800 rounded-2xl font-semibold text-lg">Browse All Classes</button>
        </div>
        <div className="text-xs text-slate-500 mt-6">No credit card required • Cancel anytime</div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-y-12 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-xl font-bold">FL</div>
              <div className="font-bold text-xl tracking-tighter">Future Learn</div>
            </div>
            <div className="text-slate-500">Making quality education accessible to every student in India.</div>
          </div>
          <div>
            <div className="font-semibold mb-4 text-white/90">Company</div>
            <div className="space-y-2 text-slate-400">
              <div>About Us</div><div>Careers</div><div>Press</div><div>Blog</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4 text-white/90">For Students</div>
            <div className="space-y-2 text-slate-400">
              <div>Free Resources</div><div>Scholarships</div><div>Study Material</div><div>Board Exam Prep</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-4 text-white/90">Support</div>
            <div className="space-y-2 text-slate-400">
              <div>Help Centre</div><div>Contact Us</div><div>Community</div><div>24×7 Chat Support</div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 mt-16">© Future Learn 2025. Made for students. All rights reserved.</div>
      </footer>

      {/* ========== MODALS ========== */}

      {/* Class Detail Modal - FULLY FUNCTIONAL */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={closeClassModal}>
          <div className="bg-slate-900 max-w-2xl w-full rounded-3xl overflow-hidden border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="p-9">
              <div className="flex justify-between">
                <div>
                  <div className="uppercase tracking-[2px] text-xs text-violet-400 mb-1">{selectedClass.grade} • FULL YEAR PROGRAM</div>
                  <h3 className="font-bold text-4xl tracking-tighter">{selectedClass.grade}</h3>
                </div>
                <button onClick={closeClassModal} className="text-4xl text-slate-400 hover:text-white">×</button>
              </div>

              <p className="mt-4 text-lg text-slate-300">{selectedClass.description}</p>

              <div className="flex gap-3 mt-8">
                {selectedClass.subjects.map((subject, index) => (
                  <div key={index} className="px-6 py-2 bg-slate-800 text-sm rounded-2xl border border-slate-700">{subject}</div>
                ))}
              </div>

              <div className="mt-9 grid grid-cols-3 gap-4 text-sm">
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs text-slate-400">Students Enrolled</div>
                  <div className="font-bold text-2xl mt-1 tracking-tight">{selectedClass.students}</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs text-slate-400">Course Duration</div>
                  <div className="font-bold text-2xl mt-1 tracking-tight">{selectedClass.duration}</div>
                </div>
                <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
                  <div className="text-xs text-slate-400">Annual Fee</div>
                  <div className="font-bold text-2xl mt-1 tracking-tight">{selectedClass.price}</div>
                </div>
              </div>

              {/* Course Features */}
              <div className="mt-9">
                <div className="text-sm text-violet-400 tracking-widest mb-3">WHAT YOU GET</div>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="flex gap-3 items-center"><span>✓</span> 450+ Live Classes</div>
                  <div className="flex gap-3 items-center"><span>✓</span> 1200+ Recorded Lectures</div>
                  <div className="flex gap-3 items-center"><span>✓</span> Chapter-wise Notes PDF</div>
                  <div className="flex gap-3 items-center"><span>✓</span> Weekly Tests &amp; Analysis</div>
                  <div className="flex gap-3 items-center"><span>✓</span> Daily Practice Problems</div>
                  <div className="flex gap-3 items-center"><span>✓</span> 24×7 Doubt Solving</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-9 flex items-center gap-4 border-t border-slate-800">
              <button 
                onClick={() => enrollInClass(selectedClass)}
                className="flex-1 bg-white hover:bg-slate-100 text-black py-4 font-bold rounded-2xl text-lg tracking-tight transition-all"
              >
                Enroll Now for {selectedClass.price}
              </button>
              <button onClick={closeClassModal} className="flex-1 border border-slate-700 py-4 font-medium rounded-2xl">Maybe Later</button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4" onClick={closeTeacherModal}>
          <div className="bg-slate-900 max-w-md w-full rounded-3xl overflow-hidden border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="p-9">
              <div className="flex justify-between items-start">
                <img src={selectedTeacher.image} alt="" className="w-24 h-24 rounded-2xl object-cover" />
                <button onClick={closeTeacherModal} className="text-4xl text-slate-400 hover:text-white">×</button>
              </div>
              <div className="mt-6">
                <div className="font-bold text-4xl tracking-tighter">{selectedTeacher.name}</div>
                <div className="text-violet-400 mt-0.5">{selectedTeacher.subject} • {selectedTeacher.experience} Experience</div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="px-5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium">★ {selectedTeacher.rating}</div>
                <div className="text-sm text-slate-400">{selectedTeacher.students} Students Taught</div>
              </div>
              <div className="mt-8 text-lg leading-snug text-slate-300">{selectedTeacher.bio}</div>
            </div>
            <div className="p-9 pt-0">
              <button onClick={() => { closeTeacherModal(); setShowSignupModal(true); }} className="w-full py-4 bg-violet-600 hover:bg-violet-700 rounded-2xl font-semibold">Book a Demo Class with {selectedTeacher.name.split(' ')[0]}</button>
            </div>
          </div>
        </div>
      )}

      {/* Live Class Modal */}
      {showLiveModal && selectedLiveClass && (
        <div className="fixed inset-0 bg-black/95 z-[70] flex items-center justify-center p-4">
          <div className="bg-slate-900 w-full max-w-4xl rounded-3xl overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-slate-800">
              <div>
                <div className="font-semibold text-2xl tracking-tight">{selectedLiveClass.subject} • {selectedLiveClass.grade}</div>
                <div className="text-emerald-400">Live with {selectedLiveClass.teacher}</div>
              </div>
              <button onClick={closeLiveModal} className="text-xl px-5 py-2 text-slate-400">Close</button>
            </div>

            <div className="aspect-video bg-slate-950 flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-emerald-400 text-xl mb-2">🔴 LIVE STREAMING</div>
                <div className="text-4xl font-semibold tracking-tighter mb-3">{selectedLiveClass.subject}</div>
                <div className="text-sm text-slate-400">{selectedLiveClass.time} • {selectedLiveClass.students} students online</div>
              </div>
              <div className="absolute top-6 right-6 px-4 py-1 bg-red-600 text-sm font-semibold rounded">LIVE</div>
            </div>

            <div className="p-8 flex gap-3">
              <button onClick={closeLiveModal} className="flex-1 py-4 border border-slate-700 rounded-2xl">Leave Class</button>
              <button onClick={() => { alert('Chat opened! (Demo)'); closeLiveModal(); }} className="flex-1 py-4 bg-emerald-600 rounded-2xl font-semibold">Ask Question in Chat</button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/90 z-[80] flex items-center justify-center p-4" onClick={() => setShowLoginModal(false)}>
          <div onClick={e => e.stopPropagation()} className="bg-slate-900 w-full max-w-md rounded-3xl p-9 border border-slate-700">
            <h3 className="font-semibold text-3xl tracking-tight">Welcome back!</h3>
            <p className="text-sm text-slate-400 mt-1">Login to continue learning</p>
            
            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <label className="text-sm text-slate-400">Email or Phone</label>
                <input type="text" defaultValue="student@futurelearn.com" required className="mt-1.5 w-full bg-slate-950 border border-slate-700 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-violet-500" />
              </div>
              <div>
                <label className="text-sm text-slate-400">Password</label>
                <input type="password" defaultValue="demo2025" required className="mt-1.5 w-full bg-slate-950 border border-slate-700 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-violet-500" />
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-violet-600 font-semibold">Sign In</button>
            </form>
            <div className="text-center mt-6 text-sm text-slate-400">New here? <button onClick={() => {setShowLoginModal(false); setShowSignupModal(true);}} className="text-violet-400">Create account</button></div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/90 z-[80] flex items-center justify-center p-4" onClick={() => setShowSignupModal(false)}>
          <div onClick={e => e.stopPropagation()} className="bg-slate-900 w-full max-w-md rounded-3xl p-9 border border-slate-700">
            <h3 className="font-semibold text-3xl tracking-tight">Join Future Learn</h3>
            <p className="text-sm text-slate-400 mt-1">Start learning in less than 2 minutes</p>
            
            <form onSubmit={handleSignup} className="mt-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-400">First Name</label>
                  <input type="text" defaultValue="Rahul" required className="mt-1.5 w-full bg-slate-950 border border-slate-700 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-violet-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-400">Last Name</label>
                  <input type="text" defaultValue="Sharma" required className="mt-1.5 w-full bg-slate-950 border border-slate-700 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-violet-500" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400">Email Address</label>
                <input type="email" defaultValue="rahul.sharma@gmail.com" required className="mt-1.5 w-full bg-slate-950 border border-slate-700 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-violet-500" />
              </div>
              <div>
                <label className="text-sm text-slate-400">Class</label>
                <select required className="mt-1.5 w-full bg-slate-950 border border-slate-700 px-5 py-3.5 rounded-2xl focus:outline-none focus:border-violet-500">
                  {classesData.map(c => <option key={c.id} value={c.grade}>{c.grade}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full py-4 rounded-2xl bg-white text-black font-bold">Create Free Account &amp; Start Trial</button>
            </form>
            <div className="text-xs text-center mt-4 text-slate-400">7-day free trial • Cancel anytime</div>
          </div>
        </div>
      )}

      {/* My Learning Sidebar / Modal */}
      {showMyLearning && (
        <div className="fixed inset-0 bg-black/90 z-[80] flex justify-end" onClick={() => setShowMyLearning(false)}>
          <div className="bg-slate-950 w-full max-w-md border-l border-slate-800 p-9 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <div>
                <div className="font-bold text-3xl tracking-tighter">My Learning</div>
                <div className="text-sm text-emerald-400">{enrolledCourses.length} Active Courses</div>
              </div>
              <button onClick={() => setShowMyLearning(false)} className="text-4xl text-slate-400">×</button>
            </div>

            {enrolledCourses.length > 0 ? (
              <div className="space-y-5">
                {enrolledCourses.map((course, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-xl tracking-tight">{course.grade}</div>
                        <div className="text-xs text-emerald-400 mt-1">Last studied: {course.lastLesson}</div>
                      </div>
                      <button onClick={() => unsubscribeCourse(course.id)} className="text-xs px-3 py-1 text-red-400 hover:text-red-500">Leave</button>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs mb-2">
                        <div>Progress</div>
                        <div className="font-mono text-emerald-400">{course.progress}%</div>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-400 to-violet-500 transition-all" style={{width: `${course.progress}%`}}></div>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-3 text-xs">
                      <button onClick={() => updateProgress(course.id, course.progress + 12)} className="flex-1 py-3 bg-emerald-600/90 rounded-xl font-medium">Continue Learning</button>
                      <button onClick={openDoubtModal} className="flex-1 py-3 border border-slate-700 rounded-xl font-medium">Ask Doubt</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400">
                <div className="text-6xl mb-4">📚</div>
                <div className="text-xl text-white font-medium mb-2">No courses yet</div>
                <p className="text-sm">Enroll in a class to begin your journey.</p>
                <button onClick={() => { setShowMyLearning(false); document.getElementById('classes')?.scrollIntoView({behavior:'smooth'}); }} className="mt-5 px-8 py-3 bg-white text-black rounded-2xl font-semibold">Browse Classes</button>
              </div>
            )}

            <div className="mt-8 text-center">
              <button onClick={() => { setShowMyLearning(false); setShowSignupModal(true); }} className="text-sm text-violet-400 underline">Explore more courses</button>
            </div>
          </div>
        </div>
      )}

      {/* Doubt Solving Modal */}
      {showDoubtModal && (
        <div className="fixed inset-0 bg-black/90 z-[90] flex items-center justify-center p-4" onClick={() => setShowDoubtModal(false)}>
          <div className="bg-slate-900 max-w-md w-full rounded-3xl p-9 border border-slate-700" onClick={e => e.stopPropagation()}>
            <div className="font-bold text-3xl tracking-tight">Ask Your Doubt</div>
            <p className="text-sm mt-1 text-slate-400">Our teachers reply within minutes.</p>

            {!doubtSubmitted ? (
              <form onSubmit={submitDoubt} className="mt-7">
                <textarea 
                  value={doubtMessage} 
                  onChange={(e) => setDoubtMessage(e.target.value)} 
                  placeholder="Type your question here... (e.g. Explain the difference between distance and displacement in physics)"
                  className="w-full h-36 resize-none bg-slate-950 border border-slate-700 rounded-2xl p-5 text-sm focus:outline-none focus:border-violet-600"
                  required
                />
                <button type="submit" className="w-full mt-4 py-4 bg-violet-600 rounded-2xl font-semibold">Submit Doubt</button>
              </form>
            ) : (
              <div className="py-9 text-center">
                <div className="text-5xl mb-3">✅</div>
                <div className="font-semibold">Doubt submitted successfully!</div>
                <div className="text-sm text-emerald-400">Our teacher will reply shortly.</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
