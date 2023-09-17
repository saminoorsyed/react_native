import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "Meal Categories",
            headerStyle: { backgroundColor: "#fa7d39cc" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#fbccb2cc" },
          }}
        >
          <Stack.Screen name="MealCategories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //   options={({ route, navigation }) => {
            //     const title = route.params.categoryId
            //     return {
            //       title:catId,
            //   };
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
