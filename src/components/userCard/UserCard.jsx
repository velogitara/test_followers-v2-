import { useState } from 'react';
import { useUpdateFieldMutation } from 'redux/userCardsListAPI';
import {
  Item,
  LogoLink,
  Logo,
  UserImageBox,
  UserImage,
  HorizontalLine,
  CardInfo,
  CardInfoTweets,
  CardInfoFollowers,
  FollowBtn,
} from './UserCard.styled';
import goitLogoCard from '../../images/goitLogoCard.svg';

export const UserCard = item => {
  const [follow, setFollow] = useState(item?.follow);
  const [updateFollowers, setUpdateFollowers] = useState(item?.followers);
  const [updateField, { isLoading }] = useUpdateFieldMutation();

  const styleBlue = {
    background: '#ebd8ff',
  };
  const styleGreen = {
    background: '#5CD3A8',
  };

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
    <Item>
      <LogoLink href="https://goit.global/ua/" target="_blank" rel="noreferrer">
        <Logo src={goitLogoCard} alt="GoIt logo" />
      </LogoLink>

      <UserImageBox>
        <HorizontalLine />

        <UserImage src={item.avatar} alt="user img" />
      </UserImageBox>
      <CardInfo>
        <CardInfoTweets>{item.tweets} tweets</CardInfoTweets>
        <CardInfoFollowers>{number} followers</CardInfoFollowers>

        <FollowBtn
          alt="follow user button"
          onClick={handlerFollow}
          disabled={isLoading}
          style={follow ? styleGreen : styleBlue}
        >
          {!follow ? 'Follow' : 'Following'}
        </FollowBtn>
      </CardInfo>
    </Item>
  );
};
