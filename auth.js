// সাইন আপ ফাংশন
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed up
            const user = userCredential.user;
            alert("Signed up successfully!");
            window.location.href = "dashboard.html"; // ড্যাশবোর্ডে চলে যাবে
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
    // লগইন ফাংশন
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully logged in
            const user = userCredential.user;
            alert("Logged in successfully!");
            window.location.href = "dashboard.html"; // ড্যাশবোর্ডে চলে যাবে
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}
}// auth.js ফাইলে লগআউট ফাংশন
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html"; // লগআউট হলে লগইন পেজে যাবে
    }).catch((error) => {
        alert("Logout Failed: " + error.message);
    });
}
