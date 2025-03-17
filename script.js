import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from './firebase-config.js';

// 🔹 **সাইন আপ ফাংশন**
function signUp() {
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Sign-up Successful!");
      window.location.href = "dashboard.html"; // সফল হলে ড্যাশবোর্ডে পাঠাবে
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 🔹 **লগইন ফাংশন**
function login() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      window.location.href = "dashboard.html"; // লগইন সফল হলে ড্যাশবোর্ডে পাঠাবে
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 🔹 **লগআউট ফাংশন**
function logout() {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "index.html"; // লগআউট হলে হোমপেজে যাবে
    })
    .catch((error) => {
      alert(error.message);
    });
}

// 🔹 **Sign-up থেকে Login-এ সুইচ ফাংশন**
document.getElementById("switch-to-login").addEventListener("click", function() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});

document.getElementById("switch-to-signup").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
});

// Export functions (optional)
export { signUp, login, logout };
