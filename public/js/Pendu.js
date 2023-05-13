// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Variables Globales ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var mot = "Hello World"
mot = mot.toUpperCase()
var secret = []
var tmp = ""
var nbEssai = 0
var lettreUtilise = []
var lettre = "o"
var Present = false
var divmain = document.querySelector("div")
divmain.id = "main"
var input
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alph = 0

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fonctions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Fonction qui initie le jeu avec un mot choisit (Hello World)
function Init(mot) {
    var div = document.createElement("div");
    div.id = "Zonejeu"
    divmain.appendChild(div)
    var table = document.createElement("table");
    var td = document.createElement("td");
    div.appendChild(table);
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

// mets a jours l'affichage nombre d'essai en html
function UpdateEssai() {
    var div = document.getElementById("Zonejeu")
    var p = document.getElementById("nberreur");
    p.innerHTML = "Nombre d'erreurs : " + nbEssai
    p.style.color = "red"; // set font color to red
    p.style.fontFamily = "Montserrat, sans-serif"; // set font family to Arial or sans-serif
    div.appendChild(p)
    document.body.appendChild(divmain);
}

// verifie si la lettre et present dans le mot 
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

//verification si la lettre na pas deja etait utilisee
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

// Fonction qui vérifie si le joueur a perdu. Nombre d'essaie > 9 
function VerifPerdu(nbEssai) {
    if (nbEssai == 10) {
        return true
    }
    else {
        return false
    }
}

//mets a jour l'affichage des lettre utilisee html 
function UpdateLettreUtilise(lettreUtilise) {
    var div = document.getElementById("Zonejeu")
    var p = document.getElementById("lettreutilise");
    p.style.color = "black"; // set font color to red
    p.style.fontFamily = "Montserrat, sans-serif"; // set font family to Arial or sans-serif
    p.innerHTML = "Lettre utilisé : " + lettreUtilise
    
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche les lettre utiliser html
function AfficheLettreUtilise(lettreUtilise) {
    var div = document.getElementById("Zonejeu")
    var p = document.createElement("p");
    p.id = "lettreutilise"
    p.innerHTML = "Lettre utilisé : " + lettreUtilise
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche le nombre d'essai html
function AfficheEssai(nbEssai) {
    var div = document.getElementById("Zonejeu")
    var p = document.createElement("p");
    p.id = "nberreur"
    p.innerHTML = "Nombre d'erreur : " + nbEssai
    div.appendChild(p)
    document.body.appendChild(divmain);
}

//affiche la zone d'entree html
function Input() {
    var div = document.createElement("div");
    div.id = "input"
    divmain.appendChild(div)
    input = document.createElement("input");
    input.type = "text"
    input.id = "lettre"
    input.maxLength = "1"
    div.appendChild(input)
    document.body.appendChild(divmain);
}

//recupere la valeur entree dans la zone de texte 
function getInputValue() {
    input.onchange = function () {
        Jeu(input.value.toUpperCase())
        clearInput()
    }
}

//efface la zone d'entree
function clearInput() {
    input.value = "";
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
    p.innerHTML = "Perdu"
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

//affiche le clavien en html
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
    table.onclick = function (event) {
        var target = event.target;
        var lettre = target.id
        Jeu(lettre)
    }
}

// Fonction principale

function main() {
    Init(mot)
    while (true) {
        Affiche(secret)
        console.log("mots a trouver : " + mot)
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


Init(mot)
Clavier()
SelectClavierWord()
Input()
getInputValue()




