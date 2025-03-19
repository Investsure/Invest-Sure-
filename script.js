// Login / SignUp Button Switch
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Toggle Forms
loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
});

// Handle Login Form Submission
document.getElementById('login-submit').addEventListener('click', function(e) {
  e.preventDefault();

  // Get login input values
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Check if email and password are provided
  if (email === '' || password === '') {
    alert('Please fill all fields.');
    return;
  }

  // Call Supabase Auth API to login (this is just an example)
  loginUser(email, password);
});


// Handle SignUp Form Submission
document.getElementById('signup-submit').addEventListener('click', function(e) {
  e.preventDefault();

  // Get signup input values
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Check if email and password are provided
  if (email === '' || password === '') {
    alert('Please fill all fields.');
    return;
  }

  // Call Supabase Auth API to signup (this is just an example)
  signUpUser(email, password);
});


// Supabase login function (example)
async function loginUser(email, password) {
  try {
    // Initialize Supabase client (Replace with your actual API URL and Key)
    const supabaseUrl = 'https://pbnlcbnxzjgeflozxwbt.supabase.co';
    const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';  // Replace with your key
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) throw error;

    alert('Login Successful! Welcome, ' + user.email);
    // Redirect to dashboard or another page
    window.location.href = '/dashboard.html';

  } catch (error) {
    alert('Error logging in: ' + error.message);
  }
}


// Supabase sign up function (example)
async function signUpUser(email, password) {
  try {
    // Initialize Supabase client (Replace with your actual API URL and Key)
    const supabaseUrl = 'https://pbnlcbnxzjgeflozxwbt.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ';  // Replace with your key
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) throw error;

    alert('SignUp Successful! Please check your email to verify your account.');
    // Redirect to login page or show a message
    window.location.href = '/login.html';

  } catch (error) {
    alert('Error signing up: ' + error.message);
  }
}
