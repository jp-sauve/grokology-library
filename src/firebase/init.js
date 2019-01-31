import * as firebase from "firebase";
// eslint-disable-next-line
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBVcRJ4AT9SK6Z5jSeUY7wCl9BWZ4hK2Iw",
  authDomain: "grokology-b25c4.firebaseapp.com",
  databaseURL: "https://grokology-b25c4.firebaseio.com",
  projectId: "grokology-b25c4",
  storageBucket: "grokology-b25c4.appspot.com",
  messagingSenderId: "961422479623"
};
firebase.initializeApp(config);
let db = firebase.firestore();
export default db;
