import React from 'react';
import { WeatherIcon } from './WeatherIcon.jsx';

export const ForecastCard = ({ day, condition, high, low }) => {
  return (
    <div className="p-3 rounded-2xl bg-white/50 dark:bg-white/10 flex flex-col items-center text-center space-y-2">
      <p className="font-semibold text-sm text-slate-700 dark:text-white">{day.substring(0, 3)}</p>
      <div className="w-10 h-10">
        <WeatherIcon condition={condition} />
      </div>
      <div className="text-sm">
        <span className="font-bold text-slate-800 dark:text-white">{Math.round(high)}°</span>
        <span className="text-slate-500 dark:text-white/70 ml-1">{Math.round(low)}°</span>
      </div>
    </div>
  );
};
