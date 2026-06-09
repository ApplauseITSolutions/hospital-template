import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoCallOutline, IoMailOutline, IoTimeOutline, IoChevronDownOutline, IoMenuOutline, IoCloseOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';
import Button from '../common/Button';
import { DEPARTMENTS } from '../../data/dummyData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full relative z-40">
      {/* 1. TOP BAR */}
      <div className="bg-primary-900 text-white text-xs py-2 px-6 hidden lg:flex justify-between items-center border-b border-primary-800">
        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
            <IoCallOutline className="text-teal-400 text-sm" />
            <span className="font-semibold">Emergency Helpline: +91 98765 43210</span>
          </a>
          <a href="mailto:info@globalcarehospital.com" className="flex items-center gap-1.5 hover:text-teal-300 transition-colors">
            <IoMailOutline className="text-teal-400 text-sm" />
            <span>info@globalcarehospital.com</span>
          </a>
          <div className="flex items-center gap-1.5 text-slate-300">
            <IoTimeOutline className="text-teal-400 text-sm" />
            <span>Mon - Sat: 08:00 AM - 08:00 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">Follow us:</span>
          <div className="flex gap-2.5">
            <a href="#" className="hover:text-teal-300 transition-colors text-sm"><IoLogoFacebook /></a>
            <a href="#" className="hover:text-teal-300 transition-colors text-sm"><IoLogoTwitter /></a>
            <a href="#" className="hover:text-teal-300 transition-colors text-sm"><IoLogoLinkedin /></a>
            <a href="#" className="hover:text-teal-300 transition-colors text-sm"><IoLogoInstagram /></a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Sticky support) */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'relative bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              G
            </div>
            <div>
              <span className="block font-black text-lg text-slate-800 tracking-tight leading-none">GLOBAL CARE</span>
              <span className="block text-[10px] font-bold text-teal-600 tracking-widest uppercase mt-0.5">Multi-Speciality</span>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-[15px] text-slate-600">
            <NavLink to="/" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              About
            </NavLink>
            
            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-primary-600 transition-colors focus:outline-none py-2">
                Departments <IoChevronDownOutline className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* MEGA MENU */}
              {isMegaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-3xl shadow-2xl p-6 grid grid-cols-3 gap-4 border border-slate-100 glassmorphism animate-in fade-in slide-in-from-top-2 duration-350">
                  <div className="col-span-3 pb-3 mb-2 border-b border-slate-50 flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Our Clinical Specialities</span>
                    <Link to="/departments" className="text-xs text-primary-600 hover:underline font-semibold">View All Departments &rarr;</Link>
                  </div>
                  {DEPARTMENTS.slice(0, 9).map((dept) => (
                    <Link
                      key={dept.id}
                      to="/departments"
                      className="group p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                    >
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-primary-600 transition-colors">{dept.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">{dept.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/doctors" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Doctors
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Gallery
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `hover:text-primary-600 transition-colors ${isActive ? 'text-primary-600 font-bold' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Quick Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="!rounded-xl border-slate-200 text-slate-700 hover:bg-slate-50">
                Patient Login
              </Button>
            </Link>
            <Link to="/appointment">
              <Button variant="primary" size="sm" className="!rounded-xl shadow-md">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl p-1 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>

      {/* 3. MOBILE MENU BAR */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-white pt-20 px-6 flex flex-col justify-between pb-8 overflow-y-auto animate-in fade-in duration-300">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-slate-700">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>About Us</NavLink>
            <NavLink to="/departments" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Departments</NavLink>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Doctors</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Services</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Gallery</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Blog</NavLink>
            <NavLink to="/careers" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Careers</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary-600' : ''}>Contact</NavLink>
          </nav>

          <div className="flex flex-col gap-3 mt-8">
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full justify-center !rounded-xl">Patient Login</Button>
            </Link>
            <Link to="/appointment" className="w-full">
              <Button variant="primary" className="w-full justify-center !rounded-xl shadow-md">Book Appointment</Button>
            </Link>
            
            <div className="text-center text-xs text-slate-400 mt-6 space-y-1">
              <p>Emergency: +91 98765 43210</p>
              <p>Mon - Sat: 08:00 AM - 08:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
