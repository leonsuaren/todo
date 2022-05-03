import './App.css';
import { PageLayout } from './layout/';
import { Menu } from './sections/menu';
import { TodoHeader } from './sections/todo-header';
import { ListTodo } from './sections/list';

function App() {
  return (
    <PageLayout>
      <Menu />
      <TodoHeader />
      <ListTodo />
    </PageLayout>
  );
}

export default App;
