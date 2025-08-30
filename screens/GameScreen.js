import { Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState, useMemo } from "react";
import { randomNumberGenerator } from "../util/helperFunctions";
export default function GameScreen({ choosenNumber }) {
  const initialGuess = useMemo(
    () => randomNumberGenerator(1, 100, choosenNumber),
    [choosenNumber]
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.gameScreenContainer}>
      <View>
        <Title style={styles.title}>Opponent's Guess</Title>
      </View>
      <View>
        <Text style={styles.title}>Lower or Higher?</Text>
        <PrimaryButton>+</PrimaryButton>
        <PrimaryButton>-</PrimaryButton>
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 12,
  },
});
