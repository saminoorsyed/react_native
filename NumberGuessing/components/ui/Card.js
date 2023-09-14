import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';


export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary500,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.35,
  }
})