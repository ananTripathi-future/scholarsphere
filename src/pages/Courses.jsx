import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, FileText, Video, HelpCircle, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: "class-10",
      title: "Class 10 Science",
      subtitle: "Physics, Chemistry & Biology",
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      features: [
        "Complete NCERT syllabus coverage",
        "Detailed chapter-wise notes",
        "Weekly topic-wise tests",
        "Previous year questions practice",
        "Doubt clearing sessions",
        "Online + Offline support"
      ]
    },
    {
      id: "class-11",
      title: "Class 11 Chemistry",
      subtitle: "Physical, Organic & Inorganic",
      color: "bg-blue-500",
      gradient: "from-blue-400 to-blue-600",
      features: [
        "In-depth concept building",
        "Numerical problem-solving strategies",
        "Regular assignments & worksheets",
        "Periodic assessment tests",
        "Focus on school & competitive basics",
        "Recorded lectures available"
      ]
    },
    {
      id: "class-12",
      title: "Class 12 Chemistry",
      subtitle: "Board Exam Mastery",
      color: "bg-purple-500",
      gradient: "from-purple-400 to-purple-600",
      features: [
        "Targeted board exam preparation",
        "Intensive practice of organic reactions",
        "Mock board exams with evaluation",
        "Last-minute revision notes",
        "One-on-one personalized guidance",
        "24/7 WhatsApp doubt support"
      ]
    }
  ];

  return (
    <div className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Comprehensive curriculum designed for excellence in board exams and beyond.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              <div className={`p-8 bg-gradient-to-br ${course.gradient} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
                <h2 className="text-2xl font-bold mb-2 relative z-10">{course.title}</h2>
                <p className="text-white/80 font-medium relative z-10">{course.subtitle}</p>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className={`mt-0.5 shrink-0 text-${course.color.split('-')[1]}-500 dark:text-${course.color.split('-')[1]}-400`} />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-4 text-center rounded-xl font-bold text-white transition-transform hover:scale-105 shadow-lg ${course.color} hover:opacity-90`}>
                  Enroll in {course.title.split(' ')[1]}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Batches Information */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Batch Timings & Availability</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Morning Batch", time: "6:00 AM - 8:00 AM", mode: "Hybrid", icon: <Clock size={24} /> },
              { title: "Evening Batch", time: "5:00 PM - 8:00 PM", mode: "Hybrid", icon: <Clock size={24} /> },
              { title: "Weekend Batch", time: "9:00 AM - 1:00 PM", mode: "Hybrid", icon: <Calendar size={24} /> },
              { title: "Online Batch", time: "Flexible Timings", mode: "Online", icon: <Video size={24} /> }
            ].map((batch, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700">
                <div className="text-primary dark:text-primary-light flex justify-center mb-4">{batch.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{batch.title}</h3>
                <p className="text-sm text-secondary font-semibold mb-2">{batch.time}</p>
                <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
                  {batch.mode}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;
