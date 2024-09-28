import React from 'react';


const WeatherDisplay = ({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  const handleCityNameClick = () => {
    alert(`City: ${data.name}`);
  };

  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      <button onClick={handleCityNameClick}>Show City Name</button>
    </div>
  );
};

export default WeatherDisplay;
