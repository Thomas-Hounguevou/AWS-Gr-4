import React from 'react';
import { Outlet } from 'react-router-dom';
import './auth.css';
import Gif from '../../assets/gif/pendu.gif';

export const AuthLayout = () => {
  return (
    <div className="auth_container">
      <div className="auth_left">
        <img src={Gif} alt="loading" />
      </div>
      <div className="auth_right">
        <Outlet />
      </div>
    </div>
  );
};
