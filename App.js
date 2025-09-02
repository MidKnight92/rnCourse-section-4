import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [chosenNumber, setchosenNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);

  const handleChosenNumber = (number) => {
    setchosenNumber(number);
  };
  const handleGameReset = () => {
    setIsGameOver(false);
    setchosenNumber(null);
    setGuesses([]);
  };
  const handleRoundIncrease = (newGuess) => {
    setGuesses((prevGuesses) => [newGuess, ...prevGuesses]);
  };
  const [isFontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (isFontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontLoaded]);

  if (!isFontLoaded) {
    return null;
  }
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
            <GameOverScreen
              choosenNumber={chosenNumber}
              onGameReset={handleGameReset}
              rounds={guesses}
            />
          ) : (
            <GameScreen
              choosenNumber={chosenNumber}
              onGameOver={() => setIsGameOver(true)}
              onGameReset={handleGameReset}
              onIncreaseRoundCount={handleRoundIncrease}
              guesses={guesses}
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
