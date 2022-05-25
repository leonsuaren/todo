import styled from 'styled-components';

export const PageLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 10% 90%;
  grid-template-areas: 
    "menu editTodo"
    "menu listTodo"
  ;
  margin: 0;
`;