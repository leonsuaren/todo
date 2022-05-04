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

  const handleOnDelete = async ( _id, key ) => {
    let tempTodoList = [...todoList];
    tempTodoList.splice(key, 1);
    try {
      const { data } = await axios.post('http://localhost:3000/api/todo/delete-todo',  { _id } );
    } catch (error) {
      console.log(error);
    }
    setTodoList(tempTodoList);
  }

  const handleOnAddTodo = async (description) => {
    const newTodoList = [ ...todoList, { description: description, active: false, complited: false } ];
    await axios.post('http://localhost:3000/api/todo/create', {description: description, active: false, completed: false});
    setTodoList(newTodoList);
  }

  return(
    <ListTodoStyled>
      <ListForm addTodo={handleOnAddTodo}/>
      <TodoCard >
          {
            todoList.map((item, key) => {
              return (
                <ListItem key={key} active={item.active} complited={item.complited} _id={item._id} index={key} onClick={() => {handleOnDelete(item._id, key)}}>{item.description}</ListItem>
              )
            })
          }
      </TodoCard>
    </ListTodoStyled>
  )
}