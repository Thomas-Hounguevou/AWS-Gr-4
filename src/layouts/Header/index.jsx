import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <header>
      <h1>Jeu du Pendu</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/regles">Règles et ajout de mots</Link>
      </nav>
      <button type="button">
        <Link to="/signin">Login</Link>
      </button>
    </header>
  );
};

export default Header;
