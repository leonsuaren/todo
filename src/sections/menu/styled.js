import styled, { css } from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


export const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 10% 40% 40% 10%;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  grid-area: menu;
  width: 100%;
  height: 100vh;
  box-shadow: 2px 2px 2px #CCCCCC;
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
  grid-template-rows: 10% 80% 10%;
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

export const AddTodoMinus = styled.button`
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
  opacity: 0;
  &:hover {
    background-color: #242526;
  }
`;

export const AiOutlinePlusStyled = styled(AiOutlinePlus)`
  font-size: ${p => p.mouseenter ? '2.5rem' : '2rem'};
  color: #FFFFFF;
`;

export const AiOutlineMinusStyled = styled(AiOutlineMinus)`
  font-size: ${p => p.mouseenter ? '2.5rem' : '2rem'};
  color: #FFFFFF;
`;

export const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(7, 13%);
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const category = ({ category }) => {
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

export const TodoCategory = styled.button`
  ${category}
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.showCategory ? 80 : 30}px;
  height: 30px;
  border-radius: ${p => p.showCategory ? '5px' : '50%'};
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: 500ms;
`;

export const LogOutButtonWrapper = styled.div`
  padding: 5px;
  border-radius: 5px;
  border: 5px solid #464849;
  width: 100%;
  height: 60px;
  box-shadow: 5px 5px 5px #CCCCCC;
  border-inline: 15px;
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

export const SearchTodos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SerarchTodoButtons = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 100%;
  height: 80%;
  width: 100%;
`;

const SortButton = ({category}) => {
  if (category === 'done') {
    return css`
      background-color: #07c45c;
    `
  }
  if (category === 'inProccess') {
    return css`
    background-color: #4493e2;
    `
  }
  if (category === 'stuck') {
    return css`
    background-color: #e3435c;
    `
  }
  if (category === 'higth') {
    return css`
    background-color: #c8dd06;
    `
  }
  if (category === 'less') {
    return css`
    background-color: #6271e9;
    `
  }
}

export const SortButtonComponent = styled.button`
  ${SortButton}
  width: 100%;
  height: 50px;
  margin: 2px;
  border: none;
  color: #FFFFFF;
  font-weight: bold;
`;