// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCHHVJlX0xU0n86oakNrf9KaWjbJKgROY",
  authDomain: "reactjscoderhouse.firebaseapp.com",
  projectId: "reactjscoderhouse",
  storageBucket: "reactjscoderhouse.appspot.com",
  messagingSenderId: "773259937537",
  appId: "1:773259937537:web:1380f3ee15e011e9ae7d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const allItem = () => {
  const query = getDocs(collection(db, 'items'))
  return query
}