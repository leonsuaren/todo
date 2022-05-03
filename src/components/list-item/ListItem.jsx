import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { ListItemWrapper, DeleteTodoButton, AiOutlineDeleteStyled, DescriptionWrapper, Span } from './styled';

export const ListItem = ({ children, active, complited, ...props }) => {
  const [isActive, setIsActive] = useState(active);

  const handleIsActive = () => {
    setIsActive(s => !s);
  }

  return (
    <ListItemWrapper active={isActive}>
      <Checkbox/>
      <DescriptionWrapper onClick={handleIsActive}>
        <Span complited={complited}>
          <Typography variant="h5" color="text.secondary">
            {children}
          </Typography>
        </Span>
      </DescriptionWrapper>
      <DeleteTodoButton {...props}><AiOutlineDeleteStyled /></DeleteTodoButton>
    </ListItemWrapper>
  )
}