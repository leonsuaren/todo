import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { ListItem } from '../../components/list-item';

import { ListTodoStyled } from './styled';

export const ListTodo = ({children}) => {
  return(
    <ListTodoStyled>
      <Card>
        <CardContent>
          <ListItem></ListItem>
        </CardContent>
        <CardActions>
          <Button>click</Button>
        </CardActions>
      </Card>
    </ListTodoStyled>
  )
}