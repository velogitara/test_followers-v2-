import { useSelector, useDispatch } from 'react-redux';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';
import {
  Ul,
  BtnLink,
  Div,
  Loader,
  Button,
  ButtonContainer,
  NoMoreCards,
  // NoMoreCards,
} from './UserCardsCollections.styled';
import BasicMenu from 'components/DropDownMenu/DropDownMenu';
import { resetLimit, update /*addContent*/ } from 'redux/followSlice';

const UserCardsCollections = () => {
  const filterState = useSelector(state => state.filterValue.follow);
  const limit = useSelector(state => state.filterValue.limit);
  // const content = useSelector(state => state.content);
  // const [limit, setLimit] = useState(8);
  // const [page, setPage] = useState(1);

  const { data, isFetching, isLoading } = useGetUsersQuery({
    limit,
    follow: filterState,
  });
  const dispatch = useDispatch();

  let newData = [];

  if (isLoading) {
    return (
      <div style={{ height: '100vh' }}>
        <Div>
          <Loader color="#10ff08" size={100} speedMultiplier={1} />
        </Div>
      </div>
    );
  }

  if (!data?.length) {
    setTimeout(() => {
      dispatch(update('show all'));
    }, 4000);
    return (
      <div style={{ height: '100vh' }}>
        <Div>
          <h2 style={{ visibility: 'hidden', display: 'none' }}>Users List</h2>
          <ButtonContainer>
            <BtnLink to="/">Back home</BtnLink>
            <BasicMenu />
          </ButtonContainer>
          <NoMoreCards>
            <p>No cards here, your filter will be reset in 3 seconds...</p>
          </NoMoreCards>
        </Div>
      </div>
    );
  }
  // if (data?.length) {
  //   dispatch(addContent(data));
  //   console.log("did Dispatch")
  // }

  newData = [...newData, ...data];

  const totalPages = limit > newData.length;

  const loadMoreHandler = async () => {
    // setPage(page + 1);
    // await setLimit(limit + 8);

    await dispatch(resetLimit(limit + 8));
  };

  // const filteredData = newData.filter(({ follow }) => follow === filterState);

  return (
    <Div>
      <h2 style={{ visibility: 'hidden', display: 'none' }}>Users List</h2>
      <ButtonContainer>
        <BtnLink to="/">Back home</BtnLink>
        <BasicMenu />
      </ButtonContainer>

      {newData.length && (
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
