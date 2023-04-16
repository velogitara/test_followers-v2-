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
import Navigation from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <Navigation
            LogoContainer={LogoContainer}
            Img={Img}
            A={A}
            Nav={Nav}
            StyledLink={StyledLink}
          />
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
