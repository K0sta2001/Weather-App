// weather.js
import { useQuery } from "react-query";
import axios from "axios";

const getWeatherData = async () => {
  try {
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    const currentWeatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${41.716667}&lon=${44.783333}&appid=${apiKey}`
    );
    const currentWeather = currentWeatherResponse.data;

    const weeklyForecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${41.716667}&lon=${44.783333}&appid=${apiKey}`
    );
    const dailyForecast = weeklyForecastResponse.data.list.slice(0, 7);

    return {
      currentWeather,
      weeklyForecast: dailyForecast,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};

export const useWeatherData = () => {
  return useQuery("weatherData", getWeatherData, { staleTime: 60000 });
};
