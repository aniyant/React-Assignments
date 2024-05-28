import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';

const WeatherSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [weatherData, setWeatherData] = useState(null);
  const city = searchParams.get('city') || '';
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    if (city) {
      axios
        .get(`http://api.weatherapi.com/v1/current.json?key=464167613a2d4e519ed191745242605&q=${city}`)
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.error('Error fetching weather data', error));
    }
  }, [city]);

  console.log(weatherData);
  console.log("searchParams"+searchParams)
  const handleSearch = (e) => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value;
    setSearchParams({ city: cityInput });
  };

  return (
    <div>
      <h2>Weather Search</h2>
      <button onClick={logout}>Logout</button>
      <form onSubmit={handleSearch}>
        <input name="city" defaultValue={city} placeholder="Enter city name" />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div>
          <h3>city:{weatherData.location.name}| state: {weatherData.location.region} country: {weatherData.location.country}</h3>
          <p>Temperature: {weatherData.current.temp_c} celsius</p>
          <p>Humidity: {weatherData.current.humidity}</p>
          <p>Wind Speed: {weatherData.current.wind_kph} kph</p>
          <button onClick={() => navigate(`/details?city=${city}`)}>See Full Weather Report</button>
        </div>
      )}
    </div>
  );
};

export default WeatherSearchPage;
