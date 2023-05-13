firebase.initializeApp({
  apiKey: "AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8",
  authDomain: "aws-gr4.firebaseapp.com",
  projectId: "aws-gr4"
});

const ScoreJoueur = firebase.firestore().collection("ScoreJoueur");
const leaderboard = document.querySelector('#leaderboard');
const montrerplus = document.querySelector('#montrerplus');
let dernier = null;

//Prend les valeurs dans notre base de données jusqu'à atteindre une limite et les trie par ordre décroissant
function getScores(limit) {
  let Bdd = ScoreJoueur.orderBy('Score', 'desc');
  if (dernier) {
    Bdd = Bdd.startAfter(dernier);
  }
  if (limit) {
    Bdd = Bdd.limit(limit);
  }
  return Bdd.get();
}
//Affiche les donnes en html
function Afficher(querySnapshot) {
  querySnapshot.forEach(doc => {
    const donnee = doc.data();
    const Nom = donnee.Nom;
    const Score = donnee.Score;
    const Mot = donnee.Mot;

    const row = leaderboard.insertRow();
    const Colplace = row.insertCell(0);
    const Colnom = row.insertCell(1);
    const Colscore = row.insertCell(2);
    const Colmot = row.insertCell(3);

    Colnom.innerText = Nom;
    Colscore.innerText = Score;
    Colmot.innerText = Mot;

    if (dernier === null || Score < dernier) {
      dernier = Score;
      const place = leaderboard.rows.length - 1;
    }
  });
}

getScores(10).then(querySnapshot => {
  Afficher(querySnapshot);
});

//si on clique montre 5 donnees de plus
montrerplus.addEventListener('click', () => {
  getScores(5).then(querySnapshot => {
    Afficher(querySnapshot);
    if (querySnapshot.size < 5) {
      montrerplus.style.display = 'none';
    }
  });
});
