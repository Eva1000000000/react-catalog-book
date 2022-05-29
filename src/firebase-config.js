import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAYM0RPvq699p96gs6ecm4TwZQBWAZkgb0",
    authDomain: "books-f102c.firebaseapp.com",
    projectId: "books-f102c",
    storageBucket: "books-f102c.appspot.com",
    messagingSenderId: "496358418396",
    appId: "1:496358418396:web:d055e87a170a2a5aaad119"
  };



  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
