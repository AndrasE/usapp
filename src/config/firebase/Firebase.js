// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { APIKEY,AUTHDOMAIN, DATABASEURL, PROJECTID,STORAGEBUCKET, MESSAGINGSENDERID, APPID } from '@env';

// TODO: Add SDKs for Firebase products that you want to use //

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID
};

// Initialize Firebase
const initalizeFirebaseDb = initializeApp(firebaseConfig);

export default initalizeFirebaseDb;