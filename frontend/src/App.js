import './App.css';
import { Tuote } from './toiminnot/Tuote';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes> {/* <Routes> korjaa virheen */}
        <Route path='/' element={<Tuote/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
