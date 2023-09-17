import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'

export default function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
      onPress ={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex:1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: .5,
    shadowOffset:{width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.select({android:'hidden', ios:'visible'})
  },
  button:{
    flex:1
  },
  innerContainer:{
    flex:1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonPressed:{
    opacity: 0.5
  },
  title:{
    fontWeight: 'bold',
    fontSize:18
  }
})