firebase.initializeApp({
    apiKey: "AIzaSyCw2s6XP0q-Bx1okAH5iqYwyr5V5N95gJ8 ",
    authDomain: "aws-gr4.firebaseapp.com",
    projectId: "aws-gr4"
  });
  
document.querySelector('input[type="submit"]').addEventListener('click', function() {
    var mot = document.getElementById('Requete').value;
    console.log(mot);
    const basededonnee = firebase.firestore().collection("MotsSoumis").add({
        mot: mot
    })
    .then(function(docRef) {
        alert("Votre demande d'ajout a été prise en compte!");
      })
      .catch(function(error) {
        alert("Erreur");
      });
});