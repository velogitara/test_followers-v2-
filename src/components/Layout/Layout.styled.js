import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

//=============== Header =================

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;

  background-color: #ffffff;
  background: hsla(217, 100%, 50%, 1);

  background: linear-gradient(
    90deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#0061FF", endColorstr="#60EFFF", GradientType=1 );
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

  color: #fff;

  :hover {
    color: rgba(255, 227, 44, 0.8);
  }
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
    filter: drop-shadow(0 0 5em #ffe32c);
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
  background-image: linear-gradient(
    to top,
    #fff1eb 0%,
    rgba(255, 227, 44, 0.2) 100%
  );
`;
