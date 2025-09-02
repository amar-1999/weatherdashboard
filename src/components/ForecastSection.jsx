import React, { useState } from "react";
import { ForecastCard } from "./ForecastCard";

export const ForecastSection = ({ forecast }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  const days = [
    "All Days",
    "28 Aug Mon",
    "29 Aug Tue",
    "30 Aug Wed",
    "31 Aug Thu",
    "1 Sep Fri",
    "2 Sep Sat",
  ];

  const filteredForecast =
    selectedDay === 0
      ? forecast
      : forecast.filter((item) =>
          item.date.includes(days[selectedDay]?.split(" ")[1] || "")
        );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 mt-8">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
        Next 5 Days
      </h2>

      {/* Day Filter Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`
              px-3 md:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200
              ${
                selectedDay === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Forecast Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
        {filteredForecast.map((item, index) => (
          <ForecastCard key={index} forecast={item} />
        ))}
      </div>
    </div>
  );
};
