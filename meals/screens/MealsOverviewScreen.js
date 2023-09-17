import { StyleSheet, Text, View } from 'react-native'

import { MEALS } from '../data/dummy-data'

export default function MealsOverviewScreen({route}) {
    const catID = route.params.categoryId;
  return (
    <View style = {styles.container}>
      <Text>{catID}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})