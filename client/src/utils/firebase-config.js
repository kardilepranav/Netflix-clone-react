import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhCCWJkAFVk4KH96SNug79mLfb1SlHq2A",
  authDomain: "react-netflix-clone-cb17c.firebaseapp.com",
  projectId: "react-netflix-clone-cb17c",
  storageBucket: "react-netflix-clone-cb17c.appspot.com",
  messagingSenderId: "122869368073",
  appId: "1:122869368073:web:8524c8cc5397bc37b3ffd8",
  measurementId: "G-N3SCDLXQZE"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);