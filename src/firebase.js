// src/firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDc9cGPCWilup99eFh0ULYpk3GnBmT9lYU",
  authDomain: "parfumerie-f51ca.firebaseapp.com",
  projectId: "parfumerie-f51ca",
  storageBucket: "parfumerie-f51ca.appspot.com",
  messagingSenderId: "92030488886",
  appId: "1:92030488886:web:ddf8c6022226c73686a397",
  measurementId: "G-Q0T0EG4X4S"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Export the firebase services you need
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default app;
