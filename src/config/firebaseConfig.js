import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyC20ij3vGf76NJ4qIyOP04kEA1MAPR6e3o",
    authDomain: "todo-d2b04.firebaseapp.com",
    databaseURL: "https://todo-d2b04.firebaseio.com",
    projectId: "todo-d2b04",
    storageBucket: "todo-d2b04.appspot.com",
    messagingSenderId: "24743050496",
    appId: "1:24743050496:web:d668157986aebd18cd07e5"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;