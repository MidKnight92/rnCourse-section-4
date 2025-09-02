import { StyleSheet, View, Dimensions } from "react-native";
import { Colors } from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: width < 380 ? 18 : 36,
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
