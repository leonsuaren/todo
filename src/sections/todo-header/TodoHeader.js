import React from 'react';

import { TodoHeaderWrapper, MyDayTitle, DateTitle, CategoryLabelsWrapper, CategoryLabelButton } from './styled';
import { DateTime } from 'luxon';

export const TodoHeader = () => {

  const dt = DateTime.now();
  const day = dt.plus({ days: 0 }).toLocaleString(DateTime.DATE_HUGE);
  // console.log(dt.setLocale('en-US').toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' }));

  return (
    <TodoHeaderWrapper>
      <CategoryLabelsWrapper>
        <CategoryLabelButton className='category-button-animation' category={'home'} index={1}>Home</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'work'} index={2}>Work</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'school'} index={3}>School</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'read'} index={4}>Read</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'weekend'} index={5}>Weekend</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'shop'} index={6}>Shop</CategoryLabelButton>
        <CategoryLabelButton className='category-button-animation' category={'followup'} index={7}>Follow Up</CategoryLabelButton>
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