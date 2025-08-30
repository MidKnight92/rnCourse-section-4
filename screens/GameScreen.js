import { Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState, useMemo } from "react";
import { randomNumberGenerator } from "../util/helperFunctions";
import NumberContainer from "../components/game/NumberContainer";

const LOWER = "lower";
const HIGHER = "higher";
let min = 1;
let max = 100;

export default function GameScreen({ choosenNumber }) {
  const initialGuess = randomNumberGenerator(1, 100, choosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const handleNextGuess = (direction) => {
    if (direction === LOWER) {
      max = currentGuess;
    } else {
      min = currentGuess;
    }
    const guess = randomNumberGenerator(min, max, currentGuess);
    setCurrentGuess(guess);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={{ color: "white", padding: 23 }}>Lower or Higher?</Text>
      </View>
      <View style={styles.btnContainer}>
        <PrimaryButton btnHandler={() => handleNextGuess(HIGHER)}>
          +
        </PrimaryButton>
        <PrimaryButton btnHandler={() => handleNextGuess(LOWER)}>
          -
        </PrimaryButton>
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  btnContainer: { flexDirection: "row", justifyContent: "center" },
});
