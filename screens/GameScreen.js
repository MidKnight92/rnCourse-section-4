import { StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useEffect, useRef, useState } from "react";
import { randomNumberGenerator } from "../util/helperFunctions";
import NumberContainer from "../components/game/NumberContainer";
import { HIGHER, LOWER } from "../constants/gameScreen";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

export default function GameScreen({ choosenNumber, onGameOver, onGameReset }) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    randomNumberGenerator(1, 100, choosenNumber)
  );
  const minRef = useRef(1);
  const maxRef = useRef(100);

  const handleNextGuess = (direction) => {
    if (
      (direction === LOWER && currentGuess < choosenNumber) ||
      (direction === HIGHER && currentGuess > choosenNumber)
    ) {
      Alert.alert("Invalid", "Please give honest response", [
        { text: "Ok", style: "cancel" },
      ]);
      return;
    }

    if (direction === LOWER) maxRef.current = currentGuess;
    else if (direction === HIGHER) minRef.current = currentGuess;

    const nextGuess = randomNumberGenerator(
      minRef.current,
      maxRef.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
  };

  useEffect(() => {
    if (choosenNumber === currentGuess) {
      onGameOver();
    }
  }, [currentGuess, choosenNumber, onGameOver]);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          <InstructionText>Lower or Higher?</InstructionText>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton btnHandler={() => handleNextGuess(HIGHER)}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton btnHandler={() => handleNextGuess(LOWER)}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
        </View>
        {/* <View>Log Rounds</View> */}
      </Card>
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
