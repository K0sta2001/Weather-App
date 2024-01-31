import { styles } from "../styles/styles.js";
import { ImageBackground, View, Text } from "react-native";
import backgroundImg from "../assets/images/background.png";
import WeatherStack from "./weatherstack.js";
import { useWeatherData } from "../services/weatherservices.js";
import { useEffect, useState } from "react";

const MainStack = () => {
  const { data: weatherData } = useWeatherData();

  const [currentWeather, setCurrentWeather] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    setCurrentWeather(weatherData?.currentWeather);
    setDailyForecast(weatherData?.weeklyForecast);
  }, [weatherData]);

  return (
    <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <WeatherStack
          currentWeather={currentWeather}
          dailyForecast={dailyForecast}
        />
      </View>
    </ImageBackground>
  );
};

export default MainStack;
