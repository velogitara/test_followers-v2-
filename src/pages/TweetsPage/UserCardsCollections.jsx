import { useState } from 'react';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';
import {
  Ul,
  BtnLink,
  Div,
  Loader,
  Button,
  ButtonContainer,
  // NoMoreCards,
} from './UserCardsCollections.styled';
import BasicMenu from 'components/DropDownMenu/DropDownMenu';
import { useSelector } from 'react-redux';

const UserCardsCollections = () => {
  const filterState = useSelector(state => state.filterValue.follow);
  // const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const { data, isFetching } = useGetUsersQuery({ limit });
  // const [newData, setNewData] = useState([]);

  let newData = [];

  // useEffect(() => {
  //   if (!data?.length) {
  //     return;
  //   }

  //   setNewData([...newData, ...data]);

  //   // return () => {};
  // }, [data]);

  // console.log(newData);
  // newData = [...newData, ...data];

  // setNewData([...newData, ...data]);

  if (!data?.length) {
    return;
  }

  newData = data;

  const totalPages = limit > newData.length;

  const loadMoreHandler = async () => {
    await setLimit(limit + 8);
    // await setPage(page => page + 1);
  };

  const filteredData = newData.filter(({ follow }) => follow === filterState);

  console.log(filterState);

  // console.log(filteredData);

  return (
    <Div>
      <h2 style={{ visibility: 'hidden', display: 'none' }}>Users List</h2>
      <ButtonContainer>
        <BtnLink to="/">Back home</BtnLink>
        <BasicMenu />
      </ButtonContainer>

      {filteredData.length > 0 && (
        <Ul>
          {/* <NoMoreCards>Filter option: filterState</NoMoreCards> */}
          {filteredData.map(i => {
            return <UserCard key={i.id} {...i} />;
          })}
        </Ul>
      )}
      {filterState === 'show all' && (
        <Ul>
          {newData.map(i => {
            return <UserCard key={i.id} {...i} />;
          })}
        </Ul>
      )}
      {isFetching && <Loader color="#10ff08" size={100} speedMultiplier={1} />}

      {!totalPages && <Button onClick={loadMoreHandler}>Load more</Button>}
    </Div>
  );
};
export default UserCardsCollections;
