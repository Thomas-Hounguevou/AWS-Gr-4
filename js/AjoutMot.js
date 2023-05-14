import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, onValue,get,child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


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
const dbRef = ref(getDatabase(app));
const db = getFirestore(app);

async function translateWord(word) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyATczRLD_rt-JkGHZA7fwsfdwJ5YeWz7Yo&q=${word}&source=fr&target=en`;

  const response = await fetch(url);
  const json = await response.json();

  const translation = json.data.translations[0].translatedText;
  return translation;
}

async function checkDB(mot, firestoreCollection) {
  try {
    const firestoreSnapshot = await getDocs(firestoreCollection);
    let found = false;
    firestoreSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.mot.toUpperCase() === mot.toUpperCase()) {
        alert("Ce mot a déjà été soumis");
        found = true;
      }
    });

    if (found) {
      return false;
    }
    const types = ["Gaming", "body_parts", "couleurs", "fruits_et_legumes", "marques", "metier", "meubles", "vêtements"];
    for (const type of types) {
      const snapshot = await get(child(dbRef, type));
      const data = snapshot.val();
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const element = data[key];
          if (element.toUpperCase() === mot.toUpperCase()) {
            alert("Ce mot existe déjà dans la base de données");
            return false;
          }
        }
      }
    }

    return true;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return false;
  }
}

document.querySelector('input[type="submit"]').addEventListener('click', async function() {
  var mot = document.getElementById('Requete').value;

  const motTraduit = await translateWord(mot);
  const collectionRef = collection(db, "MotsSoumis");
  const isNotSubmitted = await checkDB(mot, collectionRef);
  
  if (isNotSubmitted){
    const basededonnee = await addDoc(collection(db, "MotsSoumis"), {
      mot: mot
    });
    alert("Votre demande d'ajout a été prise en compte!");
  
    const basededonneeeng = await addDoc(collection(db, "MotsSoumisEng"), {
      mot: motTraduit
    });

  }
});