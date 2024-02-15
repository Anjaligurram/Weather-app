import Abo from '../About/Abo';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
function Home(){
    return(
        <>
        <Navbar />
        <div class="intro">
      <h1>Home Page</h1>
      <p>This is home page which describes about this project.</p>
      <button>Learn More</button>
    </div>
    <Footer />
        </>
              
    )
}
export default Home
/*
<h1>{props.details.name}</h1>
<h1>{props.details.price}</h1>
<h1>home component</h1>
            <h1>home us Paragraph</h1>
import React, { useState } from 'react';
import './Home.css';

const API_KEY = 'cad3a83931bca13b9ecdb428308cb571'; // Replace with your actual API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
*/