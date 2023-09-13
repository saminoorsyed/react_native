import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.startScreenContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  startScreenContainer: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#ddb52f'
  }
});
