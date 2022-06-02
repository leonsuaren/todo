import React, { useState } from 'react';

import axios from 'axios';

import { ListItemWrapper, DeleteTodoButton, DescriptionWrapper, Header, OptionSection, CategotyButton, StatusButton, MdOutlineCloseStyled } from './styled';

export const ListItem = ({ children, title, description, category, status, deleteTodoItem, onClick, ...props }) => {

  return (
    <div>
      {
       status === 'done' ? <DeleteTodoButton onClick={onClick} {...props}><MdOutlineCloseStyled/></DeleteTodoButton> : ''
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