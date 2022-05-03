import styled from 'styled-components';

export const TodoHeaderWrapper = styled.div`
  display: grid;
  margin: 0;
  overflow: hidden;
  grid-area: editTodo;
  width: 100%;
  height: 100%;
  display: block; 
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  zoom: 150%;
`;

export const BackGroundCover = styled.div`
  display: inline-block;
  position: relative;  
  &::after {
    content: '';
    position: absolute;
    top: 0; right: 0;
    bottom: 0; left: 0;
    background-color: blue;
  }
`;