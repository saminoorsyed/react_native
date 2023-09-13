import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
// custom components
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVis, setModalIsVis] = useState(false);

  function startAddGoalHandler(){
    setModalIsVis(!modalIsVis);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      // returns true when not equal and true when equal
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#7d3dcf" onPress={startAddGoalHandler} />
        <GoalInput showModal = {modalIsVis} onAddGoal={addGoalHandler} hideModal = {startAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 60,
  },
  goalsContainer: {
    flex: 6,
  },
});
