import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { PageLayout } from './layout/';
import { Menu } from './sections/menu';
import { TodoHeader } from './sections/todo-header';
import { ListTodo } from './sections/list';
import { Register } from './views/register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// <PageLayout>
// <Menu />
// <TodoHeader />
// <ListTodo />
// </PageLayout>
