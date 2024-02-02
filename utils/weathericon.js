import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native-animatable";
import Spinner from "../assets/spinner";
import { useTimezoneData } from "./timezone";
import { useEffect, useState } from "react";

export const WeatherIcon = ({ description, size, color = "white", time }) => {
  if (!description || !time) {
    return <Spinner />;
  }

  const isNightTime = time >= 19 || time < 6;
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
