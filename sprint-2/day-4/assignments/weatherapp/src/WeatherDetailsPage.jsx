import React from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const WeatherDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    if (city) {
      axios
        .get(`http://api.weatherapi.com/v1/current.json?key=464167613a2d4e519ed191745242605&q=${city}`)
        .then((response) => setWeatherDetails(response.data))
        .catch((error) => console.error('Error fetching weather details', error));
    }
  }, [city]);
  console.log("weatherDetails: "+weatherDetails);
  console.log("city: "+city);
  console.log("searchParams"+searchParams)
  return (
    <div>
      {weatherDetails ? (
        <div>
          <h3>city:{weatherDetails.location.name}| state: {weatherDetails.location.region} country: {weatherDetails.location.country}</h3>
          <p>Temperature: {weatherDetails.current.temp_c} celsius</p>
          <p>Humidity: {weatherDetails.current.humidity}</p>
          <p>Wind Speed: {weatherDetails.current.wind_kph} kph</p>
          <p>Wind Direction: {weatherDetails.current.wind_dir}</p>
          <p>Feels Like: {weatherDetails.current.feelslike_c} celsius</p>
          <p>Pressure: {weatherDetails.current.pressure_mb} mb</p>
          <p>Condition: {weatherDetails.current.condition.text} </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherDetailsPage;
