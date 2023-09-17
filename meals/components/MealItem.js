import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style = {styles.MealItem}>
        <Pressable
          android_ripple={{ color: "#ccccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
          <View style = {styles.innerContainer}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.details}>
              <Text style={styles.detailItems}> {duration}m </Text>
              <Text style={styles.detailItems}> {complexity.toUpperCase()}</Text>
              <Text style={styles.detailItems}> {affordability.toUpperCase()}</Text>
            </View>
          </View>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  innerContainer:{
    borderRadius: 8,
    overflow:'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  detailItems: {},
});
