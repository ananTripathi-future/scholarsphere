import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, BookOpen, FlaskConical } from 'lucide-react';

const ContactSection = ({ title, desc, icon, buttonClass, ringClass, textClass, phone, courses, bgClass }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: courses[0],
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // The hidden admin/approval number
    const ADMIN_WHATSAPP = '916383528758';

    const facultyPhone = phone.replace(/[^0-9]/g, '');

    // The message that will be sent to the faculty when admin clicks approve
    const facultyMessage = `✅ *APPROVED ENQUIRY*\n*Department:* ${title}\n*Student Name:* ${formData.name}\n*Student Phone:* ${formData.phone}\n*Course:* ${formData.course}\n*Message:* ${formData.message}`;
    const approvalLink = `https://wa.me/${facultyPhone}?text=${encodeURIComponent(facultyMessage)}`;

    // The message the student sends to the admin
    const text = `Hello *Anant Tripathi* (Admission Coordinator),

I would like to submit my enquiry details for approval:
*Student Name:* ${formData.name}
*Phone:* ${formData.phone}
*Course:* ${formData.course}
*Message:* ${formData.message}

---
*(Admin Action: Click the link below to verify and forward to the ${title} Faculty)*
${approvalLink}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodedText}`, '_blank');

    setFormData({ name: '', phone: '', course: courses[0], message: '' });
  };

  return (
    <div className={`p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 mb-12 ${bgClass}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 border-b border-gray-200 dark:border-gray-700 pb-8">
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg ${buttonClass}`}>
          {icon}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{desc}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="flex gap-4 items-start">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-white dark:bg-gray-800 shadow-sm ${textClass}`}>
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone & WhatsApp</h4>
              <a 
                href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:underline font-semibold ${textClass}`}
              >
                {phone}
              </a>
            </div>
          </div>
          

        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                 <input required type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${ringClass}`} placeholder="John Doe" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                 <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${ringClass}`} placeholder="+91 63835 28758" />
               </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interested Course</label>
              <select name="course" value={formData.course} onChange={handleChange} className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${ringClass}`}>
                {courses.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
              <textarea required name="message" value={formData.message} onChange={handleChange} rows="3" className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all ${ringClass}`} placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className={`w-full md:w-auto px-8 py-4 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-lg ${buttonClass}`}>
              Submit Enquiry <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Choose your department below to get in touch for admissions and demo classes.
          </p>
          <div className="w-24 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full"></div>
        </div>

        {/* Science & Chemistry Section */}
        <ContactSection 
          title="Science & Chemistry Enquiry"
          desc="For Class 10 Science, Class 11 & 12 Chemistry, and competitive exam preparations."
          icon={<FlaskConical size={40} />}
          buttonClass="bg-blue-600 hover:bg-blue-700"
          ringClass="focus:ring-blue-500"
          textClass="text-blue-600"
          bgClass="bg-blue-50/50 dark:bg-blue-900/10"
          phone="+91 9677195426"
          courses={["Class 10 Science", "Class 11 Chemistry", "Class 12 Chemistry", "Crash Course", "Other Enquiry"]}
        />

        {/* Hindi Tuition Section */}
        <ContactSection 
          title="Hindi Tuition Enquiry"
          desc="For Class 6 to 12 CBSE Hindi Grammar (व्याकरण) & Literature."
          icon={<BookOpen size={40} />}
          buttonClass="bg-orange-600 hover:bg-orange-700"
          ringClass="focus:ring-orange-500"
          textClass="text-orange-600"
          bgClass="bg-orange-50/50 dark:bg-orange-900/10"
          phone="+91 9884880125"
          courses={["Class 6 Hindi", "Class 7 Hindi", "Class 8 Hindi", "Class 9 Hindi", "Class 10 Hindi", "Class 11 Hindi", "Class 12 Hindi", "Other Enquiry"]}
        />

        {/* Global Details */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-300">
              <Clock size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Working Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">Monday - Saturday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 dark:text-gray-400 font-medium">Sunday</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">Closed</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
