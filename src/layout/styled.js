import styled from 'styled-components';

export const PageLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 30% 70%;
  grid-template-areas: 
    "menu editTodo"
    "menu listTodo"
  ;
  margin: 0;
`;