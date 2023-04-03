import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// Path: js\Login.js
import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXn_eICK_LPvJNVZVOndONusBVaRC9b3Q",
  authDomain: "jeux-du-pendu.firebaseapp.com",
  projectId: "jeux-du-pendu",
  storageBucket: "jeux-du-pendu.appspot.com",
  messagingSenderId: "630645749478",
  appId: "1:630645749478:web:e8f793888443727a15ed27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();



