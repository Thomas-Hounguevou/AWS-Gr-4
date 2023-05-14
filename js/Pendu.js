// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variables Globales ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var mot = ""
mot = mot.toUpperCase()
var secret = []
var tmp = ""
var nbEssai = 0
var lettreUtilise = []
var lettre = "o"
var Present = false
var divmain = document.querySelector("div")
divmain.id = "main"
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alph = 0
let score
let pseudo = ""

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fonctions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, onValue,get,child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
get(child(dbRef, `couleurs`)).then((snapshot) => {
  if (snapshot.exists()) {
    //console.log(snapshot.val());
    const data = snapshot.val();
    mot = data[Math.floor(Math.random() * data.length)];
    mot = remplacerCaracteresSpeciaux(mot);
    mot = mot.toUpperCase();
    //console.log(mot);
    ClearPage();
    getPseudo();
     
    


  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


function remplacerCaracteresSpeciaux(chaine) {
    let nouvelleChaine = chaine;
    nouvelleChaine = nouvelleChaine.replace(/[éèêë]/g, 'e');
    nouvelleChaine = nouvelleChaine.replace(/[àâæ]/g, 'a');
    nouvelleChaine = nouvelleChaine.replace(/[ïî]/g, 'i');
    nouvelleChaine = nouvelleChaine.replace(/[ôœ]/g, 'o');
    nouvelleChaine = nouvelleChaine.replace(/[ùûü]/g, 'u');
    nouvelleChaine = nouvelleChaine.replace(/[ç]/g, 'c');
    nouvelleChaine = nouvelleChaine.replace(/[Ññ]/g, 'n');
    nouvelleChaine = nouvelleChaine.replace(/[á]/g, 'a');
    nouvelleChaine = nouvelleChaine.replace(/[í]/g, 'i');
    nouvelleChaine = nouvelleChaine.replace(/[ó]/g, 'o');
    nouvelleChaine = nouvelleChaine.replace(/[úü]/g, 'u');
    nouvelleChaine = nouvelleChaine.replace(/[']/g, ' ');
    return nouvelleChaine;
  }

function calculeScore(mot) {
    let score = 0;
    const points = {
      'A': 1, 'E': 1, 'I': 1, 'L': 1, 'N': 1, 'O': 1, 'R': 1, 'S': 1, 'T': 1, 'U': 1,
      'D': 2, 'G': 2, 'M': 2,
      'B': 3, 'C': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4,
      'J': 8, 'Q': 8,
      'K': 10, 'W': 10, 'X': 10, 'Y': 10, 'Z': 10
    };
    for (let i = 0; i < mot.length; i++) {
      const lettre = mot[i].toUpperCase();
      if (points[lettre]) {
        score += points[lettre];
      }
    }
    return score;
  }

// Fonction qui demande un pseudo au joueur
function getPseudo(_pseudo) {
    var a = document.createElement("a");
    a.id = "txt";
    a.style = "font-family: 'Press Start 2P', cursive; font-size: 30px; color: black;"
    a.innerHTML = "Entrez votre pseudo : " ;
    divmain.appendChild(a);
    var input = document.createElement("input");
    input.type = "text";
    input.id = "pseudo";
    input.placeholder = "Pseudo..";
    divmain.appendChild(input);
    var button = document.createElement("button");
    button.id = "button";
    button.innerHTML = "Commencer";
    
    divmain.appendChild(button);
    button.addEventListener("click", function () {
        pseudo = document.getElementById("pseudo").value;
        if (pseudo == null || pseudo == "") {
            alert("Entrez un pseudo valide");
        } else {
            ClearPage();
            pseudo = pseudo.toUpperCase();
            console.log(pseudo);
            afficherImage(nbEssai);
            affichageTimer();
            
            Init(mot);
            Clavier()
            SelectClavierWord()
            
        }
    });
}
  
var distance;
var minutes;
var seconds;
function affichageTimer() {
    var timer = document.createElement("div");
    timer.id = "timer";
    var countdown = document.createElement("h1");
    countdown.id = "countdown";
    countdown.innerText = "00:02:00";
    countdown.style = "font-family: 'Orbitron', sans-serif;";
    timer.appendChild(countdown);
    divmain.appendChild(timer);

    var countDownDate = new Date().getTime() + (2 * 60 * 1000);

    // Mettre à jour le compte à rebours toutes les secondes
    var x = setInterval(function() {

    // Récupérer la date et l'heure actuelles
    var now = new Date().getTime();

    // Calculer la distance entre maintenant et la date limite
    distance = countDownDate - now;

    // Calculer les minutes et secondes restantes
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher le compte à rebours dans l'élément avec l'id "countdown"
    document.getElementById("countdown").innerText ="00:"+ "0" +minutes + ":" + seconds + " ";


    // Si la date limite est dépassée, afficher "EXPIRÉ"
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerText = "Temps écoulé !";
        document.getElementById("countdown").style.color = "red";
        retirerClaviers();
        Perdu();  

    }
    }, 1000);
}

// Fonction qui renvoie la lettre entrée au clavier
function KeyPressed(event) {
    let lettre = event.key.toUpperCase();
  
    // Vérifie si c'est une bien lettre
    if (alphabet.indexOf(lettre) >= 0) {
      // Vérifie que la lettre n'a pas déjà été utilisée
      if (VerifLettre(lettre)) {
        // Vérifie si la lettre est dans le mot
        check(mot, lettre);
  
        // Met à jour l'affichage des erreurs
        if (!Present) {
			nbEssai++;
            afficherImage(nbEssai)
			UpdateEssai();
		  }
			
        // Met à jour l'affichage des lettres utilisées
        UpdateLettreUtilise(lettreUtilise);
  
        // Vérifie si le joueur a gagné ou perdu
        if (VerifGagne(secret)) {
          alert("Vous avez gagné ! Le mot était bien " + mot);
		  document.removeEventListener("keydown", KeyPressed);
		  ClearPage() 
		  Gagner()
        } else if (VerifPerdu(nbEssai) || distance < 0) {
          alert("Vous avez perdu ! Le mot était " + mot);
		  document.removeEventListener("keydown", KeyPressed);
		  ClearPage() 
		  Perdu()
        }
      }
    }
  }
  

// Fonction qui initie le jeu avec un mot choisi
function Init(mot) {
    score = calculeScore(mot);
    //console.log(`Le mot "${mot}" vaut ${score} points`);
    var div = document.createElement("div");
    div.id = "Zonejeu"
    divmain.appendChild(div)
    var table = document.createElement("table");
    var td = document.createElement("td");
    div.appendChild(table);
	document.addEventListener("keydown", KeyPressed);
    for (let i = 0; i < mot.length; i++) {
        if (mot[i] == " ") {
            secret[i] = " "
            td = document.createElement("td");
            td.innerHTML = " ";
            td.className = i
            table.appendChild(td);

        }
        else if (mot[i] == "-") {
            secret[i] = "-"
            td = document.createElement("td");
            td.innerHTML = "-";
            td.className = i
            table.appendChild(td);

        }
        else {
            secret[i] = "_"
            td = document.createElement("td");
            td.innerHTML = "_";
            td.className = i
            table.appendChild(td);

        }

    }
    document.body.appendChild(divmain);
    AfficheEssai(nbEssai)
    AfficheLettreUtilise(lettreUtilise)
}


// fonction qui affiche l'image correspondant au nombre d'erreurs actuel
function afficherImage(nbEssai) {
    if (nbEssai < 0 || nbEssai > 10) {
      console.error("Le nombre d'essais doit être entre 1 et 10");
      return;
    }
  
    let image = document.getElementById("image");
    image.src = "../images/" + nbEssai + ".png";
  }
  
  

// Met à jour l'affichage nombre d'essais en html
function UpdateEssai() {
    var div = document.getElementById("Zonejeu")
    var p = document.getElementById("nberreur");
    p.innerHTML = "Nombre d'erreurs : " + nbEssai
    p.style.color = "red"; // set font color to red
    div.appendChild(p)
    document.body.appendChild(divmain);
}

// vérifie si la lettre est dans le mot 
function check(mot, lettre) {
    Present = false
    for (let i = 0; i < mot.length; i++) {
        if (mot[i] == lettre) {
            secret[i] = lettre
            var td = document.getElementsByClassName(i)
            td[0].innerHTML = lettre
            Present = true
        }
    }

}

/*function Affiche(secret) {
    tmp = ""
    for (let i = 0; i < secret.length; i++) {
        tmp = tmp + secret[i]
    }
}*/

//vérification si la lettre n'a pas déjà été utilisée
function VerifLettre(lettre) {
    if (lettreUtilise.includes(lettre)) {
        return false
    }
    else {
        lettreUtilise.push(lettre)
        return true
    }
}

// Fonction qui vérifie si le joueur a gagné. 

function VerifGagne(secret) {
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == "_") {
            return false
        }
    }
    return true
}

// Fonction qui vérifie si le joueur a perdu. Nombre d'essais > 9 
function VerifPerdu(nbEssai) {
    if (nbEssai == 10) {
        return true
    }
    else {
        return false
    }
}

//mets à jour l'affichage des lettres utilisées html 
function UpdateLettreUtilise(lettreUtilise) {
    var div = document.getElementById("Zonejeu")
    var p = document.getElementById("lettreutilise");
    p.innerHTML = "Lettres utilisées : " + lettreUtilise
    
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche les lettres utilisées html
function AfficheLettreUtilise(lettreUtilise) {
    var div = document.getElementById("Zonejeu")
    var p = document.createElement("p");
    p.id = "lettreutilise"
    p.innerHTML = "Lettres utilisées : " + lettreUtilise
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche le nombre d'essais html
function AfficheEssai(nbEssai) {
    var div = document.getElementById("Zonejeu")
    var p = document.createElement("p");
    p.id = "nberreur"
    p.innerHTML = "Nombre d'erreur : " + nbEssai
    div.appendChild(p)
    document.body.appendChild(divmain);
}


//jeu du pendu html
function Jeu(lettre) {
    check(mot, lettre)
    VerifLettre(lettre)
    if (Present == true) {
        if (VerifGagne(secret)) {
            ClearPage()
            Gagner()
        }
    }
    else {
        nbEssai++
        afficherImage(nbEssai)
        if (VerifPerdu(nbEssai)) {
            ClearPage()
            Perdu()
        }
    }
    UpdateEssai()
    UpdateLettreUtilise(lettreUtilise)
    //console.log("Lettre utilisé : " + lettreUtilise)
    //console.log("nombre d'essai : " + nbEssai)

}

// on ajoute au score final 10 fois le nombre d'erreurs possibles
// (si le jeu est gagné)
function pointsBonus (nbEssai) {
    return 10 * (10 - nbEssai)
}

//affiche Gagné html
function Gagner() {
    var div = document.createElement("div");
    div.id = "gagner"
    divmain.appendChild(div)
    var p = document.createElement("p");
    let scorefinal = calculeScore(secret) + pointsBonus(nbEssai);
    p.innerHTML = "Gagné, vous avez trouvé le mot " + mot
    + " !\n Votre score est de " + scorefinal
    + ",\n dont " + (10 - nbEssai)*10 + " points bonus pour " + (10 - nbEssai) + " essai(s) restant(s) !"

    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche perdu html
function Perdu() {
    var div = document.createElement("div");
    div.id = "perdu"
    divmain.appendChild(div)
    var p = document.createElement("p");
    let scorefinal = calculeScore(secret);
    p.innerHTML = "Perdu, vous n'avez pas trouvé le mot " + mot
    + ".\n Votre score est de " + scorefinal + ".";
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//efface tt les element de la page 
function ClearPage() {
    var div = document.getElementById("main")
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//affiche le clavier en html
function Clavier() {
    var div = document.createElement("div");
    div.id = "Zoneclavier"
    divmain.appendChild(div)
    var table = document.createElement("table");
    table.id = "clavier"
    div.appendChild(table)
    for (let i = 0; i < 3; i++) {
        var tr = document.createElement("tr");
        tr.id = "touche"
        table.appendChild(tr)
        for (let j = 0; j < 10; j++) {
            if (alph == 26) {
                break
            }

            var td = document.createElement("td");
            td.id = alphabet[alph]
            td.innerHTML = alphabet[alph]
            tr.appendChild(td)
            alph++
        }
    }
    document.body.appendChild(divmain);
}

//recupere la lettre selectionner sur le clavier 
function SelectClavierWord() {
    var table = document.getElementById("clavier")
    var onclick = function (event) {
      var target = event.target;
      // vérifie si on clique bien sur une lettre
      if (/^[A-Za-z]$/.test(target.id)) { 
        var lettre = target.id
        Jeu(lettre)
      }
    };
    table.addEventListener("click", onclick);
    if (VerifGagne(secret) || nbEssai >= 10) {
        table.removeEventListener("click", this.onclick);
    }
  }
  

// retire le clavier et le listener si le temps est écoulé
function retirerClaviers() {
var clavier = document.getElementById("Zoneclavier");
if (clavier) {
    clavier.parentNode.removeChild(clavier);
}
var zone = document.getElementById("Zonejeu");
if (zone) {
    zone.parentNode.removeChild(zone);
}


var keydownEvent = KeyPressed;
document.removeEventListener("keydown", keydownEvent);

}
// Fonction principale

function main() {
    Init(mot)
    while (true) {
        Affiche(secret)
        //console.log("mot a trouver : " + mot)
        //console.log(tmp)
        lettre = prompt("Entrez une lettre :")
        check(mot, lettre)
        VerifLettre(lettre)
        if (Present == true) {
            if (VerifGagne(secret)) {
                console.log("Gagné")
                break
            }
        }
        else {
            nbEssai++
            if (VerifPerdu(nbEssai)) {
                console.log("Perdu")
                break
            }
        }
        AfficheLettreUtilise(lettreUtilise)
        console.log("Lettre utilisé : " + tmp)
        AfficheEssai(nbEssai)
        console.log("nombre d'essai : " + tmp)
    }
}
