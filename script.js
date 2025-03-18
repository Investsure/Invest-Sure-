const SUPABASE_URL = "https://pbnlcbnxzjgeflozxwbt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ✅ Login Function
async function loginUser(event) {
    event.preventDefault();
    
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if (!email || !password) {
        alert("ইমেইল এবং পাসওয়ার্ড দিতে হবে!");
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert("লগইন ব্যর্থ হয়েছে! " + error.message);
        console.error("Error:", error);
    } else {
        alert("লগইন সফল!");
        window.location.href = "dashboard.html"; // লগইন হলে অন্য পেজে নিয়ে যাবে
    }
}
// ✅ Signup Function
async function signUpUser(event) {
    event.preventDefault();

    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (!email || !password) {
        alert("ইমেইল এবং পাসওয়ার্ড দিতে হবে!");
        return;
    }

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        alert("সাইনআপ ব্যর্থ হয়েছে! " + error.message);
        console.error("Error:", error);
    } else {
        alert("সাইনআপ সফল! অনুগ্রহ করে ইমেইল চেক করুন এবং ভেরিফাই করুন।");
        window.location.href = "login.html"; // সাইনআপ হলে লগইন পেজে নিয়ে যাবে
    }
}
