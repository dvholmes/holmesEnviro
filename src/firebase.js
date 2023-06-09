// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Add this line to import the storage module


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChgzxwgPglxi8iaB2VaKi2Qqu2LjD6ldU",
  authDomain: "holmesenviro-9487a.firebaseapp.com",
  projectId: "holmesenviro-9487a",
  storageBucket: "holmesenviro-9487a.appspot.com",
  messagingSenderId: "1097597196862",
  appId: "1:1097597196862:web:f6d3017076dafb70988f6f",
  measurementId: "G-L9KSZPT3G9"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Add this line to get a reference to the Firebase Storage service

export { storage }; // Export the storage reference for use in other parts of your application