import React from 'react';
import { Link } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 py-4 text-sm font-medium text-slate-500">
      <Link to="/" className="hover:text-primary-600 transition-colors">
        Home
      </Link>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <IoChevronForward className="text-slate-400 text-xs" />
            {isLast ? (
              <span className="text-primary-600 font-semibold">{item.label}</span>
            ) : (
              <Link to={item.path} className="hover:text-primary-600 transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
