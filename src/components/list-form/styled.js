import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai'

export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-shadow: 5px 5px 5px 5px #CCCCCC;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  justify-items: center;
  width: 800px;
  height: 70px;
  margin: 0;
  padding: 1px;
`;

export const AddTodoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const AiOutlinePlusStyled = styled(AiOutlinePlus)`
  font-size: 1.4rem;
  &:hover {
    font-size: 2rem;
  }
  color: #2e80ea;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  margin: 1px;
  border: none;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 10px;
`;