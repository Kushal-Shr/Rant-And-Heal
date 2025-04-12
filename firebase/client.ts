// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB_VcxfGuI5_b-qymFkLZ7gNTXqsGIemA",
  authDomain: "rantandheal-83a6c.firebaseapp.com",
  projectId: "rantandheal-83a6c",
  storageBucket: "rantandheal-83a6c.firebasestorage.app",
  messagingSenderId: "338027531874",
  appId: "1:338027531874:web:4feb8557679a3402c90b3b",
  measurementId: "G-ZQ1J0NQ0YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);