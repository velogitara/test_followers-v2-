import { Outlet } from 'react-router-dom';
import {
  Header,
  Container,
  LogoContainer,
  Img,
  A,
  Nav,
  StyledLink,
  Main,
  ContainerMain,
} from './Layout.styled';

import goitLogo from '../../images/goitLogo.svg';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <Nav>
            <StyledLink to={'/'}> Home</StyledLink>
            <StyledLink to={'/tweets'}>Tweets cards</StyledLink>
            <LogoContainer>
              <A
                href="https://goit.global/ua/"
                target="_blank"
                rel="noreferrer"
                className="logoLink"
              >
                <Img src={goitLogo} alt="GoIt logo" />
              </A>
            </LogoContainer>
          </Nav>
        </Container>
      </Header>
      <Main>
        <ContainerMain>
          <Outlet />
        </ContainerMain>
      </Main>
    </div>
  );
};
