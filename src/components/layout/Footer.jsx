import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoPaperPlaneOutline } from 'react-icons/io5';
import Button from '../common/Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Hospital */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              G
            </div>
            <div>
              <span className="block font-black text-lg text-white tracking-tight leading-none">GLOBAL CARE</span>
              <span className="block text-[10px] font-bold text-teal-400 tracking-widest uppercase mt-0.5">Multi-Speciality</span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Global Care Multi-Speciality Hospital is dedicated to delivering medical excellence and comprehensive healthcare solutions with compassion and advanced treatment methodologies.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center text-base"><IoLogoFacebook /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center text-base"><IoLogoTwitter /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center text-base"><IoLogoLinkedin /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center text-base"><IoLogoInstagram /></a>
          </div>
        </div>

        {/* Quick Links & Departments */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-teal-400 transition-colors">Doctors</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-400 transition-colors">Gallery</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Specialities</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Cardiology</Link></li>
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Neurology</Link></li>
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Orthopedics</Link></li>
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Pediatrics</Link></li>
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Gynecology</Link></li>
              <li><Link to="/departments" className="hover:text-teal-400 transition-colors">Oncology</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Contact Info</h4>
          <ul className="space-y-3.5 text-sm text-slate-400">
            <li className="flex gap-3 items-start">
              <IoLocationOutline className="text-teal-400 text-lg flex-shrink-0 mt-0.5" />
              <span>123 Healthcare Avenue, Medical District, Pune, Maharashtra, India</span>
            </li>
            <li className="flex gap-3 items-center">
              <IoCallOutline className="text-teal-400 text-lg flex-shrink-0" />
              <a href="tel:+919876543210" className="hover:text-teal-400 transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex gap-3 items-center">
              <IoMailOutline className="text-teal-400 text-lg flex-shrink-0" />
              <a href="mailto:info@globalcarehospital.com" className="hover:text-teal-400 transition-colors">info@globalcarehospital.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-wider text-xs">Newsletter</h4>
          <p className="text-sm text-slate-400">
            Subscribe to our weekly health bulletin and get critical updates on medical science directly.
          </p>
          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-full px-5 py-3 text-sm text-white focus:outline-none focus:border-teal-500 pr-12"
              required
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full bg-primary-600 hover:bg-primary-500 text-white flex items-center justify-center transition-colors"
            >
              <IoPaperPlaneOutline />
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-teal-400 font-medium animate-pulse">
              Thank you! You have subscribed to our newsletter.
            </p>
          )}
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Global Care Multi-Speciality Hospital. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
