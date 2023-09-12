import { StyleSheet, View, Text } from "react-native";

function GoalItem (props) {
    console.log(props.text)
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem

const styles = StyleSheet.create({
  goalText: {
    color: "white",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});