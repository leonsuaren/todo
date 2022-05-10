import React from 'react';

import { PageLayout } from '../../layout/PageLayout';
import { Menu } from '../../sections/menu';
import { TodoHeader } from '../../sections/todo-header';
import { ListTodo } from '../../sections/list';

export const Home = () => {
  return (
    <PageLayout>
      <Menu />
      <TodoHeader />
      <ListTodo />
    </PageLayout>
  )
}