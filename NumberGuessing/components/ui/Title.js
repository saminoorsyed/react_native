import {Text, StyleSheet, Platform} from 'react-native'
import React from 'react'
import Colors from '../../constants/colors';

function Title ({children}) {
  return  <Text style = {styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 28,
    color: "#f17272",
    textAlign: "center",
    maxWidth:'80%',
    // borderWidth: Platform.OS === 'android'? 2:0
    borderWidth: Platform.select({ios: 0, android: 2}),
  },
});
export default Title