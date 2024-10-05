import React, { useState } from "react";

const App = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchCoordinates = async () => {
    const geoUrl = `https://nominatim.openstreetmap.org/search?q=${location}&format=json&limit=1`;
    const response = await fetch(geoUrl);
    const data = await response.json();
    if (data.length > 0) {
      return { lat: data[0].lat, lon: data[0].lon };
    } else {
      throw new Error("Location not found");
    }
  };

  const fetchWeatherData = async () => {
    try {
      const { lat, lon } = await fetchCoordinates();
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData.current_weather);
      setError("");
    } catch (err) {
      setWeatherData(null);
      setError("Could not fetch weather data for this location");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        style={{ padding: "10px", width: "200px" }}
      />
      <button
        onClick={fetchWeatherData}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        Get Weather
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Weather in {location}</h2>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Wind Speed: {weatherData.windspeed} km/h</p>
          <p>Wind Direction: {weatherData.winddirection}°</p>
        </div>
      )}
    </div>
  );
};

export default App;
