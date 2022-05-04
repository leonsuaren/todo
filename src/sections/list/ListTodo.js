import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { ListItem } from '../../components/list-item';
import { ListForm } from '../../components/list-form';

import { ListTodoStyled, TodoCard } from './styled';

export const ListTodo = ({children}) => {
  const [ todoList, setTodoList ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/todo/todo-list').then((response) => {
      setTodoList(response.data.todoList)
    }).catch((error) => {
      console.log(error)
    })
  }, []);

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