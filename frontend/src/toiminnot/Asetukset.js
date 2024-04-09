import React from 'react';
import { Link } from 'react-router-dom';

const Asetukset = () => {
  return (
    <div>
      <h2>Asetukset</h2>
      <Link to="/uusituote">Luo uusi tuote</Link>
      <Link to="/tulostus">Luo uusi tuote</Link>
    </div>
  );
};

export {Asetukset}
