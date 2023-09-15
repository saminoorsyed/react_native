# react_native

react-native-the-practical-guide 

# Tutorial link:
https://www.udemy.com/course/react-native-the-practical-guide/

# Common Commands:

npx expo --tunnel
-- starts the app, displays exp qr code 

npm start
-- press a to use android emulator

npm run android  
-- runs android sdk

# Core Components:
https://reactnative.dev/docs/components-and-apis

Buttons do not have a style prop! 

Individual scrollable content = ScrollView {
-- space it takes up decided by parent 
-- not great for dynamic lists
-- renders everything even if it's not visible
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
-- check out react docs to see all the dif properties and types of keyboards
}

images = Image{
-- self closing
-- use "require("relative path") to set image
-- supports style prop
}

pop up = Modal{
-- has 'visible' prop 
-- has 'animationType' prop
-- supports style prop, but should use a nested View
} 

StatusBar =>
import { StatusBar } from "expo-status-bar";
<StatusBar style="light"/>

status bar = StatusBar{
props ->  
  style: light, auto, dark
}

# Platform specificity:
different styling for different ios (android, apple, windows etc):

--import {Platform} from 'react-native'
--borderWidth: Platform.OS === 'android'? 2:0
OR
--borderWidth: Platform.select({ios: 0, android: 2})

platform specific files:

adjust file name, imports stay the same. can use for constants colors, assests, images etc.
-->Title.android.js
-->Title.ios.js



# Styling:

KeyboardAvoidingView => allows you to still access app when keyboard shows up. wrap components around view
<ScrollView style = {styles.screen}>
      <KeyboardAvoidingView style ={styles.screen} behavior="position">
      </KeyboardAvoidingView>
</ScrollView>

orientation:
setting is in app.json
code that responds to orientation should exist within the function so that it re-executes upon flip
const {width, height} = useWindowDimensions();

can use conditionals to adjust dimensions over different sized screens:
import {Dimensions} from 'react-native'
// can get height as well
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
marginTop: width < 380 ? 24 :36
})

custom fonts: npx expo install expo-font
-- load fonts on app component using:
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading"

const [fontsLoaded] = useFonts({
"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
});

// usefonts returns an array with a boolean fontsLoaded prop to indicate once the fonts are loaded
if (!fontsLoaded){
return <AppLoading/>
}

icons: comes pre-installed with expo
import {ionics} from "@expo/vector-icons"

loading screen: npx expo install expo-app-loading

using the style sheet object gives auto complete/ validation while developing and results in better rendering import {stylesheet} from react native:

const styles = StyleSheet.create({
container: {attributes: value,}
})

Styles don't cascade unless you do the following:
pass the style prop down and put your current style in a list. the order of the list determines the order it is processed, therefore, later items take precident

const InstructionText = ({children, style }) => {
return <Text style={[styles.instructionText, style]}> {children} </Text>



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


# Debugging:
on android ctrl+m to open extra menu  

npm install react-devtools
in project directory: >> react-devtools

open up js debugger from extra menu, devtools will show nested components

# Notes on react native:

UI elements compile to native elements
logic is run in javascript thread hosted by the react native app

bridge connects UI elements and js logic

expo-cli => third party and simplifies process:
- access to native features out of the box
- app preview android and ios applications
- cant and custom native code - limited to expo ecosystem

React Native CLI => React native team & community:
- Barebones dev setup - lots to manage and configure 
- can write tour own native code
- more complicated but more control