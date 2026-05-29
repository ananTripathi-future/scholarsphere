import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Users, Star, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const Hindi = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', class: 'Select Class' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const ADMIN_WHATSAPP = '916383528758';
    
    // The message the student sends to the admin
    const text = `Hello *Anant Tripathi* (Admission Coordinator),

I would like to submit my callback request:
*Student Name:* ${formData.name}
*Phone:* ${formData.phone}
*Class:* ${formData.class}`;

    window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
    setFormData({ name: '', phone: '', class: 'Select Class' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const features = [
    "Weekly Tests", "Notes & Assignments", "Doubt Clearing", "Online + Offline Classes", "Personalized Guidance"
  ];

  const courseIncludes = [
    { title: "Spoken Hindi", desc: "Develop fluency and confidence in spoken Hindi." },
    { title: "Grammar (व्याकरण)", desc: "Deep dive into Hindi grammar rules, syntax, and usage." },
    { title: "Literature", desc: "Comprehensive analysis of prose, poetry, and stories." },
    { title: "Essay & Letter Writing", desc: "Techniques for scoring high in writing sections." },
    { title: "NCERT Preparation", desc: "Line-by-line explanation of NCERT textbooks." },
    { title: "All states Board Exam Preparation", desc: "Previous year papers, mock tests, and time management strategies." }
  ];

  const faqs = [
    { q: "Which classes do you teach?", a: "We provide Hindi tuition for Class 6 to 12, covering both CBSE board curriculum and general Hindi improvement." },
    { q: "Do you offer online classes?", a: "Yes, we offer both online and offline classes. You can choose the mode that best suits your convenience." },
    { q: "Is study material provided?", a: "Yes, we provide comprehensive notes, assignments, and practice worksheets for all topics including Grammar and Literature." },
    { q: "How are doubts handled?", a: "We have dedicated doubt-clearing sessions and also offer 24/7 WhatsApp support for immediate queries." }
  ];

  return (
    <div className="overflow-hidden bg-orange-50/30 dark:bg-gray-900 min-h-screen pt-20">
      
      {/* 1. Hero / Home Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/50 dark:bg-orange-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 font-semibold text-sm mb-6 border border-orange-200 dark:border-orange-800">
                ⭐ Premium Hindi Education
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 font-serif">
                Master <span className="text-orange-600 dark:text-orange-500">Hindi</span> With Expert Guidance
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Comprehensive CBSE Hindi Coaching covering Grammar (व्याकरण) & Literature. Build a strong foundation and score top marks.
              </motion.p>
              <motion.div variants={fadeIn} className="flex gap-4">
                <a href="#contact" className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-orange-600/30">
                  Join Free Demo
                </a>
                <a href="#courses" className="px-8 py-3 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-gray-700 rounded-xl font-bold hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors">
                  View Syllabus
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-yellow-300 rounded-full animate-spin-slow opacity-20 blur-2xl"></div>
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-orange-100 dark:border-gray-700 flex flex-col justify-center items-center text-center">
                  <div className="text-8xl mb-6">📚</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Hindi Tuition Classes</h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">Class 6 to 12 • CBSE Board</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {["व्याकरण", "साहित्य", "लेखन"].map((tag, i) => (
                      <span key={i} className="px-4 py-1 bg-orange-50 dark:bg-gray-700 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Courses Section */}
      <section id="courses" className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Course Curriculum</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseIncludes.map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-orange-50/50 dark:bg-gray-800 border border-orange-100 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features & Batch Details */}
      <section className="py-20 bg-orange-50/30 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Our Hindi Classes?</h2>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <CheckCircle2 className="text-orange-500 flex-shrink-0" size={24} />
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Batch Information</h2>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-orange-100 dark:border-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-orange-50 dark:bg-gray-900 rounded-2xl">
                    <Clock className="text-orange-500 mb-4" size={32} />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Batch Timings</h4>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-1">2 Days a Week</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      • 6:00 PM - 7:30 PM<br />
                      • 7:30 PM - 9:00 PM
                    </p>
                  </div>
                  <div className="p-6 bg-orange-50 dark:bg-gray-900 rounded-2xl">
                    <MapPin className="text-orange-500 mb-4" size={32} />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Learning Mode</h4>
                    <p className="text-gray-600 dark:text-gray-400">Choose between Online or Offline classes.</p>
                  </div>
                  <div className="p-6 bg-orange-50 dark:bg-gray-900 rounded-2xl sm:col-span-2 flex items-center gap-4">
                    <Users className="text-orange-500" size={32} />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Classes Covered</h4>
                      <p className="text-gray-600 dark:text-gray-400">Class 6th to 12th Standard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Faculty / About Teacher */}
      <section id="faculty" className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">Meet Your Teacher</h2>
          
          <div className="glass-card bg-orange-50/50 dark:bg-gray-800 p-8 md:p-12 rounded-3xl border border-orange-100 dark:border-gray-700 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <img 
                  src="/anupama.jpg" 
                  alt="Anupama Tripathi" 
                  className="w-32 h-32 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
                />
                <span className="font-bold text-lg text-gray-900 dark:text-white text-center">Anupama Tripathi</span>
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Expert Hindi Faculty</h3>
                <p className="text-orange-600 dark:text-orange-400 font-medium mb-4">MA M.ED • 25 yrs of CBSE and ICSE board experience</p>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">School Experiences</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Army public school</li>
                      <li>Convent school</li>
                      <li>Renowned private schools</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Achievements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Awarded for 100% result by HRD minister Ms. Smriti Irani.</li>
                      <li>Appreciation letter by Madhuban publication and editor of NCERT book Mr. Pradeep Jain.</li>
                      <li>Conducted teachers workshop for upliftment of Hindi lang.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Teaching Style</h4>
                    <p>Interactive, playway method, creative, one to one teaching.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Student Results</h4>
                    <p className="font-bold text-orange-600 dark:text-orange-400">100% pass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-20 bg-orange-50/30 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Success Stories</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", class: "Class 10", text: "The grammar techniques taught here are amazing. I scored 98 in my boards!" },
              { name: "Priya Singh", class: "Class 12", text: "Literature felt so boring before, but the storytelling method made it my favorite subject." },
              { name: "Amit Patel", class: "Class 8", text: "Regular tests and notes helped me improve my Hindi spelling and writing skills drastically." }
            ].map((testi, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testi.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testi.name}</h4>
                  <p className="text-sm text-gray-500">{testi.class}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-800 flex justify-between items-center text-gray-900 dark:text-white font-semibold hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
                >
                  {faq.q}
                  {activeFaq === idx ? <ChevronUp size={20} className="text-orange-500" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>
                {activeFaq === idx && (
                  <div className="px-6 py-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact Details */}
      <section id="contact" className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to improve your Hindi scores?</h2>
              <p className="text-orange-100 text-lg mb-8">Contact us today to book a demo class or ask any questions about our batches.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"><Phone size={24} /></div>
                  <div>
                    <p className="text-orange-200 text-sm">Phone / WhatsApp</p>
                    <a href="https://wa.me/919884880125" target="_blank" rel="noopener noreferrer" className="font-bold text-xl hover:underline">+91 9884880125</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"><Mail size={24} /></div>
                  <div>
                    <p className="text-orange-200 text-sm">Email</p>
                    <a href="mailto:anupamatrip.77@gmail.com" className="font-bold text-xl hover:underline break-all">anupamatrip.77@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 text-gray-900 dark:text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Request a Callback</h3>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Student Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Class</label>
                  <select required value={formData.class} onChange={(e) => setFormData({...formData, class: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="" disabled hidden>Select Class</option>
                    {[6,7,8,9,10,11,12].map(c => <option key={c} value={`Class ${c}`}>Class {c}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-lg transition-colors mt-4">
                  Submit Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hindi;
