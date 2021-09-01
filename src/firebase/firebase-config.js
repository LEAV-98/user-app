import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const  firebaseConfig = {
  apiKey: "AIzaSyAEArYtb3MI9ZedEastLZhMmfDZuDtoEgE",
  authDomain: "pizzeria-30f98.firebaseapp.com",
  projectId: "pizzeria-30f98",
  storageBucket: "pizzeria-30f98.appspot.com",
  messagingSenderId: "1057742808526",
  appId: "1:1057742808526:web:d8ee967a034c4f1e75779f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
