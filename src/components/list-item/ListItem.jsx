import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { ListItemWrapper, DeleteTodoButton, AiOutlineDeleteStyled, DescriptionWrapper } from './styled';

export const ListItem = ({ children, active, complited, ...props }) => {
  const [isActive, setIsActive] = useState(active);

  const handleIsActive = () => {
    setIsActive(s => !s);
  }

  return (
    <ListItemWrapper active={isActive}>
      <Checkbox />
      <DescriptionWrapper onClick={handleIsActive}>
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </DescriptionWrapper>
      <DeleteTodoButton {...props}><AiOutlineDeleteStyled /></DeleteTodoButton>
    </ListItemWrapper>
  )
}