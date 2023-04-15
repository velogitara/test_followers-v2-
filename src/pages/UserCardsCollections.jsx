import { useState } from 'react';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';
import { Ul } from './UserCardsCollections.styled';
import { BeatLoader } from 'react-spinners';

const UserCardsCollections = () => {
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
      <Ul>
        {newData.length &&
          newData.map(i => {
            return <UserCard key={i.id} {...i} />;
          })}
      </Ul>
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
