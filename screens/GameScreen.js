import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useEffect, useRef, useState } from "react";
import { randomNumberGenerator } from "../util/helperFunctions";
import NumberContainer from "../components/game/NumberContainer";
import { HIGHER, LOWER } from "../constants/gameScreen";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

export default function GameScreen({
  choosenNumber,
  onGameOver,
  onIncreaseRoundCount,
  guesses,
}) {
  const [currentGuess, setCurrentGuess] = useState(() =>
    randomNumberGenerator(1, 100, choosenNumber)
  );
  const { width, height } = useWindowDimensions();
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
    onIncreaseRoundCount(nextGuess);
  };

  useEffect(() => {
    if (choosenNumber === currentGuess) {
      onGameOver();
    }
  }, [currentGuess, choosenNumber, onGameOver]);

  let content = (
    <>
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
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.btnContainerWide}>
          <PrimaryButton btnHandler={() => handleNextGuess(HIGHER)}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <PrimaryButton btnHandler={() => handleNextGuess(LOWER)}>
            <Ionicons name="remove" size={24} color="white" />
          </PrimaryButton>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.logContainer}>
        <FlatList
          data={guesses}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={itemData.index}
              numberOfGuesses={guesses.length}
            />
          )}
          keyExtractor={(guess, idx) => `round-${idx}-${guess}`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  btnContainer: { flexDirection: "row", justifyContent: "center" },
  btnContainerWide: { flexDirection: "row", alignItems: "center" },
  logContainer: {
    flex: 1,
    padding: 16,
  },
});
