import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserCardsCollections = () => {
  useEffect(() => {}, []);
  return (
    <div>
      {['user-1', 'user-2', 'user-3', 'user-4', 'user-5', 'user-6'].map(user => {
        return (
          <Link key={user} to={`${user}`}>
            {user}
          </Link>
        );
      })}
    </div>
  );
};
export default UserCardsCollections;
