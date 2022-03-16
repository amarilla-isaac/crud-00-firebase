import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDyReckkmtsHunbpQCfsqCaimNSa4qDD78",
  authDomain: "crud-react-todo.firebaseapp.com",
  projectId: "crud-react-todo",
  storageBucket: "crud-react-todo.appspot.com",
  messagingSenderId: "901677526767",
  appId: "1:901677526767:web:04b7a67e5aa0f384b3351a",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
