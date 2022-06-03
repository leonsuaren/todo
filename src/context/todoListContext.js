import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ListTodoContext = createContext();

export const ListTodoProvider = ({ children }) => {
  const [listTodo, setListTodo] = useState([]);
  const [todoStatus, setTodoStatus] = useState('inProcess');
  const email = localStorage.getItem('email');

  useEffect(() => {
    axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/search-status`, { status: todoStatus, email: email }).then((response) => {
      setListTodo(response.data.status);
    }).catch((error) => {
      console.log(error)
    })
  }, [todoStatus]);

  const handleOnFindCategory = (category) => {
    axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/todo/search-category`, { category: category, email: email }).then((response) => {
      setListTodo(response.data.category);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <ListTodoContext.Provider value={{ listTodo, setListTodo, setTodoStatus, handleOnFindCategory }}>
      {children}
    </ListTodoContext.Provider>
  )
}