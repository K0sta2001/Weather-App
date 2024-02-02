import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";
import { WeatherIcon } from "../utils/weathericon.js";
import { kelvinToCelsius } from "../utils/temperatureutils.js";
import { useState, useEffect } from "react";
import { useTimezoneData } from "../utils/timezone.js";

// Image assets:
import { AntDesign } from "@expo/vector-icons";
//

export default function WeatherStack({ currentWeather, dailyForecast }) {
  const { weatherStack } = styles;
  const { text } = styles;
  //
  const CurrentWeatherComponent = () => {
    const { data: time } = useTimezoneData();
    const [currentTimeHour, setCurrentTimeHour] = useState(null);
    useEffect(() => {
      setCurrentTimeHour(new Date(time?.datetime).getUTCHours() + 4);
    }, [time]);
    return (
      <View
        style={[
          weatherStack.childContainer,
          weatherStack.currentWeather,
          { display: "flex" },
        ]}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "6px",
          }}
        >
          <Text
            style={[
              text.constant,
              text.color.darkerWhite,
              text.size.medium,
              { transform: [{ translateY: -1 }] },
            ]}
          >
            Today
          </Text>
          <AntDesign
            name="up"
            size={13}
            color="#E2E2E3"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            columnGap: 20,
          }}
        >
          <WeatherIcon
            description={currentWeather?.weather[0]?.description}
            time={currentTimeHour}
          />
          <Text
            style={[text.constant, text.color.darkerWhite, text.size.large]}
          >
            {kelvinToCelsius(currentWeather?.main?.temp)}
          </Text>
        </View>
      </View>
    );
  };
  //
  const DailyForeCastComponent = () => {
    const firstRow = dailyForecast?.slice(0, 3);
    const secondRow = dailyForecast?.slice(3, 6);

    return (
      <View style={[weatherStack.childContainer, weatherStack.dailyForecast]}>
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </View>
    );
  };
  const renderRow = (hours) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {hours?.map((hourlyWeather) => {
          return (
            <View
              key={hourlyWeather.dt}
              style={{
                width: "20%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.text.color.white,
                  styles.text.size.medium,
                  styles.text.weight.light,
                  styles.text.constant,
                ]}
              >
                {hourlyWeather.dt_txt.split(" ")[1].slice(0, 5)}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 2,
                }}
              >
                <WeatherIcon
                  size={44}
                  description={hourlyWeather.weather[0].description}
                  time={parseInt(
                    hourlyWeather.dt_txt.split(" ")[1].slice(0, 2)
                  )}
                />
                <Text
                  style={[
                    styles.text.constant,
                    { fontSize: 24 },
                    styles.text.weight.light,
                    styles.text.color.white,
                  ]}
                >
                  {kelvinToCelsius(hourlyWeather.main.temp) + "\u00B0"}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  //"

  return (
    <View style={weatherStack.container}>
      <CurrentWeatherComponent />
      <DailyForeCastComponent />
    </View>
  );
}
