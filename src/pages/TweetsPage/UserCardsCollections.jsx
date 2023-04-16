import { useState } from 'react';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';
import {
  Ul,
  BtnLink,
  Div,
  Loader,
  Button,
  NoMoreCards,
} from './UserCardsCollections.styled';

const UserCardsCollections = () => {
  const [limit, setLimit] = useState(8);
  const { data, isFetching } = useGetUsersQuery({ limit });
  let newData = [];
  if (data) {
    newData = data;
  }
  const totalPages = limit > newData.length;
  const loadMoreHandler = async () => {
    await setLimit(limit + 8);
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
      {!totalPages && <Button onClick={loadMoreHandler}>Load more</Button>}
      {isFetching && <Loader color="#10ff08" size={100} speedMultiplier={1} />}
    </Div>
  );
};
export default UserCardsCollections;
