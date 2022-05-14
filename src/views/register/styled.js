import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  width: 500px;
  height: 700px;
  box-shadow: 5px 5px 5px 5px #CCCCCC;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: 20% 60% 20%;
  align-items: center;
  justify-items: center;
  background-color: white;
  padding: 0%;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100%;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  font-size: 1.2rem;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom-color: #095fd6;
  color: #60605d;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.2rem;
  color: white;
  background-color: #095fd6;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 2px #CCCCCC;
  cursor: pointer;
`;

export const RegisterTitle = styled.h1`
  color: #60605d;
  font-size: 2.5rem;
`;