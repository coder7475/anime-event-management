// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsOyOmO8S1e5MAF_18vmWGW99wJeGEbC8",
  authDomain: "anime-events-fcd7a.firebaseapp.com",
  projectId: "anime-events-fcd7a",
  storageBucket: "anime-events-fcd7a.appspot.com",
  messagingSenderId: "626317343087",
  appId: "1:626317343087:web:c7e0c9bb99c841ed68d09a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;