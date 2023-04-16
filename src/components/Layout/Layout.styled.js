import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

//=============== Header =================

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;

  background-color: #52acff;
  background-image: linear-gradient(180deg, #52acff 25%, #ffe32c 100%);
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 34px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1280px;
    padding: 0 34px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3px;

  text-transform: uppercase;

  color: #373737;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 40px;
`;
export const A = styled.a`
  height: 100%;
`;

export const Img = styled.img`
  height: 100%;
  will-change: filter;
  transition: filter 300ms;

  :hover {
    filter: drop-shadow(0 0 4em #fdfdfdc5);
  }
`;
// =================== Main =================================================

export const Main = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ContainerMain = styled(Container)`
  margin-top: auto;
  /* background-image: linear-gradient(180deg, #52acff 25%, #ffe32c 100%); */
  background-image: linear-gradient(
    to top,
    #fff1eb 0%,
    rgba(255, 227, 44, 0.2) 100%
  );
`;
