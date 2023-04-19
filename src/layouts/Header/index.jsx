import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './header.css';
import userAtom from '../../recoil';
import { useRecoilState } from 'recoil';
import app, { auth } from '../../config/firebase';

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);
  const logout = () => {
    auth.signOut().then(() => {
      navigate('/signin');
      setUser({ ...user, user: {}, auth: false });
    });
  };
  return (
    <header>
      <h1>Jeu du Pendu</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/regles">Règles et ajout de mots</Link>
      </nav>
      {user.auth ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button type="button">
          <Link to="/signin">Login</Link>
        </button>
      )}
    </header>
  );
};

export default Header;
