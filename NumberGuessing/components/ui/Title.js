import {Text, StyleSheet} from 'react-native'
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
  },
});
export default Title