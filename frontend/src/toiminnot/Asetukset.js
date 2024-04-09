import React from 'react';
import { Link } from 'react-router-dom';

const Asetukset = () => {
  return (
    <div>
      <h2>Asetukset</h2>
      <p><Link to="/uusituote">Luo uusi tuote</Link></p>
      <p><Link to="/tulostus">Tulosta valitsemasi sivu</Link></p>
    </div>
  );
};

export {Asetukset}
