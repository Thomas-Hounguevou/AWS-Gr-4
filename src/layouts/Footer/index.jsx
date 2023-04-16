import React from 'react';
import './footer.css';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">
          <HomeIcon /> Accueil
        </Link>
        <Link to="/leaderboard">
          <LeaderboardIcon />
          Leaderboard
        </Link>
        <Link to="/regles">
          <LibraryBooksIcon />
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
