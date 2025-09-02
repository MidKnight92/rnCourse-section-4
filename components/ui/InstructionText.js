import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export default function InstructionText({ children }) {
  return <Text style={styles.instruction}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 22,
  },
});
