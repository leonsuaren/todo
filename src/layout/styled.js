import styled from 'styled-components';

export const PageLayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 40% 60%;
  grid-template-areas: 
    "menu editTodo"
    "menu viewTodo"
  ;
`;