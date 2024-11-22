
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const WelcomeScreen: React.FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("SignIn")} >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("SignUp")} >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// HI

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'chocolate',
    borderRadius: 10,
    height: 40
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white'
  }
});

export default WelcomeScreen;
