import React from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuStyled, MenuItems, User, LogOutButton } from './styled';

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
      <User>{username}</User>
      <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      <MenuItems>
      </MenuItems>
    </MenuStyled>
  )
};