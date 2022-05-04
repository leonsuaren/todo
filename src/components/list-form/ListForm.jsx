import React, { useState } from 'react';

import { Form, FormCard, AddTodoButton, AiOutlinePlusStyled, InputStyled } from './styled';

export const ListForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <FormCard>
      <Form onSubmit={handleOnSubmit}>
        <InputStyled 
        type='text'
        className='input'
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
        />
        <AddTodoButton><AiOutlinePlusStyled/></AddTodoButton>
      </Form>
    </FormCard>
  )
}