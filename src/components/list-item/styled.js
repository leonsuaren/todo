import styled, { css } from 'styled-components';
import { MdOutlineClose } from "react-icons/md";

export const ListItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 15% 60% 25%;
  border-radius: 15px;
  width: 200px;
  height: 250px;
  margin: 0;
  padding: 0;
  background-color: #f7e2a5;
  box-shadow: 5px 5px 5px #CCCCCC;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom: 1px solid black;

`;

export const OptionSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const MdOutlineCloseStyled = styled(MdOutlineClose)`
  align-self: center;
  color: #FFFFFF;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const DeleteTodoButton = styled.button`
  background-color: red;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  top: 20px;
  left: -10px;
  pad: 0;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 15px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ButtonStyle = () => {
  return css`
    width: 100%;
    border: none;
    margin: 5px;
    border-radius: 10px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
  `
}

const statusButton = ({status}) => {
  if (status === 'done') {
    return css`
      background-color: #07c45c;
    `
  }
  if (status === 'inProcess') {
    return css`
    background-color: #94c2f7;
    `
  }
  if (status === 'stuck') {
    return css`
    background-color: #e3435c;
    `
  }
  if (status === 'higth') {
    return css`
    background-color: #c8dd06;
    `
  }
  if (status === 'less') {
    return css`
    background-color: #4d5060;
    `
  }
}

const categoryButton = ({category}) => {
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

export const CategotyButton = styled.div`
  ${ButtonStyle}
  ${categoryButton}
`;

export const StatusButton = styled.div`
  ${ButtonStyle}
  ${statusButton}
`;