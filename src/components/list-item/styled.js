import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai'

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

export const DeleteTodoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const AiOutlineDeleteStyled = styled(AiOutlineDelete)`
  font-size: 1.4rem;
  &:hover {
    font-size: 2rem;
  }
  color: #ff0100;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
`;

export const Span = styled.span`
  text-decoration: ${p => p.complited ? 'line-through' : ''};
`;