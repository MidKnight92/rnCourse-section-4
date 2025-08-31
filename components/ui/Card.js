import { StyleSheet } from "react-native";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // andriod
    shadowColor: "black", // ios
    shadowOffset: {
      // ios
      width: 0,
      height: 3,
    },
  },
});
