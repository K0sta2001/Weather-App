import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";
import { WeatherIcon } from "../utils/weathericon.js";
import { kelvinToCelsius } from "../utils/temperatureutils.js";

// Image assets:
import { AntDesign } from "@expo/vector-icons";
//

export default function WeatherStack({ currentWeather, dailyForecast }) {
  const { weatherStack } = styles;
  const { text } = styles;

  //
  const CurrentWeatherComponent = () => {
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
          <WeatherIcon description={currentWeather?.weather[0]?.description} />
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
    console.log(firstRow);

    return (
      <View style={[weatherStack.childContainer, weatherStack.dailyForecast]}>
        {renderRow(firstRow)}
        {renderRow(secondRow)}
      </View>
    );
  };
  const renderRow = (hours) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {hours?.map((hour, index) => (
        <View key={hour.dt} style={{ width: "20%" }}>
          <Text
            style={[
              styles.text.color.white,
              styles.text.size.small,
              styles.text.weight.light,
              styles.text.constant,
            ]}
          >
            {hour.dt_txt.split(" ")[1].slice(0, 5)}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <WeatherIcon size={25} description={hour.weather[0].description} />
          </View>
        </View>
      ))}
    </View>
  );

  //"

  return (
    <View style={weatherStack.container}>
      <CurrentWeatherComponent />
      <DailyForeCastComponent />
    </View>
  );
}
