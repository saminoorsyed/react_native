import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {Ionicons} from "@expo/vector-icons";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import MainButton from "../components/ui/MainButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function genRandGuess(min, max, exclude) {
  //exclude prevents comp from guessing number immediately
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return genRandGuess(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = genRandGuess(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  function nextGuessHandler(direction) {
    //direction => 'lower', 'greater
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "We know when you lie", [
        { text: "I have brought shame to my family", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = genRandGuess(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Current Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionTextObject}>
          {" "}
          Too High or Too Low?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name = "md-remove" size = {24} color={'white'}/>
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name= "md-add" size={24} color={"white"}/>
          </MainButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  InstructionTextObject: {
    marginBottom: 12,
  },
});
export default GameScreen;
