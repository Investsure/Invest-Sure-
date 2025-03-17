// auth.js ফাইলে লগআউট ফাংশন
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html"; // লগআউট হলে লগইন পেজে যাবে
    }).catch((error) => {
        alert("Logout Failed: " + error.message);
    });
}
