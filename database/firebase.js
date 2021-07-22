import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBEB0wSiFglXgebNMfL5LVGNsQRVn9V4CA",
  authDomain: "react-firebase-50911.firebaseapp.com",
  projectId: "react-firebase-50911",
  storageBucket: "react-firebase-50911.appspot.com",
  messagingSenderId: "397631052348",
  appId: "1:397631052348:web:bdcbfb484b2762d2520139",
  measurementId: "G-0YWVY3PX9R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
