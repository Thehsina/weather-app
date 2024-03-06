import React, { useState } from 'react';

const CityInput = ({ onWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiKey = 'weather_key';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        onWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default CityInput;
