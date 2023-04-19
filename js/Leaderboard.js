firebase.initializeApp({
  apiKey: "AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8 ",
  authDomain: "aws-gr4.firebaseapp.com",
  projectId: "aws-gr4"
});

const ScoreJoueur = firebase.firestore().collection("ScoreJoueur");

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
  var headerRow = leaderboard.insertRow(0);
  var nameHeader = headerRow.insertCell();
  nameHeader.innerHTML = "<b>Nom</b>";
  var scoreHeader = headerRow.insertCell();
  scoreHeader.innerHTML = "<b>Score</b>";
  var wordHeader = headerRow.insertCell();
  wordHeader.innerHTML = "<b>Mot</b>";
  ScoresTrier.forEach(function(score) {
    var row = leaderboard.insertRow();
    var nameCell = row.insertCell();
    nameCell.innerHTML = score.nom;
    var scoreCell = row.insertCell();
    scoreCell.innerHTML = score.score;
    var wordCell = row.insertCell();
    wordCell.innerHTML = score.mot;
  });
});