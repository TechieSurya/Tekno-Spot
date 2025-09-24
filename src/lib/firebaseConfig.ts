// src/app/firebaseConfig.js or .ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAhw_kAwjQkgYX0LvQ-kiWOdliUtPaa25w",
  authDomain: "teknospot-f0493.firebaseapp.com",
  projectId: "teknospot-f0493",
  storageBucket: "teknospot-f0493.appspot.com",
  messagingSenderId: "907419467375",
  appId: "1:907419467375:web:6162a76ac0cfe01376579a",
  measurementId: "G-QFDGXCMXKB"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);