// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { follow, unfollow } from '../../redux/followSlice';

import goitLogo from '../../images/goitLogo.svg';
import boy from '../../images/Boy.svg';

export const UserCard = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue.value);

  // const [count, setCount] = useState(100500);
  // let number = Number(value.a).toLocaleString('en');
  return (
    <div className="card">
      <a
        href="https://goit.global/ua/"
        target="_blank"
        rel="noreferrer"
        className="logoLink"
      >
        <img src={goitLogo} className="logo" alt="GoIt logo" />
      </a>

      <div className="userImageBox">
        <div className="horizontalLine"></div>

        <img src={boy} className="userImage" alt="user img" />
      </div>
      <div className="cardInfo">
        <p className="cardInfoTweets">777 tweets</p>
        <div className="cardInfoTweets cardInfoFollowers">
          {value} followers
        </div>
        <button
          className="followBtn"
          alt="follow user button"
          onClick={() => dispatch(follow(1))}
          // onClick={() => setCount(count => count + 1)}
        >
          Follow
        </button>
        <button
          className="followBtn"
          alt="follow user button"
          onClick={() => dispatch(unfollow(1))}
        >
          Following
        </button>
      </div>
    </div>
  );
};
