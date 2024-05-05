import React, { useState } from 'react';
import axios from 'axios'; // Import axios for fetching data

const API_KEY = 'ee09887962dd43e98ab192552240205'; // Replace with your actual API key

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      setError("Failed to fetch weather data");
      alert("Failed to fetch weather data")
    } finally {
      setIsLoading(false);
    }
  };

  const details=(weatherData)=>{
    if(weatherData)
    return <div className="weather-cards">
    <p>Temperature: {weatherData.current.temp_c} &deg;C</p>
    <p>Humidity: {weatherData.current.humidity}%</p>
    <p>Condition: {weatherData.current.condition.text}</p>
    <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
  </div>
  }

  return (
    <div className="App">
        <input
          type="text"
          placeholder="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      {isLoading && <p>Loading data...</p>}
      {error && <p>{error}</p>}
      {!isLoading && (
        details(weatherData)
      )}
    </div>
  );
};

export default App;
