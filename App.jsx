import React, { useState, useEffect, useCallback } from 'react';
import { getWeatherData } from './services/weatherService.js';
import { SearchBar } from './components/SearchBar.jsx';
import { WeatherIcon } from './components/WeatherIcon.jsx';
import { DetailCard } from './components/DetailCard.jsx';
import { ForecastCard } from './components/ForecastCard.jsx';
import { Loader } from './components/Loader.jsx';
import { ThemeToggle } from './components/ThemeToggle.jsx';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Tokyo');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const handleToggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const fetchWeather = useCallback(async (location) => {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await getWeatherData(location);
      setWeatherData(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather(city);
  }, [fetchWeather, city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
    fetchWeather(newCity);
  };

  const getMainWeatherCondition = () => {
      if (isLoading || !weatherData) return "Sunny"; // Default for loading/initial state
      return weatherData.current.condition;
  }
  
  const getGradientClass = (condition) => {
      // This will only be applied in dark mode
      switch(condition) {
          case 'Sunny':
              return 'dark:from-sky-400 dark:to-blue-600';
          case 'Cloudy':
          case 'Partly Cloudy':
          case 'Fog':
              return 'dark:from-slate-500 dark:to-gray-700';
          case 'Rain':
          case 'Thunderstorm':
              return 'dark:from-slate-700 dark:to-gray-900';
          case 'Snow':
              return 'dark:from-sky-300 dark:to-slate-500';
          case 'Windy':
              return 'dark:from-cyan-500 dark:to-indigo-600';
          default:
              return 'dark:from-slate-800 dark:to-gray-900';
      }
  }

  return (
    <main className={`min-h-screen w-full bg-slate-100 dark:bg-gradient-to-br ${getGradientClass(getMainWeatherCondition())} p-4 sm:p-6 lg:p-8 text-slate-800 dark:text-white transition-colors duration-1000`}>
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Weather: The Climate</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-full max-w-xs">
                <SearchBar onSearch={handleSearch} initialValue={city} />
            </div>
            <ThemeToggle theme={theme} onToggle={handleToggleTheme} />
          </div>
        </header>

        <div className="transition-opacity duration-500 ease-in-out">
          {isLoading && <Loader />}
          {error && !isLoading && (
            <div className="text-center bg-red-100 text-red-700 dark:bg-red-500/50 dark:text-white p-6 rounded-2xl border border-red-200 dark:border-white/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Error</h2>
                <p>{error}</p>
            </div>
          )}
          {weatherData && !isLoading && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Weather Display */}
              <div className="lg:col-span-2 p-6 rounded-2xl bg-white/70 dark:bg-black/20 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{weatherData.city}, {weatherData.country}</h2>
                      <p className="text-lg text-slate-600 dark:text-white/80">{weatherData.current.description}</p>
                    </div>
                    <div className="text-6xl sm:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white">
                      {Math.round(weatherData.current.temperature)}°
                    </div>
                  </div>
                  <div className="w-32 h-32 sm:w-48 sm:h-48 mx-auto my-4">
                    <WeatherIcon condition={weatherData.current.condition} />
                  </div>
                </div>
                <div className="text-center mt-4">
                    <p className="text-lg font-medium italic text-slate-700 dark:text-white/90">"{weatherData.advice.summary}"</p>
                    <p className="text-md text-slate-600 dark:text-white/80 mt-1">Wear: {weatherData.advice.whatToWear}</p>
                </div>
              </div>
              
              {/* Weather Details */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <DetailCard icon="thermometer" title="Feels Like" value={`${Math.round(weatherData.current.feelsLike)}°`} />
                <DetailCard icon="droplet" title="Humidity" value={`${weatherData.current.humidity}%`} />
                <DetailCard icon="wind" title="Wind Speed" value={`${weatherData.current.windSpeed} km/h`} />
                <DetailCard icon="sun" title="Today's High" value={`${Math.round(weatherData.forecast[0].high)}°`} />
              </div>
              
              {/* 7-Day Forecast */}
              <div className="lg:col-span-3 p-6 rounded-2xl bg-white/70 dark:bg-black/20 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-lg">
                 <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">7-Day Forecast</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
                    {weatherData.forecast.map((day, index) => (
                        <ForecastCard key={index} day={day.day} condition={day.condition} high={day.high} low={day.low} />
                    ))}
                 </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default App;
