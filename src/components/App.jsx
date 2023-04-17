import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import UserCardsCollections from '../pages/TweetsPage/UserCardsCollections';
import { Layout } from './Layout/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<UserCardsCollections />} />
      </Route>
    </Routes>
  );
};
