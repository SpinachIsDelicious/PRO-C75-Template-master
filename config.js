import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCUbsQ4kdmFNANZMJOKpXNmwe-xbAVUDhc",
  authDomain: "fortified-peninsula.firebaseapp.com",
  projectId: "fortified-peninsula",
  storageBucket: "fortified-peninsula.appspot.com",
  messagingSenderId: "914008790004",
  appId: "1:914008790004:web:83c15a0e602924ada95fa1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
