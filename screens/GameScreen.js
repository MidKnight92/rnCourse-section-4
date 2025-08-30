import { Text, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
export default function GameScreen() {
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
