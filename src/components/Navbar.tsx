import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useLocationContext } from "@/context/LocationContext";


const Navbar = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const {setLocation} = useLocationContext();
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const fetchWeatherData = async () => {
    if (searchLocation.trim() === "" || searchLocation.trim().length <= 3) {
      alert("Please enter a valid city name.");
      return;
    }
    else {
      try{
        // Fetching geo-coordinates for the search location
        const geoCoordinates = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=1&APPID=${API_KEY}`);
        const geoData = await geoCoordinates.json();
        if(!geoData || geoData.length === 0) alert ("Location not found. Please try again.");
        const lat = geoData[0].lat;
        const lon = geoData[0].lon;
        
        // Fetching weather data using the geo-coordinates
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const weather = await weatherData.json();
        if(!weather || weather.cod !== 200) {
          alert("Weather data not found. Please try again.");
          return;
        }
        else{
          setLocation(weather);
          console.log("Weather data fetched successfully:", weather);
        }
      }
      catch(err){
        console.log("Error fetching location data:", err);
      }
    }
  }
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-neutral-300 text-black rounded-4xl px-6 py-3 shadow-md flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide text-black">AeroCast</h1>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search city..."
          className="w-48 md:w-64 bg-white text-black rounded-3xl shadow-blue-100"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <Button 
          variant="default" 
          className="rounded-2xl shadow-neutral-800"
          onClick={fetchWeatherData}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Navbar
