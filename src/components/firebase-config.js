// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIyZ1qNrlaMd6GQcTgms6yuyg_3mSt74o",
  authDomain: "react-login-4017a.firebaseapp.com",
  projectId: "react-login-4017a",
  storageBucket: "react-login-4017a.appspot.com",
  messagingSenderId: "779200094488",
  appId: "1:779200094488:web:571e5bcc30ca53ac1cbe6d",
  measurementId: "G-MCT17HLKXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);