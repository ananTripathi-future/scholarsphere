import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 pb-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Our Faculty</h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Faculty Profile */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
              alt="Experienced Faculty" 
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />
            <div className="absolute bottom-6 left-6 z-20 glass-card p-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary text-white p-3 rounded-full">
                  <Award size={24} />
                </div>
                <div>
                  <div className="font-bold text-xl text-gray-900 dark:text-white">25+ Years</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Teaching Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Expert Guidance for Your Success</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 25 years of teaching experience, our academy provides top-tier education for Class 10 Science and Class 11 & 12 Chemistry students. We have successfully taught in reputed schools across Chennai and Delhi.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our teaching approach focuses on conceptual understanding, exam preparation, regular practice, and personalized guidance to help every student achieve excellent academic results. Over the last 5+ years, we have mastered online coaching, bringing the classroom experience directly to your home.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Reputed Schools", desc: "Experience in top Chennai & Delhi schools" },
                { title: "Online Expertise", desc: "5+ years of successful online classes" },
                { title: "Proven Results", desc: "Consistent high scores and centums" },
                { title: "Custom Study Material", desc: "Tailored notes for board exams" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-primary mt-1"><Target size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Approach Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Teaching Methodology</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen size={30} />, title: "Conceptual Clarity", desc: "We build a strong foundation by simplifying complex concepts rather than promoting rote learning." },
              { icon: <Target size={30} />, title: "Exam Preparation", desc: "Strategic focus on previous year questions, important topics, and time management skills." },
              { icon: <Users size={30} />, title: "Personalized Guidance", desc: "Regular feedback sessions and doubt-clearing tailored to individual student needs." }
            ].map((method, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl flex items-center justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
