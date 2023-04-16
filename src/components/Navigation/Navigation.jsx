import goitLogo from '../../images/goitLogo.svg';

const Navigation = ({ Nav, StyledLink, LogoContainer, A, Img }) => {
  return (
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
  );
};

export default Navigation;
