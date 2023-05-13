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
let pseudo = getPseudo();
alert("Bienvenue " + pseudo + " !\nAppuyez sur enter pour commencer à jouer."); 

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
    console.log(snapshot.val());
    const data = snapshot.val();
    mot = data[Math.floor(Math.random() * data.length)];
    mot = remplacerCaracteresSpeciaux(mot);
    mot = mot.toUpperCase();
    console.log(mot);
    Init(mot);
    Clavier()
    SelectClavierWord()
    afficherImage(nbEssai); 
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
function getPseudo() {
    let pseudo = prompt("Entrez votre pseudo:");
    while (pseudo == null || pseudo == "") {
      pseudo = prompt("Entrez un pseudo valide:");
    }
    return pseudo;
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
        } else if (VerifPerdu(nbEssai)) {
          alert("Vous avez perdu ! Le mot était " + mot);
		  document.removeEventListener("keydown", KeyPressed);
		  ClearPage() 
		  Perdu()
        }
      }
    }
  }
  

// Fonction qui initie le jeu avec un mot choisis (Hello World)
function Init(mot) {
    score = calculeScore(mot);
    console.log(`Le mot "${mot}" vaut ${score} points`);
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
    console.log("L'image {image.src} doit être affichée")
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
        afficherImage(nbEssai)
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
    p.innerHTML = "Gagné, vous avez trouvé " + mot
    + "\n Votre score est de " + score;
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche perdu html
function Perdu() {
    var div = document.createElement("div");
    div.id = "perdu"
    divmain.appendChild(div)
    var p = document.createElement("p");
    p.innerHTML = "Perdu, vous n'avez pas trouvé le mot " + mot
    + "\n Votre score est de " + score;
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
        Jeu(lettre)
    };
	table.addEventListener("click", onclick);
	if (VerifGagne(secret) || nbEssai >= 10) {
		table.removeEventListener("click", this.onclick);
	}
}

// Fonction principale

function main() {
    Init(mot)
    while (true) {
        Affiche(secret)
        console.log("mot a trouver : " + mot)
        console.log(tmp)
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
