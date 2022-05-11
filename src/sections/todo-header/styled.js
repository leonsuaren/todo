import styled from 'styled-components';

export const TodoHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  margin: 0;
  grid-area: editTodo;
  width: 100%;
  height: 100%;
`;

export const MyDayTitle = styled.h1`
  font-size: 4rem;
  color: #96c0f7;
`;

export const DateTitle = styled.h1`
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