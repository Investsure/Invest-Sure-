// Supabase setup
const SUPABASE_URL = "https://pbnlcbnxzjgeflozxwbt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// সাইনআপ ফাংশন
document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: { username: username }
        }
    });

    if (error) {
        alert(error.message);
    } else {
        alert("Sign Up Successful!");
        window.location.href = "login.html"; // Sign up successful হলে লগইন পেজে রিডাইরেক্ট হবে।
    }
});

// লগইন ফাংশন
document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert(error.message);
    } else {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // লগইন সফল হলে ড্যাশবোর্ডে রিডাইরেক্ট হবে।
    }
});
