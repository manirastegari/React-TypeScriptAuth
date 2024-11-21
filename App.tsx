import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Firebase
// npx expo install firebase

// Navigation
// npm install @react-navigation/native

// to use expo project with ReactNavigation
// npm install react-native-screens react-native-safe-area-context

// Stack Navigation
// npm install @react-navigation/native-stack

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
