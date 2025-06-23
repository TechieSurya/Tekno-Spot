// src/app/firebaseConfig.js or .ts

import { initializeApp, getApps } from "firebase/app";
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

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };