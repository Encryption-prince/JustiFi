// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Initialize Firebase (replace with your Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyBab5yyESvABX735reITZG0PMp5XwhRB9o",
    authDomain: "mentorconnect-ee885.firebaseapp.com",
    projectId: "mentorconnect-ee885",
    storageBucket: "mentorconnect-ee885.appspot.com",
    messagingSenderId: "1041503380218",
    appId: "1:1041503380218:web:44f765028c67a73be6df43",
    measurementId: "G-PFV038H8RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
    // Get the forms
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Function to handle Google Login
    window.loginWithGoogle = async function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider); // Use signInWithPopup
            const user = result.user;
            console.log("User logged in: ", user.displayName);

            // Fetch the token and store it
            const idToken = await user.getIdToken(true); // Get Firebase token

            localStorage.setItem("authToken", idToken);  // Store token for future API requests

            // Get the UID
            const uid = user.uid; // Get the UID of the logged-in user
            console.log("User UID:", uid); // Log the UID
            //localStorage.setItem("userId", uid);

            // Check authentication against backend
            await checkAuthentication(idToken); // Passing the token
            window.location.href = "index.html"; // Redirect to your main page
        } catch (error) {
            console.error("Error during login with Google: ", error);
            alert(`Login failed: ${error.message}`);
        }
    };

    // Function to check authentication against the backend
    async function checkAuthentication(uid) {
        const response = await fetch('http://localhost:5000/api/v1/isAuthenticated', {
            headers: {
                'Authorization': `Bearer ${uid}`
            }
        });

        if (response.ok) {
            console.log("User is authenticated");
        } else {
            console.log("User is not authenticated");
        }
    }

    // Signup form submit event
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            alert("Signup successful! Please log in.");

            // Get the UID
            const uid = user.uid; // Get the UID of the logged-in user
            console.log("User UID:", uid); // Log the UID
            //localStorage.setItem("userId", uid);
            const idToken = await user.getIdToken(true); // Get Firebase token
            localStorage.setItem("authToken", idToken);  // Store token for future API requests

            // Check authentication against backend
            await checkAuthentication(idToken);

            // Function to check authentication against the backend
            async function checkAuthentication(uid) {
                const response = await fetch('http://localhost:5000/api/v1/isAuthenticated', {
                    headers: {
                        'Authorization': `Bearer ${uid}`
                    }
                });

                if (response.ok) {
                    console.log("User is authenticated");
                } else {
                    console.log("User is not authenticated");
                }
            }

            signupForm.reset();
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed: " + error.message);
        }
    });

    // Login form submit event
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            alert("Login successful! Welcome.");

            const idToken = await user.getIdToken(true);  // Get Firebase token
            localStorage.setItem("authToken", idToken);  // Store token for future API requests

            // Check authentication against backend
            await checkAuthentication(idToken);

            window.location.href = "index.html"; // Redirect to your main page
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed: " + error.message);
        }
    });
});