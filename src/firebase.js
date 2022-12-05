// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFDx2nHx2DsR8v9BPoFGsrUY1uFRysCgk",
  authDomain: "react-todo-project-27293.firebaseapp.com",
  projectId: "react-todo-project-27293",
  storageBucket: "react-todo-project-27293.appspot.com",
  messagingSenderId: "378424430048",
  appId: "1:378424430048:web:34e61b7090b115973d6f85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
