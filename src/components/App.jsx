import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import UserCardsCollections from '../pages/UserCardsCollections';
import { UserCard } from './userCard/UserCard';
import './userCard/UserCard.css';
import { Layout } from './Layout/Layout';

import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<UserCardsCollections />} />
        <Route path="tweets/:userId" element={<UserCard />} />
      </Route>
    </Routes>
  );
};
