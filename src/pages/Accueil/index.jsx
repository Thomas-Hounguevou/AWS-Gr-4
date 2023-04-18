import React from 'react';

import Pendu from '../../assets/gif/pendu.gif';
import './acceuil.css';
import { Link } from 'react-router-dom';
function Accueil() {
  const [option, setOption] = React.useState('Facile');
  return (
    <div className="acceuil">
      <img src={Pendu} alt="pendu" />
      <div className="card">
        <h1>Le Pendu</h1>
        <div>
          <h2>Jouer</h2>
          <label className="label">Choix de difficulté</label>
          <select
            value={option}
            className="select"
            onChange={e => {
              setOption(e.target.value);
            }}
          >
            <option value="Facile">Facile</option>
            <option value="Normal">Normal</option>
            <option value="Difficile">Difficile</option>
          </select>
          <button>
            <Link to="jeu">Jouer</Link>
          </button>
        </div>
        <p>Ou</p>
        <div>
          <h2>Connecter pour Jouer enligne</h2>
          <button>
            <Link to="signin">Se Connecter</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
