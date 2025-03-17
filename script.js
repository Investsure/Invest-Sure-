// Firebase SDK ইনক্লুড করতে হবে (index.html বা signup.html এর <body> এর আগে)
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"></script>

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDXrrmPtO784Iy3QnHq5BR6ytJGPruzotY",
    authDomain: "investsure-3a827.firebaseapp.com",
    projectId: "investsure-3a827",
    storageBucket: "investsure-3a827.appspot.com", // ✅ সঠিকভাবে ঠিক করা হয়েছে
    messagingSenderId: "23509833134",
    appId: "1:23509833134:web:86362cdd2f52f730c8a43f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login Function
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("✅ Login Successful!");
            window.location.href = "dashboard.html"; // লগইন সফল হলে ড্যাশবোর্ডে পাঠানো হবে
        })
        .catch((error) => {
            alert("❌ " + error.message);
        });
}

// Signup Function
function signUp() { // ✅ ফাংশনের নাম signup -> signUp পরিবর্তন করা হয়েছে (html ফাইলের সাথে মিল রেখে)
    var email = document.getElementById("email").value; // ✅ id ঠিক করা হয়েছে
    var password = document.getElementById("password").value; // ✅ id ঠিক করা হয়েছে

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("✅ Account Created Successfully!");
            window.location.href = "dashboard.html"; // ✅ সাইন আপ সফল হলে ড্যাশবোর্ডে পাঠানো হবে
        })
        .catch((error) => {
            alert("❌ " + error.message);
        });
}

// Logout Function
function logout() {
    auth.signOut().then(() => {
        alert("✅ Logged out successfully!");
        window.location.href = "index.html"; // ✅ লগআউট হলে লগইন পেজে পাঠানো হবে
    }).catch((error) => {
        alert("❌ " + error.message);
    });
}
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // ইউজার লগইন থাকলে ড্যাশবোর্ডে পাঠানো হবে
        window.location.href = "dashboard.html";
    }
});
// 🔑 User Login Function
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // লগইন সফল হলে ড্যাশবোর্ডে রিডাইরেক্ট করো
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message); // যদি কোনো এরর হয়
        });
}

// 🆕 User Signup Function
function signup() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // সাইনআপ সফল হলে ড্যাশবোর্ডে পাঠানো হবে
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html"; // লগআউট হলে লগইন পেজে যাবে
    });
}
