import React from 'react';
import './regle.css';
import { Link } from 'react-router-dom';

const Regles = () => {
  return (
    <div className="regle_container">
      <div className="card">
        <div>
          <h2>Règles du jeu</h2>
          <p>
            Le but du jeu est simple: il faut trouver le mot caché en devinant les lettres le
            composant, vous disposez de 10 erreurs possible et de 5 minutes pour gagner la partie,
            suite à la partie vous obtiendrez un score dépendant de votre nombre d'erreurs, de la
            difficulté du mot, ainsi que le temps mis à trouver le mot. Si vous avez compris les
            règles, cliquez sur le bouton "J'ai compris" ci-dessous pour jouer:
          </p>
          <button>
            <Link to="/jeu">J'ai Compris</Link>
          </button>
        </div>

        <div>
          <h2>Entrez le mot que vous souhaiteriez ajouter</h2>
          <input type="text" />
          <button>Confirmer</button>
        </div>
      </div>
    </div>
  );
};

export default Regles;
