import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuStyled, MenuHeader, MenuItems, AddTodoPlus, Brand, LogOutButton, LogOutButtonWrapper } from './styled';

export const Menu = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleOnLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    navigate('/login');
  }

  return (
    <MenuStyled>
      <MenuHeader>
        <Brand>ToDo App</Brand>
      </MenuHeader>
      <MenuItems>
        <AddTodoPlus>+</AddTodoPlus>
      </MenuItems>
      <LogOutButtonWrapper>
        <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      </LogOutButtonWrapper>
    </MenuStyled>
  )
};