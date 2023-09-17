import { FlatList, StyleSheet, View } from 'react-native'

import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem';

export default function MealsOverviewScreen({route}) {
    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem)=> {
      // looking for catId in meal cat list, if -1, it is not there
      return mealItem.categoryIds.indexOf(catId) >=0;
    })

    function renderMealItem (itemData){
      const item = itemData.item
      mealItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration

      }
      return <MealItem {...mealItemProps}/>
    }
  return (
    <View style = {styles.container}>
      <FlatList
        data = {displayMeals}
        keyExtractor={(item)=> item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})