// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, where, query, doc } from 'firebase/firestore/lite';
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

export const itemCat = (categoria) => {
  const queryCat = collection(db, 'items')
  const filtCategoria = query(queryCat, where('categoria', '==', categoria))
  const filtCategoriaAux = getDocs(filtCategoria)
  return filtCategoriaAux
}

export const itemOnly = (id) => {
  const queryItem = collection(db, 'items')
  const itemFiltrado = query(queryItem, where('id', '==', id))
  const oneItem = getDocs(itemFiltrado)
  return oneItem
}