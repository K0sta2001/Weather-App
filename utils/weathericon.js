import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native-animatable";
import { useState } from "react";
import Spinner from "../assets/spinner";

export const WeatherIcon = ({ description, size, color = "white" }) => {
  if (description === undefined) {
    return <Spinner />;
  }
  const [formattedTime, setFormattedTime] = useState(null);
  console.log(description);
  const isNightTime = formattedTime >= 19 || formattedTime < 6;
  const isCloudy = [
    "few clouds",
    "broken clouds",
    "scattered clouds",
    "overcast clouds",
  ].includes(description.toLowerCase());
  const isClear = description === "clear sky";
  const isRain = ["shower rain", "rain", "thunderstorm"].includes(
    description.toLowerCase()
  );
  const isSnow = description === "snow";
  const isMist = description === "mist";
  return (
    <View style={{ display: "flex", alignItems: "center", columnGap: 6 }}>
      <MaterialCommunityIcons
        name={
          isClear && isNightTime
            ? "weather-night"
            : isCloudy && isNightTime
            ? "weather-night-partly-cloudy"
            : isRain
            ? "weather-rainy"
            : isSnow
            ? "weather-snowy"
            : isMist
            ? "weather-fog"
            : isClear && !isNightTime
            ? "weather-sunny"
            : isCloudy && !isNightTime
            ? "weather-partly-cloudy"
            : ""
        }
        size={!size ? 74 : size}
        color={color}
      />
    </View>
  );
};
