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