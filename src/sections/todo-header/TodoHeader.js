import React from 'react';
import { TodoHeaderWrapper, MyDayTitle, DateTitle } from './styled';
import { DateTime } from 'luxon';

export const TodoHeader = () => {
  const dt = DateTime.now();
  const day = dt.plus({ days: 0}).toLocaleString(DateTime.DATE_HUGE);
  // console.log(dt.setLocale('en-US').toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' }));
  console.log(day);
  return (
    <TodoHeaderWrapper>
      <MyDayTitle>
        My Day
      </MyDayTitle>
      <DateTitle>{day}</DateTitle>
    </TodoHeaderWrapper>
  )
}