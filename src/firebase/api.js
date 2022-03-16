import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "./config";

const collectionName = "tasks";

export const saveTask = (newTask) =>
  addDoc(collection(db, collectionName), newTask);
export const updateTask = (id, updateFields) => {
  updateDoc(doc(db, collectionName, id), updateFields);
};
export const getTasks = () => getDocs(collection(db, collectionName));
export const deleteTasks = (id) => deleteDoc(doc(db, collectionName, id));
export const getTask = (id) => getDoc(doc(db, collectionName, id));

export const updateLists = async () => {
  const q = query(collection(db, collectionName));
  return onSnapshot(q, (snap) => {
    snap.forEach((op) => {
      console.log(op.data().tarea);
    });
  });
};
