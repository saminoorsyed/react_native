import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNum = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen/>
  }
  return (
    <LinearGradient
      colors={["#72063c", "#ddb52f"]}
      style={styles.startScreenContainer}
    >
      <ImageBackground
        style={styles.startScreenContainer}
        source={require("./assets/Images/background.png")}
        resizeMode="cover"
        imageStyle={styles.bgImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  startScreenContainer: {
    flex: 1,
    justifyContent: "center",
  },
  bgImage: {
    opacity: 0.25,
  },
});
