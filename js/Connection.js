import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
          apiKey: "AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8",
          authDomain: "aws-gr4.firebaseapp.com",
          databaseURL: "https://aws-gr4-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "aws-gr4",
          storageBucket: "aws-gr4.appspot.com",
          messagingSenderId: "421758284621",
          appId: "1:421758284621:web:08b34ada45f92619197d04",
          measurementId: "G-H3K18LKN1Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

$('#submit').click(function() {
    const email = $('#username').val();
    const password = $('#password').val();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user; 
        alert('User logged in successfully!');    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error logging in user!');
    });
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
          email: email,
          password: password
        }).then(() => {
          alert('User created successfully!');
        }).catch((error) => {
          console.error(error);
          alert('Error creating user!');
        });
      })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error creating user!');
            });  
  });