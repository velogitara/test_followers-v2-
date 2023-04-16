import { useState } from 'react';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';
import {
  Ul,
  BtnLink,
  Div,
  Loader,
  Button,
} from './UserCardsCollections.styled';

const UserCardsCollections = () => {
  const [limit, setLimit] = useState(5);
  const { data, isFetching } = useGetUsersQuery({ limit });
  let newData = [];
  if (data) {
    newData = data;
  }
  let a = limit > newData.length;
  const loadMoreHandler = async () => {
    await setLimit(limit + 5);
  };

  return (
    <Div>
      <h2 style={{ visibility: 'hidden', display: 'none' }}>Users List</h2>
      <BtnLink to="/">Back home</BtnLink>
      <Ul>
        {newData.length &&
          newData.map(i => {
            return <UserCard key={i.id} {...i} />;
          })}
      </Ul>
      {!a && (
        <Button className="loadMoreButton" onClick={loadMoreHandler}>
          Load more
        </Button>
      )}
      {/* <Loader color="#04003d" size={100} speedMultiplier={1} /> */}
      {isFetching && <Loader color="#10ff08" size={100} speedMultiplier={1} />}
    </Div>
  );
};
export default UserCardsCollections;
