export const mockWeatherData = {
  current: {
    temperature: 28.6,
    condition: 'Clear Sky',
    location: 'Istanbul',
    date: '28 August Monday'
  },
  metrics: {
    windSpeed: 28,
    humidity: 48,
    pressure: 1008,
    visibility: 10,
    sunrise: '06:26',
    sunset: '19:44'
  },
  forecast: [
    { date: '28 Aug Mon', time: '18:00', temperature: 28.6, condition: 'clear' },
    { date: '28 Aug Mon', time: '21:00', temperature: 27.3, condition: 'clear' },
    { date: '29 Aug Tue', time: '00:00', temperature: 25.5, condition: 'clear' },
    { date: '29 Aug Tue', time: '03:00', temperature: 23.3, condition: 'clear' },
    { date: '29 Aug Tue', time: '06:00', temperature: 22.8, condition: 'clear' },
    { date: '29 Aug Tue', time: '09:00', temperature: 24.9, condition: 'sunny' },
    { date: '29 Aug Tue', time: '12:00', temperature: 28.1, condition: 'clear' },
    { date: '29 Aug Tue', time: '15:00', temperature: 30.7, condition: 'clear' },
    { date: '29 Aug Tue', time: '18:00', temperature: 28.5, condition: 'clear' },
    { date: '29 Aug Tue', time: '21:00', temperature: 25.4, condition: 'clear' },
    { date: '30 Aug Wed', time: '00:00', temperature: 24.7, condition: 'clear' },
    { date: '30 Aug Wed', time: '03:00', temperature: 23.9, condition: 'clear' },
    { date: '30 Aug Wed', time: '06:00', temperature: 23.4, condition: 'clear' },
    { date: '30 Aug Wed', time: '09:00', temperature: 24.9, condition: 'sunny' },
    { date: '30 Aug Wed', time: '12:00', temperature: 27.8, condition: 'clear' },
    { date: '30 Aug Wed', time: '15:00', temperature: 29.5, condition: 'clear' },
    { date: '30 Aug Wed', time: '18:00', temperature: 30.4, condition: 'sunny' },
    { date: '30 Aug Wed', time: '21:00', temperature: 27.3, condition: 'clear' },
    { date: '31 Aug Thu', time: '00:00', temperature: 25.8, condition: 'clear' },
    { date: '31 Aug Thu', time: '03:00', temperature: 24.6, condition: 'clear' },
    { date: '31 Aug Thu', time: '06:00', temperature: 24.3, condition: 'cloudy' },
    { date: '31 Aug Thu', time: '09:00', temperature: 25.6, condition: 'clear' },
    { date: '31 Aug Thu', time: '12:00', temperature: 27.9, condition: 'clear' },
    { date: '31 Aug Thu', time: '15:00', temperature: 28.8, condition: 'cloudy' },
    { date: '31 Aug Thu', time: '18:00', temperature: 29.6, condition: 'cloudy' },
    { date: '31 Aug Thu', time: '21:00', temperature: 27.3, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '00:00', temperature: 25.9, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '03:00', temperature: 24.9, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '06:00', temperature: 24.3, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '09:00', temperature: 25.3, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '12:00', temperature: 26.9, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '15:00', temperature: 27.4, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '18:00', temperature: 25.9, condition: 'cloudy' },
    { date: '1 Sep Fri', time: '21:00', temperature: 24.3, condition: 'cloudy' },
    { date: '2 Sep Sat', time: '00:00', temperature: 23.6, condition: 'clear' },
    { date: '2 Sep Sat', time: '03:00', temperature: 23.1, condition: 'clear' },
    { date: '2 Sep Sat', time: '06:00', temperature: 22.8, condition: 'clear' },
    { date: '2 Sep Sat', time: '09:00', temperature: 25.0, condition: 'sunny' },
    { date: '2 Sep Sat', time: '12:00', temperature: 28.3, condition: 'clear' },
    { date: '2 Sep Sat', time: '15:00', temperature: 28.1, condition: 'clear' }
  ]
};

export const getWeatherDataForCity = (city) => {
  // In a real app, this would make an API call
  return {
    ...mockWeatherData,
    current: {
      ...mockWeatherData.current,
      location: city
    }
  };
};