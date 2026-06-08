import React from 'react';
import { Link } from 'react-router-dom';
import { IoWarningOutline, IoHomeOutline } from 'react-icons/io5';
import Button from '../../components/common/Button';

const NotFound = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center py-12 px-6 text-center space-y-6">
      <div className="w-24 h-24 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-5xl shadow-sm border border-rose-100 animate-pulse">
        <IoWarningOutline />
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">404 - Page Not Found</h1>
      <p className="text-slate-500 max-w-md leading-relaxed text-sm md:text-base">
        The clinical web resource you are looking for has been relocated or is currently undergoing systems maintenance.
      </p>

      <div className="pt-4">
        <Link to="/">
          <Button variant="primary" icon={<IoHomeOutline />} className="shadow-lg">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
