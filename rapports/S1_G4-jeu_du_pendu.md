# Sujet : **Jeu du Pendu** 

# Semaine 1 (23/03 - 29/03) : 
## Rôles : 
- Responsable : HOUNGUEVOU THOMAS
- Chercheur : DOCHERTY RONAN
- Codeur 1 : JERRAR HASSAN 
- Codeur 2 : BOUALI ABDELHADI <br>

Pendant cette semaine nous nous sommes organisés de la manière suivante: Thomas et moi (Ronan) avons fait une description du produit final que nous souhaitons avoir et nous avons aussi fixé des objectifs pour cette semaine avec des idées pour comment les implémenter afin que les deux codeurs sachent quoi faire. Puis nous avons écrit la base HTML pour notre site, Thomas s'est principalement occupé des pages du choix de difficulté, du jeu et des règles, il a aussi ajouté les boutons permettant de naviguer entre les pages, de mon côté je me suis occupé de la page d'accueil et du leaderboard.<br>
Etant le chercheur, j'ai aussi effectué quelques recherches pour voir comment implémenter certaines de ces idées.<br>
Hassan quant à lui a commencé la partie JavaScript de notre projet et a créé les fonctionalités permettant de jouer au jeu du pendu (avec un seul mot pour le moment).<br>
Enfin, Abdlhadi a entamé la partie CSS de notre code afin d'avoir un site un peu plus présentable avec une meilleur police d'écriture et à ajouté un gif à la page d'accueil pour la rendre plus présentable.

## Descriptif du projet :
Nous souhaitons réaliser une page web permettant de jouer au jeu du pendu, notre version de ce jeu disposera d'un choix de difficulté, d'un classement et d'une possibilité pour l'utilisateur de rajouter des mots.<br> 
L'utilisateur pourra jouer contre un autre utilisateur après lui avoir partagé un code ou un lien unique, les utilisateurs devront ensuite choisir de jouer avec des mots de notre liste (puis choisir la difficulté de ce mot) ou d'en créer un pour cette partie, suite à quoi après avoir decidé des rôles (celui qui choisit le mot et celui qui le devine), la partie commence enfin et on garde en compte celui qui l'a remportée pour la prochaine manche.<br>
L'utilisateur aura aussi l'option de jouer contre un ordinateur qui choissira un mot correspondant à la difficulté choisie préalablement.


## Objectifs de la semaine :
- Faire une page d'accueil, une page avec les règles et une page du choix de difficulté (et peut-être de langue)
- Chercher des bibliothèques pour l'IHM
- Faire une représentation du site final
- Faire une liste de mots (une seule langue ?) à faire deviner au joueur (voire ajouter une possibilité à l'utilisateur de proposer d'autres mots à cette liste)
- Associer un score de difficulté à chaque mots et ajouter un calcul suite à une partie qui mettra son score à jour (+ si l'utilisateurs à fait pleins d'erreurs, et - sinon)
- Penser à limiter les possibilités de l'utilisateur pour trouver le mot (que des chars de a-z) et réfléchir à si on utilise des mots composés, avec des apostrophes/accents ou des espaces (exemple "corde à sauter")
- Essayer d'ajouter une page avec le classement des joueurs
 
## Recherches :
### Liste de mots :
Pour ce projet nous aurons besoin d'une liste de mots possible à deviner, nous avons plusieurs options dont deux principales pour stocker ces mots et les utiliser.
- 1ère possibilité Utiliser une base de donnée de mots déjà existante : Bien que dur à prendre en main, une base de données déjà existante présente de nombreux avantages, par exemple la base de donnée Open Lexicon (http://www.lexique.org/?page_id=91) permet de classer les mots par différentes catégories tel que le genre, la catégorie grammaticale du mot ou encore son nombre de voyelle, un autre avantage évident est le fait que cela nous donnerait un jeu de mots conséquent(140 000 mots!). <br>
Mais pour notre projet il y'a des inconvénients comme nous allons héberger ce site sur un hébergeur gratuit une telle base de donnée pourrait prendre trop d'espace pour notre hébergeur il faudrait donc accèder à cette base en ligne et ne pas la stocker, de plus nous voulons associer un score de difficulté à chaque mot cela serait impossible à faire manuellement, pour remédier à cela il faudrait créer une formule calculant le nombre de lettres du mots ainsi que son nombres de lettre rares (w,x,y etc) et rendre un score depuis cette formule.
- 2ème possibilité Créer notre base de données et la rendre modulable: Nous pourrions aussi créer notre propre base de données avec une centaine de mots et ajouter nous-même notre score de difficulté, pour agrandir cette base nous compterons sur les utilisateurs qui pourront nous envoyer des demandes d'ajouts pour des mots. <br>
Cette solution plus "manuelle" nous donnerait ainsi une base de données moins quantitative, mais correspondant plus à nos attentes nous pourrions au choix la mettre dans un simple fichier où comme mentionner plus haut créer notre base de donnée en SQL par exemple.

### L'hébergement :
Il existe plusieurs site d'hébergement gratuit que nous pourrions utiliser mais nous n'avons pour le moment pas assez avancé sur notre projet pour faire un choix (on ne sait pas combien d'espace disque on va devoir utiliser par exemple)
- AWS https://aws.amazon.com/fr/?nc2=h_lg
- Firebase https://firebase.google.com/
- Google Cloud https://cloud.google.com/?hl=fr

### Le framework :
Il faudrait approfondir les recherches mais ReactJs semble être un bon framework pour notre projet grace à sa façon de gérer les ensembles de données.

## Bibliographie :
- https://medium.com/@ismail.chahrazed/creer-site-web-partie1-84ce9ddf26bb (Base pour la création de la page d'accueil)
- https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/button (Boutons en HTML)
- https://developer.mozilla.org/fr/docs/Web/HTML/Element/a (Bouton avec redirection vers un autre site)
-
## Problèmes: 
Nous avons eu beaucoup de problèmes de communication car nous avons des disponibilités différentes (nous n'avons pas pu faire un seul appel à quatre).
Cela nous a retardé pour commencer ce projet et a causer quelques problèmes de compréhension. <br>
Au niveau du code en lui-même nous n'avons pas rencontré de problèmes pour l'instant.