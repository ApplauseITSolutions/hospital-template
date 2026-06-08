import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = ''
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`flex items-center justify-center space-x-2 mt-8 ${className}`}>
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <IoChevronBack className="text-lg" />
      </button>

      {/* Pages */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
            currentPage === p
              ? 'bg-primary-600 text-white shadow-premium'
              : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <IoChevronForward className="text-lg" />
      </button>
    </div>
  );
};

export default Pagination;
