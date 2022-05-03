import React, { useState } from 'react';

import { ListItem } from '../../components/list-item';
import { ListForm } from '../../components/list-form';

import { ListTodoStyled, TodoCard } from './styled';

export const ListTodo = ({children}) => {
  const [ todoList, setTodoList ] = useState([
    {
      description: 'Learn React',
      active: false,
      complited: false
    },
    {
      description: 'Learn Mongodb',
      active: false,
      complited: false
    },
    {
      description: 'Learn Express',
      active: false,
      complited: false
    },
    {
      description: 'Learn Node',
      active: false,
      complited: false
    },
  ]);

  const handleOnDelete = (index) => {
    console.log('hola', todoList);
    let tempTodoList = [...todoList];
    tempTodoList.splice(index, 1);
    setTodoList(tempTodoList);
  }

  const handleOnAddTodo = (description) => {
    const newTodoList = [ ...todoList, { description: description, active: false, complited: false } ];
    setTodoList(newTodoList);
  }

  return(
    <ListTodoStyled>
      <ListForm addTodo={handleOnAddTodo}/>
      <TodoCard >
          {
            todoList.map((item, key) => {
              return (
                <ListItem key={key} active={item.active} complited={item.complited} index={key} onClick={handleOnDelete}>{item.description}</ListItem>
              )
            })
          }
      </TodoCard>
    </ListTodoStyled>
  )
}