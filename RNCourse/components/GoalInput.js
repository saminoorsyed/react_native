import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    props.hideModal();
  }
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style = {styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#914fe6" title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={props.hideModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderBottomColor: "#cccccc",
    backgroundColor: '#311b6b'
  },
  image:{
    width: 120,
    height: 120,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    gap: 15,
  },
  button: {
    width: 100,
  },
});
export default GoalInput;
