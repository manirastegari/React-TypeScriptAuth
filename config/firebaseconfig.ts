// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// we have added this line
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZXs9KSj99NaMLdmHpp0qtZLEPW75uAyU",
  authDomain: "gbc-projects-a8fe6.firebaseapp.com",
  projectId: "gbc-projects-a8fe6",
  storageBucket: "gbc-projects-a8fe6.firebasestorage.app",
  messagingSenderId: "1013013120210",
  appId: "1:1013013120210:web:8ce37ffe0a49055a81590b"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)



// PROFESSOR FIREBASE SETUP

// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBXOq-hk2laD4fWCX2AQ0UDGiaqf_o7ync",
//   authDomain: "react-native-to-do-app-6c452.firebaseapp.com",
//   projectId: "react-native-to-do-app-6c452",
//   storageBucket: "react-native-to-do-app-6c452.firebasestorage.app",
//   messagingSenderId: "796010554191",
//   appId: "1:796010554191:web:d5fa67681ca20f2a929b3a"
// };

// // Initialize Firebase
// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
