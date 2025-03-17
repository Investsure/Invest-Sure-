// Firebase SDK থেকে প্রয়োজনীয় ফাংশন ইম্পোর্ট করুন
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase কনফিগারেশন সেটআপ
const firebaseConfig = {
  apiKey: "AIzaSyDXrrmPtO784Iy3QnHq5BR6ytJGPruzotY",
  authDomain: "investsure-3a827.firebaseapp.com",
  projectId: "investsure-3a827",
  storageBucket: "investsure-3a827.appspot.com",
  messagingSenderId: "23509833134",
  appId: "1:23509833134:web:86362cdd2f52f730c8a43f"
};

// Firebase ইনিশিয়ালাইজ করুন
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// এক্সপোর্ট করুন যাতে অন্য ফাইল থেকে এক্সেস করা যায়
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDXrrmPtO784Iy3QnHq5BR6ytJGPruzotY",
  authDomain: "investsure-3a827.firebaseapp.com",
  projectId: "investsure-3a827",
  storageBucket: "investsure-3a827.appspot.com",
  messagingSenderId: "23509833134",
  appId: "1:23509833134:web:86362cdd2f52f730c8a43f"
};

// Firebase ইনিশিয়ালাইজ করুন
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore ইনিশিয়ালাইজ 

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc };
