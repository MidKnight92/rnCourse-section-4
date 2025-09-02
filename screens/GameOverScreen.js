import {
  useWindowDimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useMemo } from "react";

export default function GameOverScreen({ rounds, choosenNumber, onGameReset }) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const imgSize = useMemo(
    () => (windowWidth < 380 ? 150 : windowHeight < 400 ? 80 : 300),
    height
  );

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title>Game Over</Title>
        <View
          style={[
            styles.imgContainer,
            { width: imgSize, height: imgSize, borderRadius: imgSize / 2 },
          ]}
        >
          <Image
            source={require("../assets/images/success.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.summaryText}>
          <Text style={styles.highlight}>{rounds.length}</Text> rounds were
          needed to guess your number{" "}
          <Text style={styles.highlight}>{choosenNumber}</Text>.
        </Text>
        <PrimaryButton btnHandler={onGameReset}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    // borderRadius: width < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary700,
    // width: width < 380 ? 150 : 300,
    // height: width < 380 ? 150 : 300,
    overflow: "hidden",
    margin: 36,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
