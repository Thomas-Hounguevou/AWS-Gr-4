const firebaseConfig = {
    apiKey: "AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8",
    authDomain: "aws-gr4.firebaseapp.com",
    databaseURL: "https://aws-gr4.firebaseio.com/",
    projectId: "aws-gr4",
    storageBucket: "aws-gr4.appspot.com",
    messagingSenderId: "421758284621",
    appId: "1:421758284621:web:08b34ada45f92619197d04",
    measurementId: "G-H3K18LKN1Q"
};
firebase.initializeApp(config);

var ScoreJoueur = firebase.database().ref("ScoreJoueur");

ScoreJoueur.onSnapshot(function(querySnapshot) {

  var scores = [];
  querySnapshot.forEach(function(doc) {
    var donnee = doc.data();
    scores.push({
      nom: donnee.Nom,
      score: donnee.Score,
      mot: donnee.Mot
    });
  });

  var ScoresTrier = scores.sort((a, b) => b.score - a.score);

  var leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";
  ScoresTrier.forEach(function(score) {
    var li = document.createElement("li");
    li.innerHTML = "Joueur: " + score.nom + " - Score: " + score.score + " - Mot: " + score.mot;
    leaderboard.appendChild(li);
  });
});