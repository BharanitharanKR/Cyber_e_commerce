import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="w-full h-80 absolute bg-black p-24 items-center">
        <div className="m-4 items-center">
          <div className="">
            <img src={Cyber_logo} className="bg-white" />
          </div>
          <div className="text-gray-300 pt-6">
            <p>Home</p>
            <p>About Us</p>
            <p>Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// weather.js
const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to get weather data
function getWeather(city) {
  return fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data not found");
      }
      return response.json(); // Convert response to JSON
    })
    .then((data) => {
      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Function to display weather data
function displayWeather(city) {
  getWeather(city).then((weather) => {
    if (weather) {
      console.log(`Weather in ${weather.city}:`);
      console.log(`Temperature: ${weather.temperature}°C`);
      console.log(`Condition: ${weather.description}`);
    }
  });
}

// Example usage
displayWeather("New York");
