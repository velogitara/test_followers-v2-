import styled from 'styled-components';
import img from '../../images/picture2in1.svg';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-image: url(${img}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: center top 12%;
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoLink = styled.a`
  align-self: flex-start;
`;

export const Logo = styled.img`
  height: 22px;
  width: 76px;
  will-change: filter;
  transition: filter 300ms;
  :hover {
    filter: drop-shadow(0 0 2em #fdfdfdc5);
  }
`;

export const UserImageBox = styled.div`
  position: relative;
  top: 15%;

  width: 380px;
`;
export const UserImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 16px;
`;
export const HorizontalLine = styled.div`
  position: absolute;
  height: 10px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  top: 50%;
  transform: translate(0, -50%);

  z-index: 1;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CardInfoTweets = styled.p`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  text-align: center;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const CardInfoFollowers = styled(CardInfoTweets)`
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  text-align: center;

  width: 196px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
