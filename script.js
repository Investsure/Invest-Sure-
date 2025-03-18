// Supabase Client Initialization
const { createClient } = supabase;
const supabaseUrl = 'https://pbnlcbnxzjgeflozxwbt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ';
const supabase = createClient(supabaseUrl, supabaseKey);

// DOM Elements for Login
const loginForm = document.getElementById('loginForm');
const emailInputLogin = document.getElementById('emailLogin');
const passwordInputLogin = document.getElementById('passwordLogin');

// DOM Elements for Signup
const signupForm = document.getElementById('signupForm');
const emailInputSignup = document.getElementById('emailSignup');
const passwordInputSignup = document.getElementById('passwordSignup');

// Login Function
async function loginUser(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert(error.message);
    } else {
        alert('Login successful');
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }
}

// SignUp Function
async function signUpUser(email, password) {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        alert(error.message);
    } else {
        alert('Signup successful! Please check your email for verification.');
        window.location.href = 'login.html';
    }
}

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInputLogin.value;
    const password = passwordInputLogin.value;
    loginUser(email, password);
});

// Handle Signup Form Submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInputSignup.value;
    const password = passwordInputSignup.value;
    signUpUser(email, password);
});
