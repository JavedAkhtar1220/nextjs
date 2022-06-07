import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAV2x7-dM3tVLkSpECAexgTXR8Li2sv2ks",
  authDomain: "dingdong-93899.firebaseapp.com",
  projectId: "dingdong-93899",
  storageBucket: "dingdong-93899.appspot.com",
  messagingSenderId: "250258211602",
  appId: "1:250258211602:web:bf1f5a609b5132e54229cb",
  measurementId: "G-SYNMLZ8XZD"
};
// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };