import React from 'react';

const Weather = ({ data }) => {
  if (!data || !data.main || !data.weather || data.weather.length === 0) {
    return <p>Error fetching weather data</p>;
  }

  const { main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {temperature} K</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Weather;
