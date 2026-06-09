import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoShieldCheckmarkOutline, IoPeopleOutline, IoStarOutline, IoMedkitOutline, IoCall, IoCalendarOutline, IoArrowForwardOutline, IoAddCircleOutline } from 'react-icons/io5';
import { FaStethoscope, FaUserMd } from 'react-icons/fa';
import HeroSlider from '../../components/ui/HeroSlider';
import SectionTitle from '../../components/ui/SectionTitle';
import DepartmentCard from '../../components/ui/DepartmentCard';
import DoctorCard from '../../components/ui/DoctorCard';
import TestimonialSlider from '../../components/ui/TestimonialSlider';
import FAQAccordion from '../../components/ui/FAQAccordion';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

import { DEPARTMENTS, DOCTORS, TESTIMONIALS, BLOGS, FAQS, INSURANCE_PARTNERS } from '../../data/dummyData';

// Custom high-performance counter animation hook optimized for large numbers
const AnimatedCounter = ({ endValue, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numericStr = endValue.toString().replace(/[^0-9]/g, '');
    const end = parseInt(numericStr, 10);
    if (isNaN(end)) {
      setCount(endValue);
      return;
    }

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * end);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [endValue, duration]);

  const formatNumber = (num) => {
    if (typeof num !== 'number') return num;
    return num.toLocaleString();
  };

  return (
    <span className="font-semibold text-3xl md:text-4xl text-slate-800 tracking-tight block">
      {formatNumber(count)}{suffix}
    </span>
  );
};

// Floating background hexagon shape
const FloatingHexagon = ({ className, size = 60, delay = 0, duration = 12, filled = false, driftX = 10, driftY = 15 }) => {
  return (
    <motion.div
      className={`absolute text-slate-200 pointer-events-none ${className}`}
      style={{ opacity: filled ? 0.35 : 0.5 }}
      animate={{
        y: [0, -driftY, driftY / 2, -driftY, 0],
        x: [0, driftX, -driftX / 2, driftX, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon 
          points="50,5 93,30 93,80 50,105 7,80 7,30" 
          fill={filled ? "currentColor" : "none"} 
          stroke={filled ? "none" : "currentColor"} 
          strokeWidth="2.5"
        />
      </svg>
    </motion.div>
  );
};

// Constellation particle background animation with mouse interaction
const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(canvas.width / 20), 45);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((p) => {
        // Active mouse interaction: gentle attraction to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            p.x += dx * 0.015;
            p.y += dy * 0.015;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        // Draw lines from particle to mouse cursor if close
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * 0.22;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.11;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    draw();

    return () => {
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
            alt="Global Care Hospital Infrastructure"
            className="w-full h-[450px] object-cover rounded-3xl shadow-premium border border-slate-100"
          />
          <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-3xl hidden md:block max-w-xs shadow-xl">
            <h4 className="font-bold text-lg mb-1">Accredited Excellence</h4>
            <p className="text-xs text-teal-50">Empanelled with international JCI standards for clinical care hygiene and safety protocols.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-100 text-primary-800">
            About Our Institution
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            Pioneering Medical Excellence. Caring for Generations.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            For over two decades, Global Care Multi-Speciality Hospital has been at the forefront of medical care. We integrate surgical innovations, diagnostic research, and patient-first services to provide complete recovery setups.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our institution houses modern technology platforms, specialized critical care corridors, and standard operating cleanrooms to ensure optimal treatment success.
          </p>
          <div className="pt-2 flex gap-4">
            <Link to="/about">
              <Button variant="primary" icon={<IoArrowForwardOutline />} iconPosition="right">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3 & 4. WHY CHOOSE GLOBAL CARE & STATISTICS COUNTERS */}
      <section className="bg-gradient-to-b from-[#003865] to-[#005086] pt-16 pb-32 px-6 relative overflow-hidden">
        <ConstellationBackground />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3.5xl font-semibold text-white tracking-widest uppercase">
              Why Choose Global Care?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white mb-8">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#004b87] border border-white/10 flex items-center justify-center text-white text-xl">
                  <FaStethoscope />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-wide">World-Class Quality</h3>
              <p className="text-sm text-white/80 max-w-sm leading-relaxed">
                Global Care is designed to meet national and international healthcare requirements and is committed to patients first.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#004b87] border border-white/10 flex items-center justify-center text-white text-xl">
                  <FaUserMd />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-wide">Multispeciality Expertise</h3>
              <p className="text-sm text-white/80 max-w-sm leading-relaxed">
                The hospital brings together an expert team of specialists who collaborate with caring nurses to provide accurate diagnosis and medical care to patients.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#004b87] border border-white/10 flex items-center justify-center text-white text-xl">
                  <IoAddCircleOutline />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-wide">State-Of-The-Art Infrastructure</h3>
              <p className="text-sm text-white/80 max-w-sm leading-relaxed">
                The hospital has state-of-the-art technological infrastructure and medical facilities that make medical care healthier, better, and more comprehensive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING STATS CARD */}
      <section className="px-6 relative -mt-24 z-20">
        <div className="max-w-6xl mx-auto">
          <div 
            className="bg-white rounded-[2rem] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] p-10 md:py-16 md:px-12 border border-slate-100 relative overflow-hidden"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104' viewBox='0 0 60 104'%3E%3Cpath d='M30 0 L60 17.3 L60 52 L30 69.3 L0 52 L0 17.3 Z M30 52 L60 69.3 L60 104 L30 121.3 L0 104 L0 69.3 Z' fill='none' stroke='%23f8fafc' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 104px'
            }}
          >
            {/* Drifting Background Hexagons for "moving item" effect */}
            {/* Group 1: Left side cluster */}
            <FloatingHexagon size={120} className="top-[-30px] left-[2%] text-slate-100" delay={0} duration={16} filled={true} driftX={8} driftY={12} />
            <FloatingHexagon size={85} className="top-[30px] left-[8%] text-slate-200" delay={1.5} duration={14} driftX={12} driftY={8} />
            <FloatingHexagon size={60} className="bottom-[10px] left-[5%] text-slate-200" delay={3} duration={12} driftX={6} driftY={10} />

            {/* Group 2: Center side cluster */}
            <FloatingHexagon size={100} className="bottom-[20px] left-[35%] text-slate-100" delay={2} duration={18} filled={true} driftX={10} driftY={14} />
            <FloatingHexagon size={80} className="top-[-10px] left-[45%] text-slate-200" delay={4.5} duration={15} driftX={8} driftY={10} />
            <FloatingHexagon size={70} className="top-[40px] left-[38%] text-slate-200" delay={1} duration={13} driftX={11} driftY={7} />

            {/* Group 3: Right side cluster */}
            <FloatingHexagon size={130} className="bottom-[-40px] right-[2%] text-slate-100" delay={0.5} duration={20} filled={true} driftX={14} driftY={18} />
            <FloatingHexagon size={90} className="top-[20px] right-[8%] text-slate-200" delay={3.5} duration={16} driftX={9} driftY={11} />
            <FloatingHexagon size={60} className="bottom-[20px] right-[18%] text-slate-200" delay={2.5} duration={11} driftX={7} driftY={9} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-center relative z-10">
              {/* Column 1 */}
              <div className="flex flex-col gap-10 md:gap-12 justify-center">
                <div className="space-y-1">
                  <AnimatedCounter endValue="350" suffix="+" />
                  <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest">Beds</p>
                </div>
                <div className="space-y-1">
                  <AnimatedCounter endValue="62" suffix="+" />
                  <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest">Specialities</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-10 md:gap-12 justify-center border-y md:border-y-0 md:border-x border-slate-100 py-8 md:py-0">
                <div className="space-y-1">
                  <AnimatedCounter endValue="1317" suffix="+" />
                  <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest">Staff</p>
                </div>
                <div className="space-y-1">
                  <AnimatedCounter endValue="18223" suffix="+" />
                  <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest">Inpatients Annually</p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-10 md:gap-12 justify-center">
                <div className="space-y-1">
                  <AnimatedCounter endValue="759" suffix="+" />
                  <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest">Doctors</p>
                </div>
                <div className="space-y-1">
                  <AnimatedCounter endValue="119424" suffix="+" />
                  <p className="text-xs md:text-sm font-semibold text-slate-400 uppercase tracking-widest">OPD Patients Annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEPARTMENTS OVERVIEW */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Clinical Divisions"
          title="Explore Our Core Departments"
          description="We provide comprehensive diagnoses and surgical capabilities across a wide range of disciplines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DEPARTMENTS.slice(0, 4).map((dept) => (
            <DepartmentCard key={dept.id} dept={dept} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/departments">
            <Button variant="outline">View All Specialties</Button>
          </Link>
        </div>
      </section>

      {/* 6. FEATURED DOCTORS */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Expert Clinicians"
            title="Consult Our Renowned Specialists"
            description="Our doctors possess global fellowships and clinical skills to deliver ideal health outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.slice(0, 4).map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/doctors">
              <Button variant="outline">Search Doctor Catalog</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. EMERGENCY & AMBULANCE SERVICES */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 py-16 px-6 text-white text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">24/7 Support</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Need Urgent Medical Assistance?</h2>
            <p className="text-rose-100 max-w-2xl">
              Get immediate dispatch of advanced life support ambulances. Staffed with paramedics and emergency resuscitation technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919876543210">
              <Button variant="white" size="lg" icon={<IoCall className="text-red-600" />}>
                Call Now: +91 98765 43210
              </Button>
            </a>
            <Link to="/appointment">
              <Button variant="outline" size="lg" className="!text-white hover:bg-white/10 !border-white">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Patient Testimonials"
            title="Stories of Healing & Recovery"
            description="Read inspiring recovery success stories shared directly by our clinical care recipients."
          />

          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* 9. LATEST BLOGS */}
      <section className="bg-slate-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Health Bulletin"
            title="Read Latest Medical Blogs"
            description="Stay updated with insights, nutrition charts, and disease prevention updates written by our specialists."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <Card key={blog.id} className="flex flex-col h-full !p-0 overflow-hidden bg-white border border-slate-100">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-2 inline-block">
                    {blog.category}
                  </span>
                  <h3 className="font-bold text-slate-800 text-lg mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow">{blog.summary}</p>
                  <Link to="/blog" className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 mt-auto">
                    Read Full Article <IoArrowForwardOutline />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INSURANCE PARTNERS */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <SectionTitle
            subtitle="Trusted Insurance Networks"
            title="Our Cashless Insurance Partners"
            description="We support major health insurance networks and TPAs to facilitate a smooth, stress-free cashless hospital admission and billing process."
          />
        </div>
        <div className="w-full">
          <div className="relative w-full overflow-hidden py-4">
            {/* Soft fade effect on left and right */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity
              }}
            >
              {/* Double the array for seamless infinite looping */}
              {[...INSURANCE_PARTNERS, ...INSURANCE_PARTNERS].map((partner, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center h-24 md:h-28 w-48 md:w-56 p-4 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:border-primary-100 hover:scale-105 transition-all duration-300"
                >
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Help Desk"
            title="Frequently Asked Questions"
            description="Find answers to common queries regarding admissions, cashless insurance, and patient records."
          />

          <FAQAccordion faqs={FAQS} />
        </div>
      </section>
    </div>
  );
};

export default Home;
