import styled from 'styled-components';

export const ListTodoStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);
  grid-area: listTodo;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

export const TodoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-shadow: 5px 5px 5px 5px #CCCCCC;
`;

export const EmptyTodoListItem = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 800px;
  height: 70px;
  margin: 0;
  padding: 0;
  background-color: 'white';
`;

export const WelcomeTitle = styled.h1`
  color: #87cda7;
`;