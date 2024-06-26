import './App.css';
import { Tuote } from './toiminnot/Tuote';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { UusiTuote } from './toiminnot/UusiTuote';
import { Haku } from './toiminnot/Haku';
import { Asetukset } from './toiminnot/Asetukset';
import {Navigointi} from './toiminnot/Navigointi';


function App() {
  return (
    <Router>
      <Navigointi/>
      <Routes> 
        <Route path='/uusituote' element={<UusiTuote/>}></Route>
        <Route path='/' element={<Haku/>}></Route>
        <Route path='/asetukset' element={<Asetukset/>}></Route>
        <Route path='/tuote/:tunnus' element={<Tuote/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
