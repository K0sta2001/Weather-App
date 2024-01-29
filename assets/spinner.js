import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <Animatable.View
        animation="rotate"
        iterationCount="infinite"
        easing="linear"
      >
        <Icon name="spinner" size={30} color="gray" solid />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
