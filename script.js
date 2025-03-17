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
import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, doc, setDoc, getDoc } from './firebase-config.js';

// 🔹 **সাইন আপ ফাংশন**
function signUp() {
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let username = document.getElementById("signup-username").value; // ইউজারের নাম ইনপুট

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      
      // Firestore-এ ইউজারের তথ্য সংরক্ষণ করুন
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        balance: 100, // ডিফল্ট ব্যালেন্স ১০০ টাকা
        joined: new Date().toISOString()
      });

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

export { signUp, login };
import { auth, db, signOut, doc, getDoc } from './firebase-config.js';

// 🔹 **ড্যাশবোর্ডে ইউজারের তথ্য দেখানো**
function loadUserData() {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    getDoc(userRef).then((docSnap) => {
      if (docSnap.exists()) {
        document.getElementById("username").textContent = docSnap.data().username;
        document.getElementById("email").textContent = docSnap.data().email;
        document.getElementById("balance").textContent = docSnap.data().balance;
      }
    });
  } else {
    window.location.href = "index.html"; // ইউজার না থাকলে লগইন পেজে পাঠাবে
  }
}

// 🔹 **লগআউট ফাংশন**
function logout() {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ইউজার ডাটা লোড করা
window.onload = loadUserData;

export { logout };
