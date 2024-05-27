import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 const myName = 'Racheal Stiles Ocran';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name <Text style={styles.name}>{myName}</Text></Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
  },
  name: {
    fontWeight: 'bold'
  }
});
