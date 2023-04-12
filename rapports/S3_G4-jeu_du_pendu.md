# Sujet : **Jeu du Pendu** 

# Semaine 1 (06/04 - 13/04) : 
## Rôles : 
- Responsable : JERRAR HASSAN 
- Chercheur : BOUALI ABDELHADI
- Codeur 1 : HOUNGUEVOU THOMAS 
- Codeur 2 : DOCHERTY RONAN <br>

## Objectifs de la semaine :
- Élaborer des règles pour éclaircir les conditions de jeu.
- Développer un algorithme pour évaluer la complexité des mots.
- Envisager l'ajout d'une fonction de chronomètre lors du lancement d'une partie.
- Étudier les Web Sockets pour des parties en temps réel.
- Régler le problème du Signup et Signin avec Firebase
- Ajouter des mots par l'utilisateur


## Avancement :
### Jeu : 
Hassan a implémenté une fonction afin de gérer les caractères spéciaux, notamment les caractères : "é", "è" et "à". Il a effectué un changement de style sur la page du jeu et a créé une base de données sur Firebase avec diffèrent thème (couleurs, vêtements ...), et l'a lié avec l'application, dorénavant les mots son générer aléatoirement dans la base de données couleurs, et les autres thèmes seront ajouter par la suite. <br>

Ronan a implémenté la méthode qui permet à un joueur d'ajouter un mot à notre base de données. Il a fait des recherches pour gérer la partie en multijoueur avec socket io et a créé le squelette permettant de faire des salles et de les rejoindres avec un id unique, mais il a eu des problèmes avec le module socket.io.<br>

Thomas a implémenté un listener qui permet de taper les lettres depuis le clavier, et il a retiré la barre d'input. Il a ajouté une fonction qui affiche une image correspondant au nombre d'erreurs pendant le jeu.
Il a également corrigé le CSS qui ne s'activait pas sur certaines pages.<br>

Thomas et Ronan ont aussi essayé de séléctionner des mots pour le jeu en fonction de la difficulté choisie par l'utilisateur.

## Bibliographie :

- [Documentation du Socket.io](https://socket.io/docs/v4/)

- [Authentification avec Firebase](https://firebase.google.com/docs/auth)

- [Règles du pendu](https://www.regles-jeux-plein-air.com/regle-du-pendu/)

- [Documentation sur Firestore](https://firebase.google.com/docs/firestore)

## Problèmes: 
- Disponibilité des membres: <br>
Tous les membres du groupe passent des interrogations et on plusieurs projets à rendre, ce qui fait que la communication n'était pas comme attendu.