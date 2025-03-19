import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 🔹 Supabase Configuration
const supabaseUrl = 'https://pbnlcbnxzjgeflozxwbt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ';

const supabase = createClient(supabaseUrl, supabaseKey);

// 🔹 DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const messageBox = document.getElementById('message');
const authContainer = document.getElementById('auth');
const dashboard = document.getElementById('dashboard');
const userEmail = document.getElementById('userEmail');

// ✅ Sign Up Function
signupBtn.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    const { user, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        messageBox.textContent = "Error: " + error.message;
    } else {
        messageBox.textContent = "✅ Signup successful! Check your email.";
    }
});

// ✅ Login Function
loginBtn.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        messageBox.textContent = "Error: " + error.message;
    } else {
        messageBox.textContent = "✅ Login successful!";
        localStorage.setItem('user', JSON.stringify(data.user));
        updateUI(data.user);
    }
});

// ✅ Logout Function
logoutBtn.addEventListener('click', async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('user');
    updateUI(null);
});

// ✅ Update UI
function updateUI(user) {
    if (user) {
        authContainer.style.display = 'none';
        dashboard.style.display = 'block';
        userEmail.textContent = user.email;
    } else {
        authContainer.style.display = 'block';
        dashboard.style.display = 'none';
        userEmail.textContent = '';
    }
}

// ✅ Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    updateUI(user);
});
