// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const API_KEY = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "clone-d5dd5.firebaseapp.com",
  projectId: "clone-d5dd5",
  storageBucket: "clone-d5dd5.appspot.com",
  messagingSenderId: "955786995139",
  appId: "1:955786995139:web:13a83fe6f5f12221a58976",
  measurementId: "G-25KKQMP8N6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
