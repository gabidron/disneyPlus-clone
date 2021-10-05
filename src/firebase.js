import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI4GlK09Kfg4MQB4SrW2Geli3SZ4oXkc0",
  authDomain: "disneyplus-ff6d9.firebaseapp.com",
  projectId: "disneyplus-ff6d9",
  storageBucket: "disneyplus-ff6d9.appspot.com",
  messagingSenderId: "569876069571",
  appId: "1:569876069571:web:e127ade23879532de47676",
  measurementId: "G-74M33R03QX"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()