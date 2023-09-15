import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import MainButton from "../components/ui/MainButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.moveFromTop}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Images/success.png")}
            style={[styles.image, imageStyle]}
          />
        </View>
        <Text style={styles.summaryText}>
          {" "}
          Your phone needed <Text style={styles.highlight}>
            {roundsNumber}
          </Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <MainButton onPress={onStartNewGame}> Start New Game</MainButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 50,
  },
  moveFromTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    color: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 25,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
