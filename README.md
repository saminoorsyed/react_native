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

TextInput ={
    <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
    --check out react docs to see all the dif properties and types of keyboards
}
images = Image{
    --self closing
    --use "require("relative path") to set image
    --supports style prop
}

pop up = Modal{
    --has 'visible' prop
    --has 'animationType' prop
    --supports style prop, but should use a nested View
}

status bar = StatusBar{
    props -> style: light, auto, dark
}


#Styling:
using the style sheet object gives auto complete/ validation while developing and results in better rendering from react native
const styles = StyleSheet.create({
container: {attributes: value,},
})

Styles don't cascade

Background color can be set in app.json when using Expo for all main screens

IOS V Android:
Text components on IOS don't have rounded bored, use View wrapper

Android box shadow:
elevation: 5,

IOS:
shadowColor: 'black',
shadowOffset: {width: 2, height: 2},
shadowRadius: 6,
shadowOpacity: 0.35
#Debugging:
on android ctrl+m to open extra menu

npm install react-devtools
in project directory: >> react-devtools

open up js debugger from extra menu, devtools will show nested components



Notes on react native:

UI elements compile to native elements
logic is run in javascript thread hosted by the react native app

bridge connects UI elements and js logic

expo-cli => third party and simplifies process:
-access to native features out of the box
-app preview android and ios applications
-cant and custom native code - limited to expo ecosystem

React Native CLI => React native team & community: - Barebones dev setup - lots to manage and configure - can write tour own native code - more complicated but more control
