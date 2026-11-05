import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, query, orderBy, limit, getDocs, where, getCountFromServer, Timestamp, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBxCq7D9KEZ_PqDWtsLfoX6yDESHtSrEqo',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'mytiktokclone-f9789.firebaseapp.com',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://mytiktokclone-f9789-default-rtdb.firebaseio.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'mytiktokclone-f9789',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'mytiktokclone-f9789.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '451392714870',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:451392714870:web:fddf2d882889a874a44757',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-RJEWD61T4V'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Re-export commonly used Firestore functions
export {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  getDoc,
  setDoc,
  where,
  getCountFromServer,
  Timestamp
};

// Re-export Auth functions
export {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
};

export type { FirebaseUser };
