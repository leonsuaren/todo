import React from 'react';

import { TodoHeaderWrapper, MyDayTitle, DateTitle, LogOutButton } from './styled';
import { DateTime } from 'luxon';

export const TodoHeader = () => {

  const dt = DateTime.now();
  const day = dt.plus({ days: 0 }).toLocaleString(DateTime.DATE_HUGE);
  // console.log(dt.setLocale('en-US').toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' }));

  return (
    <TodoHeaderWrapper>
      <div>
        <MyDayTitle>
          My Day
        </MyDayTitle>
        <DateTitle>{day}</DateTitle>
      </div>
      <div>
      </div>
    </TodoHeaderWrapper>
  )
}