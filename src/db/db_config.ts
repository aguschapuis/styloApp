import firebase from "firebase";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyArQ1l5qDUBxR2ZQsu9RGWNe3dbZxm3fTw",
  authDomain: "controlstock-6f569.firebaseapp.com",
  projectId: "controlstock-6f569",
  storageBucket: "controlstock-6f569.appspot.com",
  messagingSenderId: "1049886520083",
  appId: "1:1049886520083:web:ee7bdb31b18fb9d41660e6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { firebase, db };
