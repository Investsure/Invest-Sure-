// Firebase Authentication ফাংশন
const auth = firebase.auth();

// 🔥 Sign Up Function
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "✅ Account created successfully!";
        })
        .catch((error) => {
            document.getElementById("message").innerText = "❌ " + error.message;
        });
}

// 🔥 Login Function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "✅ Login successful!";
            window.location.href = "dashboard.html"; // Dashboard এ রিডাইরেক্ট
        })
        .catch((error) => {
            document.getElementById("message").innerText = "❌ " + error.message;
        });
}

// 🔥 Google Login Function
function loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            document.getElementById("message").innerText = "✅ Google Login successful!";
            window.location.href = "dashboard.html"; // Dashboard এ রিডাইরেক্ট
        })
        .catch((error) => {
            document.getElementById("message").innerText = "❌ " + error.message;
        });
}
