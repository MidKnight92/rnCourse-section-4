import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";
export default function StartGameScreen({ onChoosenNumber }) {
  const [input, setInput] = useState("");
  const handleInputChange = (inputValue) => {
    setInput(inputValue);
  };
  const handleReset = () => {
    setInput("");
  };
  const handleConfirmation = () => {
    const choosenNumber = parseInt(input);
    if (isNaN(choosenNumber) || (choosenNumber <= 0 && choosenNumber > 99)) {
      Alert.alert("Invalid input", "Input must be in the range of 1 to 99.", [
        { text: "Ok", style: "destructive", onPress: handleReset },
      ]);
      return;
    }
    onChoosenNumber(choosenNumber);
  };
  return (
    <View>
      <Title>Guess my number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instruction}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleInputChange}
          value={input}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.btnContainer}>
            <PrimaryButton btnHandler={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton btnHandler={handleConfirmation}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instruction: {
    color: Colors.accent500,
    fontSize: 22,
  },
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
    shadowRadius: 6, // ios
    shadowOpacity: 0.25, // ios
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
