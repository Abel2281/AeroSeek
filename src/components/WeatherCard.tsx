import { Card } from "@/components/ui/card";
import { useLocationContext } from "@/context/LocationContext";

export const WeatherCard = () => {

  const { location } = useLocationContext();
  if (!location) {
    return (
      <Card className="w-full max-w-sm mx-auto bg-white shadow-xl rounded-2xl p-6 ">
        <h2 className="text-xl font-bold text-center mb-2">No Location Data</h2>
        <p className="text-center text-gray-500">Please search for a location to see the weather details.</p>
      </Card>
    );
  }
  const weatherData =  {
    temperature: location.main.temp,
    feelsLike: location.main.feels_like,
    tempMin: location.main.temp_min,    
    tempMax: location.main.temp_max,
    name: location.name,
    description: location.weather[0].description,
    humidity: location.main.humidity,
    windSpeed: location.wind.speed
  }

  return (
    <Card className="w-full max-w-sm mx-auto bg-white shadow-md shadow-amber-50 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-2">📍 {weatherData.name}</h2>
      <div className="text-center text-6xl font-bold">{weatherData.temperature}°C</div>
      <p className="text-center text-gray-700 text-xl capitalize mb-4">{weatherData.description}</p>
      <div className="space-y-1 text-md text-gray-600">
        <div>🌡️ Feels Like: <span className="font-medium">{weatherData.feelsLike}°C</span></div>
        <div>⬇️ Min Temp: <span className="font-medium">{weatherData.tempMin}°C</span></div>
        <div>⬆️ Max Temp: <span className="font-medium">{weatherData.tempMax}°C</span></div>
        <div>💧 Humidity: <span className="font-medium">{weatherData.humidity}%</span></div>
        <div>🌬️ Wind Speed: <span className="font-medium">{weatherData.windSpeed} m/s</span></div>
      </div>
    </Card>
  );
};
