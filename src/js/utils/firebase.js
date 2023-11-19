// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDp2ARCyv08WgmK6IMjbk3jnB48DYGhwfw',
  authDomain: 'story-app-568cd.firebaseapp.com',
  projectId: 'story-app-568cd',
  storageBucket: 'story-app-568cd.appspot.com',
  messagingSenderId: '305451997527',
  appId: '1:305451997527:web:e54476c705d79a3b984612',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };