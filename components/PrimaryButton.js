import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../constatns/colors";
export default function PrimaryButton({ children, btnHandler }) {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={btnHandler}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.btnContainer] : styles.btnContainer
        }
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
