// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKFi35ONYuEjoY3jCxqpYThQWoftdCabo",
  authDomain: "realtor--react.firebaseapp.com",
  projectId: "realtor--react",
  storageBucket: "realtor--react.appspot.com",
  messagingSenderId: "1003265729091",
  appId: "1:1003265729091:web:2e3aefc8b31ad8ca18aaf6"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db=getFirestore();