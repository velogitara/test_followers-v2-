import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useGetUsersQuery } from 'redux/userCardsListAPI';
import { UserCard } from 'components/userCard/UserCard';

const UserCardsCollections = () => {
  useEffect(() => {}, []);
  const { data } = useGetUsersQuery();
  // const { data, isFetching } = useGetUsersQuery();

  // console.log(data);
  // console.log(isFetching);

  let newData = [];

  if (data) {
    newData = data;
  }
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {newData.length ? (
          newData.map(i => {
            return <UserCard key={i.id} {...i} />;
          })
        ) : (
          <div>some Error</div>
        )}
      </ul>
      {/* {['user-1', 'user-2', 'user-3', 'user-4', 'user-5', 'user-6'].map(user => {
        return (
          <Link key={user} to={`${user}`}>
            {user}
          </Link>
        );
      })} */}
    </div>
  );
};
export default UserCardsCollections;
