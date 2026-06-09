import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { IoCallOutline, IoCalendarOutline } from 'react-icons/io5';

// Swiper CSS styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920",
    subtitle: "Your Health & Comfort First",
    title: "Your Journey to Healing Starts with Compassionate Care",
    description: "Welcome to Global Care. We combine leading medical expertise with personalized attention to help you and your loved ones recover in a warm, supportive environment."
  },
  {
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=1920",
    subtitle: "Here for You 24/7",
    title: "Immediate, Expert Emergency Care When It Matters Most",
    description: "With round-the-clock emergency services and rapid-response care teams, we are always ready to support you through critical moments."
  },
  {
    image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1920",
    subtitle: "Advanced Multi-Specialty Care",
    title: "Leading Specialists Dedicated to Your Recovery",
    description: "From routine health checkups to advanced specialist treatments, our integrated medical team works together to ensure your wellness and peace of mind."
  }
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-slate-900">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {({ isActive }) => (
              <>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
                </div>

                {/* Content Container */}
                {isActive && (
                  <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center z-10">
                    <div className="max-w-3xl text-left space-y-4">
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/10 text-teal-300 border border-teal-500/20 inline-block"
                      >
                        {slide.subtitle}
                      </motion.span>
                      
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-2xl"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                        className="pt-2 flex flex-wrap gap-4"
                      >
                        <Link to="/appointment">
                          <Button
                            variant="primary"
                            size="md"
                            icon={<IoCalendarOutline />}
                            className="shadow-lg shadow-primary-500/20"
                          >
                            Book Appointment
                          </Button>
                        </Link>
                        <a href="tel:+919876543210">
                          <Button
                            variant="white"
                            size="md"
                            icon={<IoCallOutline />}
                            className="border border-slate-200"
                          >
                            Emergency: +91 98765 43210
                          </Button>
                        </a>
                      </motion.div>
                    </div>
                  </div>
                )}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
