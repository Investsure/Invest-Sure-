import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrrmPtO784Iy3QnHq5BR6ytJGPruzotY",
  authDomain: "investsure-3a827.firebaseapp.com",
  projectId: "investsure-3a827",
  storageBucket: "investsure-3a827.firebasestorage.app",
  messagingSenderId: "23509833134",
  appId: "1:23509833134:web:86362cdd2f52f730c8a43f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    })
    .catch((error) => {
      alert('Error: ' + error.message);
    });
});
