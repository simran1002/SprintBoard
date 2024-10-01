// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-cf751.firebaseapp.com",
  projectId: "taskmanager-cf751",
  storageBucket: "taskmanager-cf751.appspot.com",
  messagingSenderId: "289838823964",
  appId: "1:289838823964:web:685854562d88beb5d77dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   