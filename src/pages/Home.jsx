import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, PlayCircle, Clock, CheckCircle2, FlaskConical, Atom, BrainCircuit, Star } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 lg:pt-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeIn} className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-secondary-dark dark:text-secondary-light font-semibold text-sm mb-6 border border-orange-200 dark:border-orange-800/50">
                🚀 2026 Admissions Open
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                Master Science, Chemistry & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Hindi
                </span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Expert coaching for Class 10 Science, Class 11 & 12 Chemistry, and comprehensive CBSE Hindi Tuition. Conceptual clarity, regular assessments, and outstanding results.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
                  Join Now <BookOpen size={20} />
                </Link>
                <Link to="/courses" className="btn-outline flex items-center justify-center gap-2">
                  Explore Courses <PlayCircle size={20} />
                </Link>
              </motion.div>
              
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float"></div>
              {/* Added a stylish illustration placeholder */}
              <div className="relative z-10 glass-card p-2 animate-float">
                 <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800" alt="Science Laboratory" className="rounded-xl w-full h-[500px] object-cover shadow-2xl" />
                 
                 {/* Floating Badges */}
                 <div className="absolute -left-10 top-20 glass-card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Atom size={24} /></div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Class 11 & 12</div>
                      <div className="text-sm text-gray-500">Chemistry</div>
                    </div>
                 </div>
                 
                 <div className="absolute -right-8 bottom-32 glass-card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><FlaskConical size={24} /></div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Class 10</div>
                      <div className="text-sm text-gray-500">Science</div>
                    </div>
                 </div>
                 
                 <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 glass-card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center"><BookOpen size={24} /></div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Class 6 - 12</div>
                      <div className="text-sm text-gray-500">Hindi Tuition</div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose ScholarSphere?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <PlayCircle size={32} />, title: "Interactive Live Classes", desc: "Engaging real-time sessions with interactive tools." },
              { icon: <BookOpen size={32} />, title: "Notes & Study Materials", desc: "Comprehensive, exam-oriented study materials." },
              { icon: <Award size={32} />, title: "Weekly Mock Tests", desc: "Regular assessments to track and improve performance." },
              { icon: <Users size={32} />, title: "Personalized Attention", desc: "Small batch sizes for individualized focus." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Premium Courses</h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
            <Link to="/courses" className="text-primary dark:text-primary-light font-semibold hover:underline mt-4 md:mt-0">View All Courses →</Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Class 10 Science", 
                icon: <BrainCircuit size={24} />, 
                color: "from-green-400 to-green-600", 
                desc: "Complete physics, chemistry, and biology coverage for board exams.", 
                link: "/courses",
                features: ["Physics, Chemistry & Biology prep", "NCERT chapter-wise mastery", "Weekly subject tests"]
              },
              { 
                title: "Class 11 Chemistry", 
                icon: <FlaskConical size={24} />, 
                color: "from-blue-400 to-blue-600", 
                desc: "Strong foundational concepts for school exams and competitive prep.", 
                link: "/courses",
                features: ["In-depth organic & inorganic concepts", "Numerical problem-solving strategies", "Regular assignment evaluations"]
              },
              { 
                title: "Class 12 Chemistry", 
                icon: <Atom size={24} />, 
                color: "from-purple-400 to-purple-600", 
                desc: "Advanced concepts, organic chemistry mastery, and board exam focus.", 
                link: "/courses",
                features: ["Targeted board exam preparations", "Intensive chemical equation practice", "Full-length mock board exams"]
              },
              { 
                title: "Hindi Tuition", 
                icon: <BookOpen size={24} />, 
                color: "from-orange-400 to-red-500", 
                desc: "Comprehensive CBSE Hindi Coaching, Grammar (व्याकरण) & Literature.", 
                link: "/hindi",
                features: ["CBSE Grammar (व्याकरण) expertise", "Literature reading & writing skills", "Regular dictation & vocabulary tests"]
              }
            ].map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className={`h-32 bg-gradient-to-r ${course.color} p-6 flex items-end relative overflow-hidden`}>
                  <div className="absolute -right-4 -top-4 text-white/20 transform rotate-12 scale-150">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white relative z-10">{course.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{course.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={16} className="text-green-500" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={course.link} className="block w-full py-3 text-center rounded-lg bg-gray-50 dark:bg-gray-800 text-primary dark:text-primary-light font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors border border-gray-200 dark:border-gray-700">
                    Explore Course
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Legacy of Excellence</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Our students consistently achieve top ranks and centums.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "10k+", label: "Students Mentored" },
              { number: "500+", label: "Centums Scored" },
              { number: "100%", label: "Pass Percentage" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-secondary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-medium text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-800"
          >
            <div className="md:w-2/5 h-96 md:h-auto bg-gray-200 dark:bg-gray-800">
              <img 
                src="/founder.png" 
                alt="Anant Tripathi - Founder" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">Meet the Founder</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Anant Tripathi</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6 rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic mb-8">
                "Our mission at ScholarSphere is not just to help students score top marks, but to build a foundation of deep understanding. We provide the personalized attention, rigorous practice, and unwavering support that every student needs to realize their true potential."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Star size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Admission Coordinator</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">ScholarSphere Educational Academy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Ready to Excel in Science & Hindi?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our 2026 batches today and get access to expert coaching, premium study materials, and a structured path to success in both Science and Hindi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8">
                  Book a Demo Class
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
