import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
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
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  startScreenContainer: {
    flex: 1,
    justifyContent:"center"
  },
  bgImage:{
    opacity:.25
  }
});
