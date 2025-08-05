import React from 'react';

const Icon = ({ icon, className }) => {
  const icons = {
    thermometer: (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-4.5l-6 6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L9.75 14.25M9 14.25h.008v.008H9v-.008zm6-6h.008v.008H15V8.25z" transform="translate(-2, 2)"/>
      </svg>
    ),
    droplet: (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 16.5A6.75 6.75 0 0012 22.25a6.75 6.75 0 004.5-5.75c0-2.26-1.12-4.29-2.84-5.59A6.74 6.74 0 0012 3.75a6.74 6.74 0 00-3.66 1.16C6.62 6.21 5.5 8.24 5.5 10.5c0 2.26 1.12 4.29 2.84 5.59L7.5 16.5z" />
      </svg>
    ),
    wind: (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5m-16.5 4.5h16.5m-12.75 4.5h12.75m-16.5-13.5h16.5" />
      </svg>
    ),
    sun: (
      <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM12 18V6" />
      </svg>
    ),
  };
  return icons[icon];
}

export const DetailCard = ({ icon, title, value }) => {
  return (
    <div className="p-4 rounded-2xl bg-white/60 dark:bg-black/20 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-lg flex flex-col justify-center items-center text-center">
      <div className="flex items-center text-sm text-slate-600 dark:text-white/80 mb-1">
        <Icon icon={icon} className="w-4 h-4 mr-2" />
        <span>{title}</span>
      </div>
      <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">{value}</p>
    </div>
  );
};
