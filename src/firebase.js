import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClk0h9YRObuelwxBzSemrmCnymBttZ3F0",
  authDomain: "clone-eb28d.firebaseapp.com",
  projectId: "clone-eb28d",
  storageBucket: "clone-eb28d.appspot.com",
  messagingSenderId: "104719358966",
  appId: "1:104719358966:web:3ed3c0fcf0ec8320cf45d7",
  measurementId: "G-CSHPM41XLZ",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
