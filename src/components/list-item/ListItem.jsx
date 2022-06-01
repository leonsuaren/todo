import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { ListItemWrapper, DeleteTodoButton, DescriptionWrapper, Header, OptionSection, CategotyButton, StatusButton, MdOutlineCloseStyled } from './styled';

export const ListItem = ({ children, title, description, category, status, deleteTodoItem, ...props }) => {
  // const [isActive, setIsActive] = useState(active);

  // const handleIsActive = () => {
  //   setIsActive(s => !s);
  // }

  return (
    <div>
      {

       status === 'done' ? <DeleteTodoButton><MdOutlineCloseStyled/></DeleteTodoButton> : ''
      }
      <ListItemWrapper {...props}>
        <Header>
          <h6>{title}</h6>
        </Header>
        <DescriptionWrapper>{description}</DescriptionWrapper>
        <OptionSection>
          <CategotyButton category={category}>{category}</CategotyButton>
          <StatusButton status={status}>{status}</StatusButton>
        </OptionSection>
      </ListItemWrapper>
    </div>
  )
}