import React, { useContext } from 'react';
import { ListTodoContext } from './../../context';

import axios from 'axios';

import { TodoHeaderWrapper, MyDayTitle, DateTitle, CategoryLabelsWrapper, CategoryLabelButton } from './styled';
import { DateTime } from 'luxon';

export const TodoHeader = () => {
  const listTodoContext = useContext(ListTodoContext);
  const dt = DateTime.now();
  const day = dt.plus({ days: 0 }).toLocaleString(DateTime.DATE_HUGE);
  // console.log(dt.setLocale('en-US').toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' }));

  return (
    <TodoHeaderWrapper>
      <CategoryLabelsWrapper>
        <CategoryLabelButton className='category-button-animation' category={'home'} index={1} onClick={() => listTodoContext.handleOnFindCategory('home')} >Home</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'work'} index={2} onClick={() => listTodoContext.handleOnFindCategory('work')} >Work</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'school'} index={3} onClick={() => listTodoContext.handleOnFindCategory('school')} >School</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'read'} index={4} onClick={() => listTodoContext.handleOnFindCategory('read')} >Read</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'weekend'} index={5} onClick={() => listTodoContext.handleOnFindCategory('weekend')} >Weekend</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'shop'} index={6} onClick={() => listTodoContext.handleOnFindCategory('shop')} >Shop</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'followup'} index={7} onClick={() => listTodoContext.handleOnFindCategory('followup')} >Follow Up</CategoryLabelButton>
      </CategoryLabelsWrapper>
      <div>
        <MyDayTitle>
          My Day
        </MyDayTitle>
        <DateTitle>{day}</DateTitle>
      </div>
    </TodoHeaderWrapper>
  )
}