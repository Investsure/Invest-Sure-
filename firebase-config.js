<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDXrrmPtO784Iy3QnHq5BR6ytJGPruzotY",
    authDomain: "investsure-3a827.firebaseapp.com",
    projectId: "investsure-3a827",
    storageBucket: "investsure-3a827.appspot.com",
    messagingSenderId: "23509833134",
    appId: "1:23509833134:web:86362cdd2f52f730c8a43f"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
</script>

// Firebase ইনিশিয়ালাইজ করুন
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore ইনিশিয়ালাইজ 

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc };
