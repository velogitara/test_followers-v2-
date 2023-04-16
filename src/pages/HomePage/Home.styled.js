import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 30px;
  height: 100vh;

  font-weight: 500;
  font-size: 23px;
  line-height: 1.4;
`;

export const CvLink = styled.a``;

export const NavigateLink = styled(Link)``;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 1px 5px 8px rgba(22, 48, 210, 0.6);
`;
