import React, { useState, useEffect } from 'react';

import axios from 'axios';
import anime from 'animejs';

import { ListItem } from '../../components/list-item';
import { ListForm } from '../../components/list-form';

import { ListTodoStyled, TodoCard } from './styled';

export const ListTodo = ({children}) => {
  const [ todoList, setTodoList ] = useState([]);
  const email = localStorage.getItem('email');

  useEffect(() => {
    axios.post('http://localhost:3000/api/todo/todo-list', { email }).then((response) => {
      setTodoList(response.data.todoList);
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  const handleOnDelete = async ( _id, key ) => {
    let tempTodoList = [...todoList];
    tempTodoList.splice(key, 1);
    console.log(_id, key);
    try {
      const { data } = await axios.post('http://localhost:3000/api/todo/delete-todo',  { _id } );
      console.log(data)
    } catch (error) {
      console.log(error);
    }
    setTodoList(tempTodoList);
  }

  const handleOnAddTodo = async (description) => {
    const newTodoList = [ ...todoList, { description: description, active: false, complited: false } ];
    await axios.post('http://localhost:3000/api/todo/create', {description: description, active: false, completed: false, email: email});
    setTodoList(newTodoList);
  }

  const handleOnActiveTodo = async (_id) => {
    try {
      const { data } = await axios.put('http://localhost:3000/api/todo/active-todo', { _id });
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <ListTodoStyled>
      <ListForm addTodo={handleOnAddTodo}/>
      <TodoCard >
          {
            todoList.map((item, key) => {
              return (
                <ListItem onClick={() => handleOnActiveTodo(item._id)} active={item.active} key={key} complited={item.complited} _id={item._id} index={key} deleteTodoItem={() => {handleOnDelete(item._id, key)}}>{item.description}</ListItem>
              )
            })
          }
      </TodoCard>
    </ListTodoStyled>
  )
}