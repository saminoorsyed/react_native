import React, {useState} from "react";
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native";
import MainButton from "../components/ui/MainButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickNum}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  const {width, height} = useWindowDimensions();

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99) {
      Alert.alert(
        'Invalid number input!',
        'Please enter a number between 1 and 99 inclusive',
        [{ text: 'Okay', style:'destructive', onPress: ()=> setEnteredNumber('')}]
        );
      return
    }
    onPickNum(chosenNumber);
  }

  function resetHandler(){

  }

  const marginTopDist = height < 400? 50:100;

  return (
    <ScrollView style = {styles.screen}>
      <KeyboardAvoidingView style ={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDist}]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText> Enter a number </InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonContainer}>
              <MainButton onPress={() => setEnteredNumber("")}>Reset</MainButton>
              <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  rootContainer:{
    flex:1,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 75,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection:'row'
  },
});

export default StartGameScreen;
