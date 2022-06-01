import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { ListItemWrapper, DeleteTodoButton, AiOutlineDeleteStyled, DescriptionWrapper, Span, Header, OptionSection, CategotyButton, StatusButton } from './styled';

export const ListItem = ({ children, title, description, category, status, deleteTodoItem, ...props }) => {
  // const [isActive, setIsActive] = useState(active);

  // const handleIsActive = () => {
  //   setIsActive(s => !s);
  // }

  return (
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
  )
}

// <Checkbox/>
// <DescriptionWrapper onClick={handleIsActive}>
//   <Span complited={complited}>
//     <Typography variant="h5" color="text.secondary">
//       {children}
//     </Typography>
//   </Span>
// </DescriptionWrapper>
// <DeleteTodoButton onClick={deleteTodoItem}><AiOutlineDeleteStyled /></DeleteTodoButton>