import styled, { css } from 'styled-components';

export const TodoHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  justify-content: center;
  justify-items: center;
  margin: 0;
  grid-area: editTodo;
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 2px #CCCCCC;
`;

export const MyDayTitle = styled.h1`
  font-size: 2rem;
  color: #96c0f7;
`;

export const DateTitle = styled.h4`
  color: #87cda7;
  align-self: flex-end;
`;

export const CategoryLabelsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 100%;
`;

const LabelButton = ({category}) => {
  if (category === 'home' ) {
    return css`
      background-color: #cf6327;
    `
  }
  if (category === 'work') {
    return css`
      background-color: #59c49a;
    `
  }
  if (category === 'school') {
    return css`
      background-color: #2ca4da;
    `
  }
  if (category === 'shop') {
    return css`
      background-color: #6271e9;
    `
  }
  if (category === 'weekend') {
    return css`
      background-color: #ef938b;
    `
  }
  if (category === 'read') {
    return css`
      background-color: #bde1e5;
    `
  }
  if (category === 'followup') {
    return css`
      background-color: #246c9d;
    `
  }
}

export const CategoryLabelButton = styled.button`
  ${LabelButton}
  border: none;
  color: #FFFFFF;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100px;
  height: 30px;
  margin: 0 2px;
  font-weight: bold;
  box-shadow: 2px 2px 2px #CCCCCC;
`;
