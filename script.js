// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDXrrmPtO784Iy3QnHq5BR6ytJGPruzotY",
  authDomain: "investsure-3a827.firebaseapp.com",
  projectId: "investsure-3a827",
  storageBucket: "investsure-3a827.firebasestorage.app",
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
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        })
        .catch((error) => {
            alert("❌ " + error.message);
        });
}

// Signup Function
function signup() {
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("✅ Account Created Successfully!");
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        })
        .catch((error) => {
            alert("❌ " + error.message);
        });
}

// Logout Function
function logout() {
    auth.signOut().then(() => {
        alert("✅ Logged Out Successfully!");
        window.location.href = "index.html";
    }).catch((error) => {
        alert("❌ " + error.message);
    });
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
