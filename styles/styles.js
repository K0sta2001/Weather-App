import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 60,
    paddingBottom: 60,
  },
  text: {
    color: {
      white: {
        color: "#fff",
      },
      darkerWhite: {
        color: "#E2E2E3",
      },
    },
    size: {
      small: {
        fontSize: 12,
      },
      medium: {
        fontSize: 18,
      },
      large: {
        fontSize: 77,
      },
    },
    weight: {
      light: {
        fontWeight: 400,
      },
      bold: {
        fontWeight: 700,
      },
    },
    constant: {
      fontFamily: "Poppins",
      fontStyle: "normal",
    },
  },
  weatherStack: {
    container: {
      width: "92%",
      display: "flex",
      flexDirection: "column",
      rowGap: 9,
    },
    childContainer: {
      borderRadius: 19,
      width: "100%",
      paddingTop: 17,
      paddingLeft: 34,
      paddingRight: 34,
      paddingBottom: 17,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    currentWeather: {
      backgroundColor: "#A7ACC4",
      rowGap: 1,
    },
    dailyForeCast: {
      background:
        "radial-gradient(231% 135.8% at 0.9% 2.98%, rgba(167, 172, 196, 0.52) 0%, rgba(167, 172, 196, 0.23) 100%)",
      backdropFilter: "blur(16.28293800354004px)",
      rowGap: "10px",
    },
  },
});
