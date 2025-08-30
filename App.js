import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";

export default function App() {
  const [choosenNumber, setchoosenNumber] = useState(null);
  const handleChoosenNumber = (number) => {
    setchoosenNumber(number);
  };
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>
          {!choosenNumber ? (
            <StartGameScreen onChoosenNumber={handleChoosenNumber} />
          ) : (
            <GameScreen choosenNumber={choosenNumber} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
