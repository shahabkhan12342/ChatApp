import firebase from 'firebase/app' 
import 'firebase/database';
import 'firebase/auth';



var firebaseConfig = {
    apiKey: "AIzaSyClwyQG46rNX4WAk5ZA2oykpH7KiZZNANg",
    authDomain: "saylani-chatapp-55967.firebaseapp.com",
    projectId: "saylani-chatapp-55967",
    storageBucket: "saylani-chatapp-55967.appspot.com",
    messagingSenderId: "261735822768",
    appId: "1:261735822768:web:b71269b8841cc8a3055275",
    measurementId: "G-VTJTXW8V35"
  };
  // Initialize Firebase
 
  // Initialize Firebase

var Firebase= firebase.initializeApp(firebaseConfig);
export default Firebase; 