import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#ddb52f", "#3b021f"]}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
});
