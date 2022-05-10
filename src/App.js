import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './views/home'
import { Register } from './views/register';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
