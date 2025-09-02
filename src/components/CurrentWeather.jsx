import React from "react";
import {
  MapPin,
  Calendar,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
} from "lucide-react";
import dayjs from "dayjs";

export const CurrentWeather = ({ temperature, condition, location, date }) => {
  const getWeatherIcon = (condition) => {
    const iconClass = "h-16 w-16 text-yellow-400";

    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
      case "clear sky":
        return <Sun className={iconClass} />;
      case "cloudy":
      case "clouds":
        return <Cloud className={`${iconClass} text-gray-400`} />;
      case "rainy":
      case "rain":
        return <CloudRain className={`${iconClass} text-blue-400`} />;
      case "snowy":
      case "snow":
        return <CloudSnow className={`${iconClass} text-blue-200`} />;
      default:
        return <Sun className={iconClass} />;
    }
  };

  const getGradientClass = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
      case "clear sky":
        return "from-yellow-400 via-orange-400 to-orange-500";
      case "cloudy":
      case "clouds":
        return "from-gray-400 via-gray-500 to-gray-600";
      case "rainy":
      case "rain":
        return "from-blue-400 via-blue-500 to-blue-600";
      case "snowy":
      case "snow":
        return "from-blue-200 via-blue-300 to-blue-400";
      default:
        return "from-blue-400 via-blue-500 to-blue-600";
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Main Weather Display */}
      <div className="flex justify-center items-center w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600">
        {getWeatherIcon(condition)}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 ">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-2">
          {temperature}°C
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">
          {condition}
        </p>

        <div className="flex items-center space-x-2 mt-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Calendar className="h-4 w-4" />
          <span>{dayjs().format("DD MMMM dddd")}</span>
        </div>
      </div>
    </div>
  );
};
