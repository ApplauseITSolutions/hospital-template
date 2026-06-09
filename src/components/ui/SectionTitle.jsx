import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  white = false
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col mb-6 max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignClasses[align]}`}
    >
      {subtitle && (
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-100 text-primary-800 mb-5 inline-block">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${white ? 'text-white' : 'text-slate-900'} mb-4`}>
        {title}
      </h2>
      <div className={`w-16 h-1 bg-gradient-to-r from-primary-500 to-teal-500 rounded-full ${description ? 'mb-4' : ''}`} />
      {description && (
        <p className={`text-base md:text-lg ${white ? 'text-slate-200' : 'text-slate-600'} leading-relaxed`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
