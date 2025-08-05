import React from 'react';

const Sunny = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
    <g className="text-yellow-400">
      <circle cx="32" cy="32" r="12" className="fill-current" />
      <line x1="32" y1="6" x2="32" y2="12" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="32" y1="52" x2="32" y2="58" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="6" y1="32" x2="12" y2="32" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="52" y1="32" x2="58" y2="32" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="13.4" y1="13.4" x2="17.8" y2="17.8" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="46.2" y1="46.2" x2="50.6" y2="50.6" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="13.4" y1="50.6" x2="17.8" y2="46.2" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
      <line x1="46.2" y1="17.8" x2="50.6" y2="13.4" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'spin 12s linear infinite', transformOrigin: '32px 32px' }}/>
    </g>
    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </svg>
);

const Cloudy = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}>
        <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C5.8,36.5,4,39,4,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C49,39.2,48.1,37.3,46.7,32.2z" className="fill-slate-400 dark:fill-[#B0C4DE]" />
        <path d="M17.8,36.4c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C-22.2,36.5-24,39-24,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C21,39.2,20.1,37.3,17.8,36.4z" className="fill-slate-300 dark:fill-[#E6E6FA]" transform="translate(10, -5) scale(0.8)" />
    </svg>
);

const PartlyCloudy = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}>
        <circle cx="28" cy="26" r="10" className="fill-yellow-400"/>
        <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C5.8,36.5,4,39,4,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C49,39.2,48.1,37.3,46.7,32.2z" className="fill-slate-400 dark:fill-[#B0C4DE]" transform="translate(5, 5)"/>
    </svg>
);

const Rain = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}>
        <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C5.8,36.5,4,39,4,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C49,39.2,48.1,37.3,46.7,32.2z" className="fill-slate-500 dark:fill-[#778899]"/>
        <line x1="22" y1="50" x2="20" y2="58" className="stroke-blue-500 dark:stroke-[#4682B4]" strokeWidth="2" strokeLinecap="round" style={{ animation: 'rain 1s linear infinite' }}/>
        <line x1="32" y1="52" x2="30" y2="60" className="stroke-blue-500 dark:stroke-[#4682B4]" strokeWidth="2" strokeLinecap="round" style={{ animation: 'rain 1s linear infinite .3s' }}/>
        <line x1="42" y1="50" x2="40" y2="58" className="stroke-blue-500 dark:stroke-[#4682B4]" strokeWidth="2" strokeLinecap="round" style={{ animation: 'rain 1s linear infinite .6s' }}/>
        <style>{`@keyframes rain { from { transform: translateY(-5px); opacity: 1; } to { transform: translateY(10px); opacity: 0; } }`}</style>
    </svg>
);

const Snow = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}>
        <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C5.8,36.5,4,39,4,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C49,39.2,48.1,37.3,46.7,32.2z" className="fill-slate-400 dark:fill-[#B0C4DE]"/>
        <circle cx="22" cy="52" r="2" className="fill-slate-300 dark:fill-white" style={{ animation: 'snow 1.5s linear infinite' }}/>
        <circle cx="32" cy="54" r="2" className="fill-slate-300 dark:fill-white" style={{ animation: 'snow 1.5s linear infinite .5s' }}/>
        <circle cx="42" cy="52" r="2" className="fill-slate-300 dark:fill-white" style={{ animation: 'snow 1.5s linear infinite 1s' }}/>
        <style>{`@keyframes snow { from { transform: translateY(-5px) scale(0.8); opacity: 1; } to { transform: translateY(10px) scale(1.2); opacity: 0; } }`}</style>
    </svg>
);

const Thunderstorm = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}>
        <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C5.8,36.5,4,39,4,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C49,39.2,48.1,37.3,46.7,32.2z" className="fill-slate-600 dark:fill-[#483D8B]"/>
        <polygon points="32,44 26,54 38,54 32,64 38,54 26,54" className="fill-yellow-400" style={{ animation: 'flash 0.5s linear infinite .2s' }}/>
         <style>{`@keyframes flash { 50% { opacity: 0; } }`}</style>
    </svg>
);

const Fog = ({ className }) => (
    <svg viewBox="0 0 64 64" className={className}>
      <path d="M46.7,32.2c-0.8,0-1.5,0.1-2.2,0.2c-1.6-6.4-7.2-11.2-14-11.2c-5.1,0-9.6,2.8-12.1,6.9c-0.8-0.3-1.6-0.5-2.5-0.5c-4.4,0-8,3.6-8,8c0,0.2,0,0.3,0,0.5C5.8,36.5,4,39,4,42c0,3.9,3.1,7,7,7h30c4.4,0,8-3.6,8-8C49,39.2,48.1,37.3,46.7,32.2z" className="fill-slate-400 dark:fill-[#B0C4DE]"/>
      <line x1="10" y1="52" x2="54" y2="52" className="stroke-slate-300 dark:stroke-white" strokeWidth="4" strokeLinecap="round" style={{ animation: 'fog 2s ease-in-out infinite alternate' }}/>
      <line x1="15" y1="58" x2="49" y2="58" className="stroke-slate-300 dark:stroke-white" strokeWidth="4" strokeLinecap="round" style={{ animation: 'fog 2s ease-in-out infinite alternate .5s' }}/>
      <style>{`@keyframes fog { from { opacity: 0.4; transform: translateX(-10px); } to { opacity: 0.8; transform: translateX(10px); } }`}</style>
    </svg>
);

const Windy = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className}>
      <path d="M14 36c-4.4 0-8-3.6-8-8s3.6-8 8-8" fill="none" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'wind 2s ease-in-out infinite' }}/>
      <path d="M22 44c-6.6 0-12-5.4-12-12s5.4-12 12-12" fill="none" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'wind 2s ease-in-out infinite .3s' }}/>
      <path d="M30 52c-8.8 0-16-7.2-16-16s7.2-16 16-16" fill="none" className="stroke-current" strokeWidth="3" strokeLinecap="round" style={{ animation: 'wind 2s ease-in-out infinite .6s' }}/>
      <style>{`@keyframes wind { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(20px); opacity: 1; } }`}</style>
  </svg>
);


export const WeatherIcon = ({ condition, className = 'w-full h-full' }) => {
  switch (condition) {
    case 'Sunny':
      return <Sunny className={className} />;
    case 'Cloudy':
      return <Cloudy className={className} />;
    case 'Partly Cloudy':
      return <PartlyCloudy className={className} />;
    case 'Rain':
      return <Rain className={className} />;
    case 'Snow':
      return <Snow className={className} />;
    case 'Thunderstorm':
      return <Thunderstorm className={className} />;
    case 'Fog':
      return <Fog className={className}/>;
    case 'Windy':
        return <Windy className={className}/>;
    default:
      return <Sunny className={className} />;
  }
};
