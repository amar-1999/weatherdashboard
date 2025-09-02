import React from 'react';
import { Sun, Cloud, CloudRain, CloudSnow } from 'lucide-react';

export const ForecastCard = ({
  forecast,
  isActive = false,
  onClick
}) => {
  const getWeatherIcon = (condition) => {
    const iconClass = "h-5 w-5";
    
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className={`${iconClass} text-yellow-500`} />;
      case 'cloudy':
      case 'clouds':
        return <Cloud className={`${iconClass} text-gray-500`} />;
      case 'rainy':
      case 'rain':
        return <CloudRain className={`${iconClass} text-blue-500`} />;
      case 'snowy':
      case 'snow':
        return <CloudSnow className={`${iconClass} text-blue-300`} />;
      default:
        return <Sun className={`${iconClass} text-yellow-500`} />;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        p-3 md:p-4 rounded-xl border transition-all duration-200 text-left w-full
        ${isActive 
          ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 shadow-lg' 
          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600'
        }
        hover:-translate-y-0.5
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          {forecast.date}
        </span>
        {getWeatherIcon(forecast.condition)}
      </div>
      
      <div className="space-y-1">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {forecast.time}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {forecast.temperature}°C
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
            {forecast.condition}
          </span>
        </div>
      </div>
    </button>
  );
};