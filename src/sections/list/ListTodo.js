import React, {useContext } from 'react';

import { ListItem } from '../../components/list-item';

import { ListTodoStyled } from './styled';
import { ListTodoContext } from './../../context';

export const ListTodo = ({ children }) => {
  const listTodo = useContext(ListTodoContext);
  const todoList = listTodo.listTodo

  // const handleOnDelete = async (_id, key) => {
  //   let tempTodoList = [...todoList];
  //   tempTodoList.splice(key, 1);
  //   const { data } = await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/delete-todo`, { _id });
  //   setTodoList(tempTodoList);
  // }

  // const handleOnAddTodo = async (description) => {
  //   const newTodoList = [...todoList, { description: description, active: false, complited: false }];
  //   await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/create`, { description: description, active: false, completed: false, email: email });
  //   setTodoList(newTodoList);
  // }

  return (
    <ListTodoStyled>
      {
        todoList?.map((todo, key) => {
          return (
            <ListItem
              _id={todo._id}
              key={key}
              title={todo.title}
              description={todo.description}
              category={todo.category}
              status={todo.status}
            />
          )
        })
      }
    </ListTodoStyled>
  )
}