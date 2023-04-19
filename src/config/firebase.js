import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ref, getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8',
  authDomain: 'aws-gr4.firebaseapp.com',
  databaseURL: 'https://aws-gr4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'aws-gr4',
  storageBucket: 'aws-gr4.appspot.com',
  messagingSenderId: '421758284621',
  appId: '1:421758284621:web:08b34ada45f92619197d04',
  measurementId: 'G-H3K18LKN1Q',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const dbRef = ref(getDatabase(app));
