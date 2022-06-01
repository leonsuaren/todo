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
    axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/todo-list`, { email }).then((response) => {
      setTodoList(response.data.todoList);
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

  const handleOnActiveTodo = async (_id) => {
    try {
      const { data } = await axios.put(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/active-todo`, { _id });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ListTodoStyled>
      {
        todoList.map((todo, key) => {
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
  // <ListForm addTodo={handleOnAddTodo}/>
  // {
  //   todoList.length <= 0 && <EmptyTodoListItem><WelcomeTitle>Welcome to Todo App, start adding todos!!</WelcomeTitle></EmptyTodoListItem>
  // }
  // <TodoCard >
  //     {
  //       todoList.map((item, key) => {
  //         return (
  //           <ListItem onClick={() => handleOnActiveTodo(item._id)} active={item.active} key={key} complited={item.complited} _id={item._id} index={key} deleteTodoItem={() => {handleOnDelete(item._id, key)}}>{item.description}</ListItem>
  //         )
  //       })
  //     }
  // </TodoCard>