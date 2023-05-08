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
// Get elements
var email = document.getElementById('email');
var passwoSrd = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var signUpBtn = document.getElementById('signup');
  
// Add sign up event
if (signUpBtn) {
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    const userConfirmPassword = confirmPassword.value;

    if (userPassword !== userConfirmPassword) {
      swal('Passwords do not match');
      return;
    }

    // Sign up user with Firebase authentication
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then((userCredential) => {
        // User is signed up
        console.log('User signed up:', userCredential);
        window.location.replace('landingpage.html');
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorCode, errorMessage);
        swal("Cannot sign up user", errorMessage, "error");
      });
  });
}