import React from 'react';

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-slate-400 dark:border-sky-400"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-slate-600 dark:text-white">
            <svg viewBox="0 0 64 64" className="stroke-current">
                <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9" fill="none" strokeWidth="4" strokeLinecap="round" />
            </svg>
        </div>
      </div>
    </div>
  );
};
