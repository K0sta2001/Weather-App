import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";
import { WeatherIcon } from "../utils/weathericon.js";

// Image assets:
import { AntDesign } from "@expo/vector-icons";
//

export default function WeatherStack({ currentWeather, dailyForecast }) {
  const { weatherStack } = styles;
  const { text } = styles;
  console.log(currentWeather)

  const CurrentWeather = () => {
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
            
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={weatherStack.container}>
      <CurrentWeather />
    </View>
  );
}
