import firebase from 'firebase';
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvQjntGL8a5o1tHaBM4IO3GPLi2a8rvtE",
    authDomain: "geoninjas-fd078.firebaseapp.com",
    databaseURL: "https://geoninjas-fd078.firebaseio.com",
    projectId: "geoninjas-fd078",
    storageBucket: "geoninjas-fd078.appspot.com",
    messagingSenderId: "272069576797",
    appId: "1:272069576797:web:36eb3e358af0edb83fa5b4"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();