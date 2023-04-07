// Initialize Firebase
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
  
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();
  
  // Define the list of words
const words = ["football", "basketball", "tennis", "swimming"];

// Add the list of words to Firebase
db.collection("sports")
  .doc("words")
  .set({ words })
  .then(() => {
    console.log("List of words added to Firestore");
  })
  .catch((error) => {
    console.error("Error adding list of words to Firestore: ", error);
  });
