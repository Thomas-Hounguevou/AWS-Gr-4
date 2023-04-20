# Sujet : **Jeu du Pendu** 

# Semaine 1 (13/04 - 20/04) : 
## Rôles : 
- Responsable : BOUALI ABDELHADI
- Chercheur : JERRAR HASSAN
- Codeur 1 : HOUNGUEVOU THOMAS 
- Codeur 2 : DOCHERTY RONAN <br>

## Objectifs de la semaine :

- Migration vers React Js de tous les pages.
- Implémentation du UI/UX.
- Création de système de salle entre deux joueurs en ligne, un Timer, et un nombre de mots correctements saisies.
- Créer le profil du joueur, ainsi que l'historique de ce joueur, les parties gagnées, perdues, le score ainsi que le badge.
- Régler le problème du Signup et Signin avec Firebase
- Implémenter les erreurs de saisies, régler les bugs qui peuvent apparaître durant une partie (connexion perdu, mot incorrect..ect), et gérer l'animation durant le jeu
- Créer une section publique, pour afficher les scores des joueurs et faire un classement avec des badges (1-Diamond, 2-Gold, 3-Silver)
- Faire des recherches sur les méthodes qu'on peut utiliser pour sécuriser le site

## Organisation :

L'attribution des tâches a été faite avec un Sheet Excel, où chaque membre avait deux tâches à compléter.
La communcation entre les membres était sur Discord.

## Avancement :
### Jeu : 

Abdelhadi a fait la migration de tout le projet vers React avec la librairie Vite Js. Il a aussi régler quelque problème durant le jeu, comme l'affichage du mot quand le temps est écoulé. Il est entrain de travailler aussi sur les salles, tel que un joueur peut joueur en ligne ( on crée une queue ou ils y a les joueurs en attente, donc si un joueur clique sur 'jouer en ligne', on le mets sur la même salle avec un joueur de la queue). <br>

Ronan a travaillé sur le leader board, il a implémenté une fonction pour ajouter dans la BDD les données nécessaires et a écrit un script pour créer le leader board à partir de cette BDD, et de rajouter le score d'un joueur à chaque partie. Ce leaderboard affiche que les 10 premiers scores et il faut appuyer sur un bouton pour afficher les suivants.Il a aussi fait le css coresspondant au leaderboard et a améliorer le calcul de score après une partie. Il a aussi fait une base de donnée firestore à partir de la quelle on prends un mots aléatoire correspondant à de la difficulté choisie. <br>

Hassan a fait des recherches sur les pratiques à mettre en oeuvre pour avoir un site sécuriser afin de garantir un minimum de sécurité et éviter des leaks de données personnelles ainsi que de garder le mot à trouver non trouvable et non modifiable dans le code<br>

Thomas s'est ocupé de l'inscription et de la connexion d'utilisateurs pour pouvoir sauvegarder leurs scores: il s'incrémente à chaque partie du nombre de points qu'il gagne. Il a aussi créer la collection "Joueur", qui contient tous les élements nécessaires pour manipuler les données du joueur, tels que le nom, le scoretotal, l'historique des parties, ainsi que le badge. 

## Déploiement : 

- [Lien du jeu](https://react-hangman-id.web.app/)

## Bibliographie :

- [Documentation du ViteJS](https://vitejs.dev/guide/)

## Problèmes: 
- Structure de la base de données: <br>
La conception de la base de données n'était pas adéquate pour les objectifs de la semaine. Une nouvelle conception va être mise en place.
- Semaine Chargée de Controles Continues: <br>
Tous les membres du groupe passent des interrogations et ont plusieurs projets à rendre, ce qui fait que la communication n'était pas comme attendue.