import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/common/Loader';

// Lazy loading pages
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Departments = lazy(() => import('../pages/Departments/Departments'));
const Doctors = lazy(() => import('../pages/Doctors/Doctors'));
const Appointment = lazy(() => import('../pages/Appointment/Appointment'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Services = lazy(() => import('../pages/Services/Services'));
const Gallery = lazy(() => import('../pages/Gallery/Gallery'));
const Testimonial = lazy(() => import('../pages/Testimonial/Testimonial'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Careers = lazy(() => import('../pages/Careers/Careers'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const FAQ = lazy(() => import('../pages/FAQ/FAQ'));
const Privacy = lazy(() => import('../pages/Privacy/Privacy'));
const Terms = lazy(() => import('../pages/Privacy/Terms'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader fullPage />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
