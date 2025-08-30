import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constatns/colors";

export default function App() {
  const [choosenNumber, setchoosenNumber] = useState(null);
  const handleChoosenNumber = (number) => {
    setchoosenNumber(number);
  };
  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>
          {!choosenNumber ? (
            <StartGameScreen onChoosenNumber={handleChoosenNumber} />
          ) : (
            <GameScreen />
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
