import React from 'react';

const Loader = ({ fullPage = false }) => {
  const loaderEl = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary-600 border-t-transparent animate-spin"></div>
      </div>
      <p className="text-primary-800 font-semibold animate-pulse text-sm">Loading Care Portal...</p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md">
        {loaderEl}
      </div>
    );
  }

  return (
    <div className="py-12 flex justify-center items-center">
      {loaderEl}
    </div>
  );
};

export default Loader;
