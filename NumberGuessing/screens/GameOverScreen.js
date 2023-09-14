import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import MainButton from "../components/ui/MainButton";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style = {styles.moveFromTop}>
      <Title>GAME OVER!</Title>
      <View style = {styles.imageContainer}>
        <Image source = {require('../assets/Images/success.png')} style = {styles.image}/>
      </View>
      <Text style = {styles.summaryText}> Your phone needed <Text style = {styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style = {styles.highlight}>{userNumber}</Text></Text>
      <MainButton onPress={onStartNewGame}> Start New Game</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  moveFromTop:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  imageContainer:
  {
    width: 200,
    height: 200,
    borderRadius:100,
    borderWidth:3,
    color:Colors.primary600,
    overflow:'hidden',
    margin: 36
  },
  image:{
    width:"100%",
    height: "100%"
  },
  summaryText:{
    fontFamily: 'open-sans',
    fontSize: 24,
    marginBottom:25
  },
  highlight:{
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }


})