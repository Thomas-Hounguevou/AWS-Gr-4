import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, LeaderboardOutlined, LibraryBooksOutlined } from '@mui/icons-material';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">
          <HomeOutlined /> Accueil
        </Link>
        <Link to="/leaderboard">
          <LeaderboardOutlined />
          Leaderboard
        </Link>
        <Link to="/regles">
          <LibraryBooksOutlined />
          Règles et ajout de mots
        </Link>
      </nav>
      <div>
        <h3>Créé par</h3>
        <ul>
          <li>BOUALI ABDELHADI</li>
          <li>DOCHERTY RONAN</li>
          <li>HOUNGUEVOU THOMAS</li>
          <li>JERRAR HASSAN</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
