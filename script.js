// Supabase Initialization (Updated)
const SUPABASE_URL = "https://pbnlcbnxzjgeflozxwbt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// ✅ Login Function
async function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("❌ Please enter email and password!");
        return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        alert("❌ Login failed: " + error.message);
    } else {
        alert("✅ Login successful!");
        window.location.href = "dashboard.html";  // Redirect to dashboard
    }
}

// ✅ Signup Function
async function signUp() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("❌ Please fill all fields!");
        return;
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        alert("❌ Signup failed: " + error.message);
    } else {
        alert("✅ Account created successfully!");
        window.location.href = "index.html";  // Redirect to login page
    }
}
