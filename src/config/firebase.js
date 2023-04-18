import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8',
  authDomain: 'aws-gr4.firebaseapp.com',
  databaseURL: 'https://aws-gr4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'aws-gr4',
  storageBucket: 'aws-gr4.appspot.com',
  messagingSenderId: '421758284621',
  appId: '1:421758284621:web:08b34ada45f92619197d04',
  measurementId: 'G-H3K18LKN1Q',
});

export default firebaseConfig;
