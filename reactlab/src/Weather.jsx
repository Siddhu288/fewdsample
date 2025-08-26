import React, { useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const API_KEY = 'aabf65f1a45ed5491a00b3d18dd378b5'; // Use your valid API key

  const getWeather = () => {
    if (!city) {
      setError('Please enter a city name');
      setWeather(null);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('City not found');
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError('');
      })
      .catch((err) => {
        setWeather(null);
        setError('City not found');
      });
  };

  return (
    <div className="p-4 shadow-md rounded-xl bg-blue-100 w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">Check Weather</h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="border px-2 py-1 flex-1 rounded"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getWeather}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {weather && (
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="font-semibold text-xl">{weather.name}</h3>
          <p className="text-lg">{weather.weather[0].main}</p>
          <p className="text-2xl font-bold">{weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
