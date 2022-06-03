import React, { useState, useEffect } from 'react';

import axios from 'axios';
import anime from 'animejs';

import { ListItem } from '../../components/list-item';
import { ListForm } from '../../components/list-form';

import { ListTodoStyled } from './styled';

export const ListTodo = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const email = localStorage.getItem('email');

  useEffect(() => {
    axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/search-status`, { status: 'inProcess', email: email }).then((response) => {
      setTodoList(response.data.status);
    }).catch((error) => {
      console.log(error)
    })
  }, []);

  const handleOnDelete = async (_id, key) => {
    let tempTodoList = [...todoList];
    tempTodoList.splice(key, 1);
    const { data } = await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/delete-todo`, { _id });
    setTodoList(tempTodoList);
  }

  const handleOnAddTodo = async (description) => {
    const newTodoList = [...todoList, { description: description, active: false, complited: false }];
    await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/create`, { description: description, active: false, completed: false, email: email });
    setTodoList(newTodoList);
  }

  return (
    <ListTodoStyled>
      {
        todoList?.map((todo, key) => {
          return (
            <ListItem
              setTodoList={setTodoList}
              _id={todo._id}
              key={key}
              title={todo.title}
              description={todo.description}
              category={todo.category}
              status={todo.status}
              onClick={() => handleOnDelete(todo._id, key)}
            />
          )
        })
      }
    </ListTodoStyled>
  )
}