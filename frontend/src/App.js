import './App.css';
import { Tuote } from './toiminnot/Tuote';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { UusiTuote } from './toiminnot/UusiTuote';
import { Haku } from './toiminnot/Haku';
import { Asetukset } from './toiminnot/Asetukset';


function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<Tuote/>}></Route>
        <Route path='/uusituote' element={<UusiTuote/>}></Route>
        <Route path='/haku' element={<Haku/>}></Route>
        <Route path='/asetukset' element={<Asetukset/>}></Route>
        <Route path='/tuote/:tuotteenNimi' element={<Tuote/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
