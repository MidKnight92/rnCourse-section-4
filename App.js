import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [chosenNumber, setchosenNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const handleChosenNumber = (number) => {
    setchosenNumber(number);
  };
  const handleGameReset = () => {
    setIsGameOver(false);
    setchosenNumber(null);
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
          {!chosenNumber && !isGameOver ? (
            <StartGameScreen onChoosenNumber={handleChosenNumber} />
          ) : isGameOver ? (
            <GameOverScreen />
          ) : (
            <GameScreen
              choosenNumber={chosenNumber}
              onGameOver={() => setIsGameOver(true)}
              onGameReset={handleGameReset}
            />
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
