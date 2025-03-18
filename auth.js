import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 🔥 তোমার Supabase তথ্য এখানে বসাও
const supabaseUrl = "https://pbnlcbnxzjgeflozxwbt.supabase.co";  
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibmxjYm54empnZWZsb3p4d2J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNjU3NTAsImV4cCI6MjA1Nzg0MTc1MH0.sZylRRmtx88t0d2x40yhgQrvWDAwPimBxtsKgDE_EpQ";  

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Google Login Function
document.getElementById('google-login').addEventListener('click', async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: "https://www.rrrbazar.com/"  // 🔥 ইউজারকে এই লিংকে পাঠাবে
        }
    });
    
    if (error) console.error('Google Login Failed:', error.message);
});

// Logout Function
document.getElementById('logout').addEventListener('click', async () => {
    await supabase.auth.signOut();
    document.getElementById('user-info').innerText = "Logged out!";
});

// Check Login State
supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
        document.getElementById('user-info').innerText = `Logged in as ${session.user.email}`;
        window.location.href = "https://www.rrrbazar.com/";  // 🔥 লগইন হলে এই ওয়েবসাইটে পাঠাবে
    }
});
