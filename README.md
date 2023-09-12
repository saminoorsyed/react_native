# react_native

react-native-the-practical-guide

#tutorial link:
https://www.udemy.com/course/react-native-the-practical-guide/

#Common Commands:

npx expo --tunnel
--starts the app, displays exp qr code

npm start
-- press a to use android emulator

npm run android
--runs android sdk

#Core Components:
https://reactnative.dev/docs/components-and-apis

Buttons do not have a style prop!

Individual scrollable content = ScrollView {
--space it takes up decided by parent
--not great for dynamic lists
--renders everything even if it's not visible
}

long list = FlatList {
-- optimized for dynamic lists
-- use data = {dataObject} prop and renderItem = {(itemData => <wrapcomponent>{itemData.item}</wrapcomponent>)}
}

#Styling:
using the style sheet object gives auto complete/ validation while developing and results in better rendering from react native
const styles = StyleSheet.create({
container: {attributes: value,},
})

Styles don't cascade

IOS V Android:
Text components on IOS don't have rounded bored, use View wrapper
Notes on react native:

UI elements compile to native elements
logic is run in javascript thread hosted by the react native app

bridge connects UI elements and js logic

expo-cli => third party and simplifies process:
-access to native features out of the box
-app preview android and ios applications
-cant and custom native code - limited to expo ecosystem

React Natie CLI => React native team & community: - Barebones dev setup - lots to manage and configure - can write tour own native code - more complicated but more control
