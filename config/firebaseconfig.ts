import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXOq-hk2laD4fWCX2AQ0UDGiaqf_o7ync",
  authDomain: "react-native-to-do-app-6c452.firebaseapp.com",
  projectId: "react-native-to-do-app-6c452",
  storageBucket: "react-native-to-do-app-6c452.firebasestorage.app",
  messagingSenderId: "796010554191",
  appId: "1:796010554191:web:d5fa67681ca20f2a929b3a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);