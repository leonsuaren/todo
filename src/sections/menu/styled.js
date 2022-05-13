import styled from 'styled-components';

export const MenuStyled = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
  margin: 0;
  justify-content: center;
  align-items: flex-start;
  grid-area: menu;
  width: 100%;
  height: 100vh;
`;

export const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  width: 100%; 
  margin: 0;
`;

export const User = styled.h1`
  font-size: 3rem;
  color: #87cda7;
`;

export const LogOutButton = styled.button`
  border: none;
  background-color: #FF0100;
  border-radius: 5px;
  color: white;
  font-size: 1.3rem;
  width: 200px;
  height: 50px;
  box-shadow: 2px 2px 2px #CCCCCC;
  cursor: pointer;
  &:hover {
    background-color: #F46161;
  }
`;