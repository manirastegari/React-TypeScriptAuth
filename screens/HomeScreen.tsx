import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { userAuthentication } from '../config/userAuthentication';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/firebaseconfig';

const HomeScreen = () => {

  const { user } = userAuthentication();

  return (
    <View style={styles.container}>
      <Text style={styles.userText}>Welcome {user?.email}</Text>
      <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={() => signOut(FIREBASE_AUTH)} >
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
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
  },
  userText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'chocolate',
    marginBottom: 20
  }
});

export default HomeScreen;