import MainStack from "./components/index.js";
import { useFonts } from "expo-font";
import Spinner from "./assets/spinner.js";
import { useTimezoneData } from "./utils/timezone.js";
import { useWeatherData } from "./services/weatherservices.js";

let customFonts = {
  Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
};

export default function Index() {
  const { isLoading: isLoadingTime } = useTimezoneData();
  const { isLoading: isLoadingWeather } = useWeatherData();
  const [fontIsLoaded] = useFonts(customFonts);

  const pageLoaded = fontIsLoaded & !isLoadingTime & !isLoadingWeather;

  if (!pageLoaded) {
    return <Spinner />;
  } else {
    return <MainStack />;
  }
}
