// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb4Dc0DdfUvK4RNebVW5ckLCSyTfr9Oc8",
  authDomain: "storyapp-409f8.firebaseapp.com",
  projectId: "storyapp-409f8",
  storageBucket: "storyapp-409f8.appspot.com",
  messagingSenderId: "688766931446",
  appId: "1:688766931446:web:cbc56bb250ab3f312277d7",
  measurementId: "G-DE1LJNEG1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);