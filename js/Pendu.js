// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variables Globales ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var mot = ""
var secret = []
var nbEssai = 0
var lettreUtilise = []
var Present = false
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alph = 0
var divmain = document.querySelector("div")
divmain.id = "main"


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fonctions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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
const database = getDatabase(app);

let data = null; // création de la variable globale

const starCountRef = ref(database, 'couleurs');
onValue(starCountRef, (snapshot) => {
    data = snapshot.val(); // stockage des données dans la variable globale
    console.log(data);
    mot = data[Math.floor(Math.random() * data.length)];
    mot = remplacerCaracteresSpeciaux(mot);
    mot = mot.toUpperCase();
    console.log(mot);
    Init(mot);
    Clavier()
    SelectClavierWord()
    afficherImage(nbEssai); 
});



const score = calculeScore(mot);
console.log(`Le mot "${mot}" vaut ${score} points`);

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
			UpdateEssai();
		  }
			
        // Met à jour l'affichage des lettres utilisées
        UpdateLettreUtilise(lettreUtilise);
  
        // Vérifie si le joueur a gagné ou perdu
        if (VerifGagne(secret)) {
          alert("Vous avez gagné !");
		  document.removeEventListener("keydown", KeyPressed);
		  ClearPage() 
		  Gagner()
        } else if (VerifPerdu(nbEssai)) {
          alert("Vous avez perdu !");
		  document.removeEventListener("keydown", KeyPressed);
		  ClearPage() 
		  Perdu()
        }
      }
    }
  }
  

// Fonction qui initie le jeu avec un mot choisis (Hello World)
function Init(mot) {
    var div = document.createElement("div");
    div.id = "Zonejeu"
    divmain.appendChild(div)
    var table = document.createElement("table");
    table.id = "motCache"
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
        else if (mot[i] == "'") {
            secret[i] = "'"
            td = document.createElement("td");
            td.innerHTML = "'";
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
    var image = document.getElementById("image");
    switch(nbEssai) {
        case 1:
            image.src = "../images/1.jpg";
        break;
        case 2:
            image.src = "../images/2.jpg";
        break;
        case 3:
            image.src = "../images/3.jpg";
        break;
        case 4:
            image.src = "../images/4.jpg";
        break;
        case 5:
            image.src = "../images/5.jpg";
        break;
        case 6:
            image.src = "../images/6.jpg";
        break;
        case 7:
            image.src = "../images/7.jpg";
        break;
        case 8:
            image.src = "../images/8.jpg";
        break;
        case 9:
            image.src = "../images/9.jpg";
        break;
        case 10:
            image.src = "../images/10.jpg";
        break;
    	default:
            image.src = "../images/0.png";
    }
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
    p.innerHTML = "Lettre utilisé : " + lettreUtilise
    
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche les lettres utilisées html
function AfficheLettreUtilise(lettreUtilise) {
    var div = document.getElementById("Zonejeu")
    var p = document.createElement("p");
    p.id = "lettreutilise"
    p.innerHTML = "Lettre utilisé : " + lettreUtilise
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
        if (VerifPerdu(nbEssai)) {
            ClearPage()
            Perdu()
        }
    }
    UpdateEssai()
    UpdateLettreUtilise(lettreUtilise)
    console.log("Lettre utilisé : " + lettreUtilise)
    console.log("nombre d'essai : " + nbEssai)

}

//affiche Gagné html
function Gagner() {
    var div = document.createElement("div");
    div.id = "gagner"
    divmain.appendChild(div)
    var p = document.createElement("p");
    p.innerHTML = "Gagné"
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche perdu html
function Perdu() {
    var div = document.createElement("div");
    div.id = "perdu"
    divmain.appendChild(div)
    var p = document.createElement("p");
    p.innerHTML = "Vous avez Perdu ! Le mot était : " + mot
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
        var lettre = target.id
        if (lettre == "touche") {
            return
        }
        else if (lettre == "clavier") {
            return
        }
        else if (lettre == "Zoneclavier") {
            return
        }
        else 
            Jeu(lettre)
    };
	table.addEventListener("click", onclick);
	if (VerifGagne(secret) || nbEssai >= 10) {
		table.removeEventListener("click", this.onclick);
	}
}








