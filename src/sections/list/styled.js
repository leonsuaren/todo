import styled from 'styled-components';

export const ListTodoStyled = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  margin: 0;
  justify-content: center;
  align-items: start;
  grid-area: listTodo;
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