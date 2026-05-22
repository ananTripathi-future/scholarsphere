import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Trophy, Medal } from 'lucide-react';

const Results = () => {
  const testimonials = [
    {
      name: "Rahul S.",
      role: "Class 12 Student (Scored 98/100 in Chemistry)",
      image: "https://i.pravatar.cc/150?img=11",
      text: "The conceptual clarity I got here helped me crack even the toughest organic chemistry questions. The weekly tests were a game changer for my board preparation."
    },
    {
      name: "Priya M.",
      role: "Class 10 Student (Centum in Science)",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Science was my weakest subject, but the way topics were explained made it so interesting. The notes provided are strictly NCERT based and very concise."
    },
    {
      name: "Mr. Venkat",
      role: "Parent of Class 12 Student",
      image: "https://i.pravatar.cc/150?img=8",
      text: "We opted for the online batch and were initially skeptical. But the individual attention given to my son was remarkable. Highly recommend ScholarSphere."
    }
  ];

  const topScorers = [
    { name: "Arjun K.", score: "100/100", subject: "Class 10 Science" },
    { name: "Sneha R.", score: "99/100", subject: "Class 12 Chemistry" },
    { name: "Vikram T.", score: "98/100", subject: "Class 11 Chemistry" },
    { name: "Ananya P.", score: "100/100", subject: "Class 10 Science" }
  ];

  return (
    <div className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Results & Testimonials</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Our students' success stories are our biggest achievements.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Top Scorers Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-500" size={32} /> Hall of Fame
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {topScorers.map((scorer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-bl-xl">
                  <Medal size={20} />
                </div>
                <div className="text-3xl font-extrabold text-primary dark:text-primary-light mb-2 mt-4">{scorer.score}</div>
                <div className="font-bold text-gray-900 dark:text-white">{scorer.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{scorer.subject}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">What Students & Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl relative"
              >
                <div className="absolute top-6 right-8 text-gray-200 dark:text-gray-700">
                  <Quote size={40} />
                </div>
                <div className="mb-6 flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-primary dark:text-primary-light">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Results;
