import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';
import './UserCardsCollections.css';
import { BeatLoader } from 'react-spinners';

const UserCardsCollections = () => {
  // const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const { data, isFetching } = useGetUsersQuery({ limit });
  let newData = [];
  if (data) {
    newData = data;
  }
  let a = limit > newData.length;
  const loadMoreHandler = async () => {
    await setLimit(limit + 8);
  };

  return (
    <div>
      <h2>Users List</h2>
      <ul className="list">
        {newData.length &&
          newData.map(i => {
            return <UserCard key={i.id} {...i} />;
          })}
      </ul>
      {!a && (
        <button className="loadMoreButton" onClick={loadMoreHandler}>
          Load more
        </button>
      )}
      {isFetching && <BeatLoader color="#36d7b7" />}
    </div>
  );
};
export default UserCardsCollections;
