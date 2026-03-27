// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjvyQb35oBMAX_HEMhE66vNA6UKQ5gQtc",
  authDomain: "habit-tracker-ccb82.firebaseapp.com",
  projectId: "habit-tracker-ccb82",
  storageBucket: "habit-tracker-ccb82.firebasestorage.app",
  messagingSenderId: "342164574135",
  appId: "1:342164574135:web:6ab959a714b68b334c6232",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
