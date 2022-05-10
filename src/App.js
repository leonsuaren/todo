import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './views/home'
import { Register } from './views/register';
import { ProtectRoute } from './protect-route';
import { Login } from './views/log-in';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<ProtectRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
