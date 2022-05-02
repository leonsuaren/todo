import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai'

export const ListItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  align-items: center;
  justify-items: center;
  width: 600px;
  height: 70px;
  margin: 0;
  padding: 0;
  background-color: ${p => p.active ? '#87cda7' : '#FFFFFF'};
  &:hover {
    background: #c8dcf7;
  }
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
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;