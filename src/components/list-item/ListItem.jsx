import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { ListItemWrapper, DeleteTodoButton, AiOutlineDeleteStyled, DescriptionWrapper, Span } from './styled';

export const ListItem = ({ children, active, complited, deleteTodoItem, ...props }) => {
  const [isActive, setIsActive] = useState(active);

  const handleIsActive = () => {
    setIsActive(s => !s);
  }

  return (
    <ListItemWrapper active={isActive} {...props}>
      <Checkbox/>
      <DescriptionWrapper onClick={handleIsActive}>
        <Span complited={complited}>
          <Typography variant="h5" color="text.secondary">
            {children}
          </Typography>
        </Span>
      </DescriptionWrapper>
      <DeleteTodoButton onClick={deleteTodoItem} {...props}><AiOutlineDeleteStyled /></DeleteTodoButton>
    </ListItemWrapper>
  )
}