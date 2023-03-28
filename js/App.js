var mot = "Hello World"
var secret = []
var tmp =""  
var nbEssai = 0
var lettreUtilise = []
var lettre = ""
var Present = false

function Init (mot) {
    for (let i = 0; i < mot.length; i++) {
        if (mot[i] == " ") {
            secret[i] = " "
        } 
        else if (mot[i] == "-") {
            secret[i] = "-"
        }
        else{
            secret[i] = "_"
        }
    }
}

function check(mot, lettre) {
    Present = false
    for (let i = 0; i < mot.length; i++) {
        if (mot[i] == lettre) {
            secret[i] = lettre
            Present = true
        }
    }

}

function Affiche(secret) {
    tmp = ""
    for (let i = 0; i < secret.length; i++) {
        tmp = tmp + secret[i] 
    }
}

function VerifLettre(lettre) {
    if (lettreUtilise.includes(lettre)) {
        return false
    }
    else {
        lettreUtilise.push(lettre)
        return true
    }
}

function VerifGagne(secret) {
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] == "_") {
            return false
        }
    }
    return true
}

function VerifPerdu(nbEssai) {
    if (nbEssai == 10) {
        return true
    }
    else {
        return false
    }
}

function AfficheLettreUtilise(lettreUtilise) {
    tmp = ""
    for (let i = 0; i < lettreUtilise.length; i++) {
        tmp = tmp + lettreUtilise[i] + " "
    }
}

function AfficheEssai(nbEssai) {
    tmp = ""
    for (let i = 0; i < nbEssai; i++) {
        tmp = tmp + "X"
    }
}

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
        AfficheLettreUtilise( lettreUtilise)
        console.log("Lettre utilisé : " + tmp)
        AfficheEssai(nbEssai)
        console.log("nombre d'essai : " +tmp)
    }
}


main()





