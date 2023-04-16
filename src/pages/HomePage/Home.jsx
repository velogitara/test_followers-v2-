import { Div, NavigateLink, Text, CvLink } from './Home.styled';

const Home = () => {
  return (
    <Div>
      <Text>
        Welcome to the "Tweets test" page! <br /> I would like to introduce
        myself{' '}
        <CvLink href="https://velogitara.github.io/my-CV/" target="_blank">
          here,
        </CvLink>{' '}
        or just check out new <NavigateLink to="/tweets">Tweets</NavigateLink>.
      </Text>
    </Div>
  );
};
export default Home;
