// Définir la date limite
var countDownDate = new Date().getTime() + (5 * 60 * 1000);

// Mettre à jour le compte à rebours toutes les secondes
var x = setInterval(function() {

  // Récupérer la date et l'heure actuelles
  var now = new Date().getTime();

  // Calculer la distance entre maintenant et la date limite
  var distance = countDownDate - now;

  // Calculer les minutes et secondes restantes
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le compte à rebours dans l'élément avec l'id "countdown"
  document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

  // Si la date limite est dépassée, afficher "EXPIRÉ"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRÉ";
  }
}, 1000);
