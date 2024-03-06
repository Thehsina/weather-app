import React, { useState } from 'react';
import CityInput from './components/cityInput';
import Weather from './components/weather';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <CityInput onWeatherData={handleWeatherData} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
};

export default App;

