import './App.css';
import { PageLayout } from './layout/';
import { Menu } from './sections/menu';
import { EditTodo } from './sections/edit';

function App() {
  return (
    <PageLayout>
    <Menu />
    <EditTodo />
    <h1>hola</h1>
    </PageLayout>
  );
}

export default App;
