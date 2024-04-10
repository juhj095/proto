import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Asetukset.css';


const Asetukset = () => {
  return (
    <div>
      <h2>Asetukset</h2>
      <p><Link to="/uusituote">Luo uusi tuote</Link></p>
    </div>
  );
};

export {Asetukset}
