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
- Connexion/Inscription : <br>
Hassan a créé les pages de connexion et d'inscription. Les données sont reliés à une base de données Firebase.
- Base de données : <br>
Nous avons décidé de créer une base de données de mots et de l'enregistrer dans Firebase, il nous faut un compte Google pour pouvoir utiliser Firebase donc j'ai créé un compte qu'on utilisera pour le reste du projet.

- Système de score: <br>
Que le mot soit trouvé ou pas, on additionne le score de chaque lettre trouvée dans le mot. On utilisera le système suivant (le même que celui du Scrabble): <br>
A, E, I, L, N, O, R, S, T, U : 1 point <br>
D, G, M                      : 2 points <br>
B, C, P                      : 3 points <br>
F, H, V                      : 4 points <br>
J, Q                         : 8 points <br>
K, W, X, Y, Z               : 10 points <br>
On pourra donner un bonus de points si le mot est trouvé, selon sa rareté d'utilisation, le nombre d'essais restants et le temps que le joueur a mit pour le trouver.

### Framework :
- Choix des frameworks : <br>
  - Pour le front end: <br> 
J'ai cherché différents frameworks chez les plus utilisés tels que React, Angular, Svelte et Vue.js. Et on a décidé de prendre React pour sa facilité d'utilisation et de gestion.

  - Pour le back end: <br>
On utilise Node.js, car on utilise Firebase qui est relié à ce framework via npm.

## Bibliographie :

- [Différents frameworks front ent](https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)

- [Exemple d'utilisation de React](https://fr.reactjs.org/tutorial/tutorial.html)

- [Base de données Firebase](https://firebase.google.com/docs/web/setup?hl=fr)

## Problèmes: 
- Le manque de temps: <br>
on a eu que 5 jours au lieu de 7 pour avancer, et on avait plusieurs autres rendus de projets.
- Firebase: <br>
on a eu beaucoup de mal à utiliser Firebase, ce qui fait qu'on n'a pas encore notre base de données pour les mots, et notre système pour ajouter un mot, l'inscription et la connexion ne sont pas effectifs.