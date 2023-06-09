const firebaseConfig = {
    apiKey: "AIzaSyB3hyVXpNXlPreiTxnnKCSxCq8uqwYf6uU",
    authDomain: "clue-chase.firebaseapp.com",
    projectId: "clue-chase",
    storageBucket: "clue-chase.appspot.com",
    messagingSenderId: "753243367346",
    appId: "1:753243367346:web:90c5425803d4a6c53126ab",
    measurementId: "G-K7FMP06G66"
  };
  firebase.initializeApp(firebaseConfig);
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');

if(loginButton)
{
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('login button clicked');
        const email = emailInput.value;
        const password = passwordInput.value;
        if (!email) {
        swal('Please enter your email');
        return;
        }
        
        if (!password) {
        swal('Please enter your password');
        return;
        }
        
        // Sign in with Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // Redirect to success page
            swal('login successful');
            setInterval(window.location.replace('assets/routes/landingpage.html'),2000);
        })
        .catch((error) => {
            const errorMessage = error.message;
            swal(errorMessage);
        });
    });
}