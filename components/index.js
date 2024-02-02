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
        <Text
          style={[
            styles.text.weight.bold,
            { fontSize: 14, textAlign: "center", width: "90%" },
            styles.text.color.white,
          ]}
        >
          This app was inspired just because of my love of winter. Winter's my
          element and i feel free in the snow, especially when i'm skiing in the
          mountains. Don't forget to wear a jacket {"\u2665"}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default MainStack;
