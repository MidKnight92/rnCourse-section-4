import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useMemo, useState } from "react";
import { Colors } from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ onChoosenNumber }) {
  const [input, setInput] = useState("");
  const { height } = useWindowDimensions();

  const dynamicMarginTop = useMemo(() => (height < 380 ? 30 : 100), [height]);

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
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.rootContainer, { marginTop: dynamicMarginTop }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Guess my number</InstructionText>
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
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
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
