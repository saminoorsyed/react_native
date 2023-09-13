import React, {useState} from "react";
import { TextInput, View, StyleSheet, Alert} from "react-native";
import MainButton from "../components/MainButton";

function StartGameScreen({onPickNum}) {
  const [enteredNumber, setEnteredNumber] = useState('');

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
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value = {enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
        <MainButton onPress={()=> setEnteredNumber('')}>Reset</MainButton>
        <MainButton onPress = {confirmInputHandler} >Confirm</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#72063c",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
  },
  numberInput: {
    height: 50,
    width: 75,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection:'row'
  },
});

export default StartGameScreen;
