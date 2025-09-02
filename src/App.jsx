import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeatherMetrics } from "./components/WeatherMetrics";
import { ForecastSection } from "./components/ForecastSection";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useWeatherData } from "./hooks/useWeatherData";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  const { weatherData, loading, error, refetch } = useWeatherData(currentCity);

  // 🔹 Get location name
  async function getLocationName(lat, lon) {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await res.json();
    return data;
  }

  // 🔹 Detect current location & update city
  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const location = await getLocationName(latitude, longitude);
        const city =
          location.address.city ||
          location.address.town ||
          location.address.village ||
          "";
        if (city) {
          setCurrentCity(city);
          refetch(city);
        }
      },
      (err) => console.error("Error:", err.message)
    );
  };

  // 🔹 Initial mount: detect location if no city is set
  useEffect(() => {
    if (!currentCity) detectLocation();
  }, [currentCity]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setCurrentCity(searchQuery.trim());
      refetch(searchQuery.trim());
      setSearchQuery("");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header
          isDark={isDark}
          onThemeToggle={toggleTheme}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearch={handleSearch}
          onDetectLocation={detectLocation} // ✅ Pass function
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header
          isDark={isDark}
          onThemeToggle={toggleTheme}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearch={handleSearch}
          onDetectLocation={detectLocation} // ✅ Pass function
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400 text-lg mb-4">
              {error || "Failed to load weather data"}
            </p>
            <button
              onClick={() => refetch(currentCity)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header
        isDark={isDark}
        onThemeToggle={toggleTheme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
        onDetectLocation={detectLocation} // ✅ Pass function
      />

      <main className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4">
          Today Overview
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-4 w-full mt-4">
          {/* Current Weather */}
          <div className="w-full md:w-[25%]">
            <CurrentWeather {...weatherData.current} />
          </div>

          {/* Weather Metrics */}
          <div className="w-full md:w-[50%]">
            <WeatherMetrics {...weatherData.metrics} />
          </div>

          {/* Another Current Weather (example) */}
          <div className="w-full md:w-[25%]">
            <CurrentWeather {...weatherData.current} />
          </div>
        </div>

        {/* Forecast */}
        <ForecastSection forecast={weatherData.forecast} />
      </main>

      <footer className="mt-16 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Weather data provided by OpenWeather API
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
