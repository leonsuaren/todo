import './App.css';
import { PageLayout } from './layout/';
import { Menu } from './sections/menu';
import { EditTodo } from './sections/edit';
import { ListTodo } from './sections/list';

function App() {
  return (
    <PageLayout>
    <Menu />
    <EditTodo />
    <ListTodo />
    </PageLayout>
  );
}

export default App;
