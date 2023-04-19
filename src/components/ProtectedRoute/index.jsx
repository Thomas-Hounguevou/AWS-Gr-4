import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userAtom from '../../recoil';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useRecoilState(userAtom);
  let location = useLocation();

  if (!user.auth) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
