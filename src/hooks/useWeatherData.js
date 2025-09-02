import { useState, useEffect } from 'react';
import { getWeatherDataForCity } from '../data/mockWeatherData';

export const useWeatherData = (initialCity = 'Istanbul') => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const data = getWeatherDataForCity(city);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData(initialCity);
  }, [initialCity]);

  return {
    weatherData,
    loading,
    error,
    refetch: fetchWeatherData
  };
};