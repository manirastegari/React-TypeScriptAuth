
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/firebaseconfig';

const SignInScreen = () => {

  const [userObject, setUserObject] = useState({
    email: '',
    password: '',
    error: ''
  });

  async function signIn() {
    if(userObject.email === '' || userObject.password === '') {
      setUserObject({
        ...userObject,
        error: 'Email and Password is mandatory.'
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(FIREBASE_AUTH, userObject.email, userObject.password)
      .then((result) => {
        console.log("User Logged in: "+result.user);
      })
    } catch(e) {
      setUserObject({
        ...userObject,
        error: 'Something went wrong!'
      });
    }
  }

  return (
    <View style={styles.container}>
      
        <TextInput
          style={styles.inputText}
          placeholder='Enter Email'
          keyboardType='email-address'
          autoCapitalize="none"
          autoCorrect={false}
          value={userObject.email}
          onChangeText={(text) => setUserObject({ ...userObject, email: text })} />

        <TextInput
          style={styles.inputText}
          placeholder='Enter Password'
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize='none'
          value={userObject.password}
          onChangeText={(text) => setUserObject({ ...userObject, password: text })} />

        {
          !!userObject.error && 
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: 'red', fontSize: 14 }}>{userObject.error}</Text>
          </View>
        }
        
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={signIn} >
          <Text style={styles.buttonText}>Sign In</Text>
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
  inputText: {
    width: '80%',
    height: 50,
    borderColor: 'chocolate',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 20
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

export default SignInScreen;





