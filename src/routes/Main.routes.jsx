import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts';
import Accueil from '../pages/Accueil';
import Regles from '../pages/Regles';
import LeaderBoard from '../pages/LeaderBoard';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil />} />
        <Route path="/regles" element={<Regles />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<Accueil />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
