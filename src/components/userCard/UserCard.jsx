import { useState } from 'react';
import { useUpdateFieldMutation } from 'redux/userCardsListAPI';

import goitLogo from '../../images/goitLogo.svg';

export const UserCard = item => {
  const [follow, setFollow] = useState(item?.follow);

  const [updateFollowers, setUpdateFollowers] = useState(item?.followers);

  const [updateField] = useUpdateFieldMutation();

  const handlerFollow = async () => {
    const somethingGood = !item.follow
      ? updateFollowers + 1
      : updateFollowers - 1;
    await setUpdateFollowers(somethingGood);
    await updateField({
      id: item.id,
      follow: !follow,
      followers: somethingGood,
    }).then(response => {
      if (response.data) {
        setFollow(response.data.follow);
      }
    });
  };

  let number = Number(updateFollowers).toLocaleString('en');

  return (
    <li className="card">
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

        <img src={item.avatar} className="userImage" alt="user img" />
      </div>
      <div className="cardInfo">
        <p className="cardInfoTweets">{item.tweets} tweets</p>
        <div className="cardInfoTweets cardInfoFollowers">
          {number} followers
        </div>

        <button
          className="followBtn"
          alt="follow user button"
          onClick={handlerFollow}
        >
          {!follow ? 'Follow' : 'Following'}
        </button>
      </div>
    </li>
  );
};
