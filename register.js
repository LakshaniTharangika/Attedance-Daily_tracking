import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkzbH_98B36eCdBpr1W17abZsY9g1NClM",
  authDomain: "attendancemarking-746e6.firebaseapp.com",
  projectId: "attendancemarking-746e6",
  storageBucket: "attendancemarking-746e6.firebasestorage.app",
  messagingSenderId: "863755562100",
  appId: "1:863755562100:web:273019beaed9632ed8f521"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();