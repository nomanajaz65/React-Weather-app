import React, { useState } from 'react';
import Header from './components/header/Header';
import Search from './components/search/Search';
import WeatherDisplay from './components/weatherdisplay/WeatherDisplay';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <Search onSearch={fetchWeather} />
      <WeatherDisplay data={weatherData} loading={loading} error={error} />
    </div>
  );
};

export default App;
