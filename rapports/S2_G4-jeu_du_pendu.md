# Semaine 2 (30/03 - 05/04) :
## Rôles : 
- Responsable : DOCHERTY RONAN
- Chercheur : HOUNGUEVOU THOMAS
- Codeur 1 : JERRAR HASSAN 
- Codeur 2 : BOUALI ABDELHADI 

## Objectifs de la semaine :
- Définir le framework qu'on utilise.
- Permettre à un utilisateur de faire une requête dans la page des règles pour ajouter un mot à la base de donnée.
- Faire les règles pour clarifier le jeu.
- Créer ou emprunter une base de données de mots.
- Trouver un algorithme pour la difficulté des mots.
- Chercher à faire un système de connexion pour sauvegardie les parties précédentes.
- Calculer un score suite à une partie (et l'enregistrer quelque part).
- Chercher à implémenter un timer lorqu'une partie est lancée.
- Réfléchir à créer un système de "salle" pour pouvoir jouer en multijoueur

## Avancement :
### Jeu : 
- Base de données : <br>
Le framework back-end devra communiquer avec cette base de données pour pouvoir choisir au hasard un ou plusieurs mots pour jouer, et pour que le joueur puisse ajouter un mot dans la base de donnée s'il le souhaite.

- Système de score: (à revoir)<br>
Que le mot soit trouvé ou pas, on additionne le score de chaque lettre trouvée dans le mot. On utilise le système suivant: <br>
A,E,I,L,N,O,R,S,T,U : 1 point <br>
D,G,M               : 2 points <br>
B,C,P               : 3 points <br>
F,H,V               : 4 points <br>
J,Q                 : 8 points <br>
K,W,X,Y,Z           : 10 points <br>
On pourra donner un bonus de points si le mot est trouvé, selon sa rareté d'utilisation, le nombre d'essais restants et le temps que le joueur a mit pour le trouver.

### Framework :
- Choix du framework : <br>
  - Pour le front end: <br> 
J'ai cherché différents frameworks chez les plus utilisés tels que React, Angular, Svelte et Vue.js.

  - Pour le back end: <br>
Parmi les plus utilisés d'entre eux, il y a Node.js, Express.js

## Bibliographie :
- [Ajout d'un timer](https://www.commentcoder.com/timer-javascript/)
- [Différents frameworks front ent](https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)

- [Exemple d'utilisation de React](https://fr.reactjs.org/tutorial/tutorial.html)

- [Différents frameworks back end](https://developer.mozilla.org/fr/docs/Learn/Server-side/First_steps/Web_frameworks) 

- [Base de données Firebase](https://www.npmjs.com/package/firebase)

## Problèmes: 
- 