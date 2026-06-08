import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp, IoCall, IoCalendarOutline, IoArrowUpOutline } from 'react-icons/io5';

const FloatingElements = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* 1. Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <IoLogoWhatsapp className="text-2xl" />
      </a>

      {/* 2. Floating Call Button */}
      <a
        href="tel:+919876543210"
        className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300"
        title="Call Support"
      >
        <IoCall className="text-xl" />
      </a>

      {/* 3. Floating Appointment Button */}
      <Link
        to="/appointment"
        className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700 text-white flex items-center justify-center shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 transition-all duration-300"
        title="Book Appointment"
      >
        <IoCalendarOutline className="text-xl" />
      </Link>

      {/* 4. Scroll To Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-slate-800/95 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-700 animate-in fade-in zoom-in duration-300"
          title="Scroll to Top"
        >
          <IoArrowUpOutline className="text-xl animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default FloatingElements;
