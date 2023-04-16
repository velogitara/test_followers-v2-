import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

export const Div = styled.div`
  height: 100%;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-bottom: 50px;
`;

export const BtnLink = styled(Link)`
  display: inline-block;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;
  outline: none;
`;

export const Button = styled.button`
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  margin: 20px 0 50px 50%;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.25s;
  outline: none;
`;

export const Loader = styled(CircleLoader)`
  left: 50%;
  margin-bottom: 100px;

  color: #6f84e6;
  transform: translate(-50%, 0);
`;

/* <CircleLoader color="#36d7b7" size={100} speedMultiplier={1} />; */
