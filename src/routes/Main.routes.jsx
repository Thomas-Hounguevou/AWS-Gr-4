import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts';
import Accueil from '../pages/Accueil';
import Regles from '../pages/Regles';
import LeaderBoard from '../pages/LeaderBoard';
import { AuthLayout } from '../pages/auth/AuthLayout';
import SignIn from '../pages/auth/SignIn/SignIn';
import SignUp from '../pages/auth/SignUp/SignUp';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/regles" element={<Regles />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<Accueil />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
