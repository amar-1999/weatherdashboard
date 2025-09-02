import React from "react";
import { Wind, Droplets, Gauge, Eye, Sunrise, Sunset } from "lucide-react";

export const WeatherMetrics = ({
  windSpeed,
  humidity,
  pressure,
  visibility,
  sunrise,
  sunset,
}) => {
  const metrics = [
    {
      label: "Wind Speed",
      value: windSpeed.toString(),
      unit: "km/h",
      icon: <Wind className="h-6 w-6 text-blue-500" />,
    },
    {
      label: "Humidity",
      value: humidity.toString(),
      unit: "%",
      icon: <Droplets className="h-6 w-6 text-blue-400" />,
    },
    {
      label: "Pressure",
      value: pressure.toString(),
      unit: "hPa",
      icon: <Gauge className="h-6 w-6 text-purple-500" />,
    },
    {
      label: "Visibility",
      value: visibility.toString(),
      unit: "km",
      icon: <Eye className="h-6 w-6 text-green-500" />,
    },
    {
      label: "Sunrise",
      value: sunrise,
      icon: <Sunrise className="h-6 w-6 text-orange-500" />,
    },
    {
      label: "Sunset",
      value: sunset,
      icon: <Sunset className="h-6 w-6 text-red-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-xl">
              {metric.icon}
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {metric.label}
            </span>
          </div>

          <div className="flex items-baseline space-x-1">
            <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {metric.value}
            </span>
            {metric.unit && (
              <span className="text-lg text-gray-500 dark:text-gray-400">
                {metric.unit}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
