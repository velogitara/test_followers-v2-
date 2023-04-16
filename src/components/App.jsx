import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import UserCardsCollections from '../pages/TweetsPage/UserCardsCollections';
import { UserCard } from './userCard/UserCard';
import './userCard/UserCard.css';
import { Layout } from './Layout/Layout';

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
