import styled from 'styled-components';

export const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 80% 10%;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  grid-area: menu;
  width: 100%;
  height: 100vh;
  border-right: 1px solid #CCCCCC;
`;

export const MenuHeader = styled.div`
  text-align: center;
`;

export const Brand = styled.h3`
  font-size: 1rem;
  color: #464849;
  width: 100%;
  font-weight: bold;
`;

export const MenuItems = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%; 
  height: 100%;
  margin: 0;
`;

export const AddTodoPlus = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #464849;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 2px #CCCCCC;
  color: #FFFFFF;
  font-size: 3rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #242526;
  }
`;

export const LogOutButtonWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  border: 5px solid #464849;
  width: 100%;
  height: 60px;
  box-shadow: 2px 2px 2px #CCCCCC;
`;

export const LogOutButton = styled.button`
  border: none;
  background-color: #FF0100;
  border-radius: 5px;
  color: white;
  font-size: 1.3rem;
  width: 100%;
  height: 40px;
  box-shadow: 5px 5px 5px #CCCCCC;
  cursor: pointer;
  &:hover {
    background-color: #F46161;
  }
`;