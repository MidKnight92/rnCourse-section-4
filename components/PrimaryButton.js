import { View, Text, Pressable, StyleSheet } from "react-native";
export default function PrimaryButton({ children }) {
  const handlePress = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#640333" }}
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
    backgroundColor: "#72062f",
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
