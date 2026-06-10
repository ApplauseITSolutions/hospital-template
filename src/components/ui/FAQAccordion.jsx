import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-premium transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between py-4 px-6 text-left focus:outline-none"
            >
              <span className="font-semibold text-slate-800 md:text-lg pr-4">{faq.question}</span>
              <span className={`p-1.5 rounded-full ${isOpen ? 'bg-primary-50 text-primary-600' : 'bg-slate-50 text-slate-400'} transition-colors duration-300`}>
                {isOpen ? <IoRemoveOutline className="text-xl" /> : <IoAddOutline className="text-xl" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 pt-0 border-t border-slate-100 text-slate-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
