import React from 'react';

import { useNavigate } from 'react-router-dom';

import { TodoHeaderWrapper, MyDayTitle, DateTitle, LogOutButton } from './styled';
import { DateTime } from 'luxon';

export const TodoHeader = () => {
  const navigate = useNavigate();

  const dt = DateTime.now();
  const day = dt.plus({ days: 0 }).toLocaleString(DateTime.DATE_HUGE);
  const username = localStorage.getItem('username');
  // console.log(dt.setLocale('en-US').toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' }));

  const handleOnLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  }

  return (
    <TodoHeaderWrapper>
      <div>
        <MyDayTitle>
          My Day
        </MyDayTitle>
        <DateTitle>{day}</DateTitle>
      </div>
      <div>
        <MyDayTitle>
          { username }
        </MyDayTitle>
        <LogOutButton onClick={handleOnLogout}>Logout</LogOutButton>
      </div>
    </TodoHeaderWrapper>
  )
}