import React, { useState } from 'react';
import { getTuotteet } from '../api/tuoteApi';

const Haku = () => {
  const [hakuTerm, setHakuTerm] = useState('');
  const [hakuTulos, setHakuTulos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hakuTyyppi, setHakuTyyppi] = useState('laakari');

  const handleSearch = async () => {
    setLoading(true);
    try {
      const tuotteet = await getTuotteet(hakuTerm, hakuTyyppi);
      setHakuTulos(tuotteet);
      setError(tuotteet.length === 0 ? 'Ei tuotteita löytynyt.' : '');
    } catch (error) {
      setError('Tuotteiden hakeminen epäonnistui. Yritä uudelleen myöhemmin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Tuotehaku</h2>
      <div>
        <input
          type="text"
          value={hakuTerm}
          onChange={(e) => setHakuTerm(e.target.value)}
          placeholder="Syötä hakutermi..."
        />
        <select value={hakuTyyppi} onChange={(e) => setHakuTyyppi(e.target.value)}>
          <option value="asiakas">Hae asiakkaan perusteella</option>
          <option value="laakari">Hae lääkärin perusteella</option>
          <option value="tuotenumero">Hae tuotteen numeron perusteella</option>
        </select>
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Haetaan...' : 'Hae'}
        </button>
      </div>
      {error && <div>{error}</div>}
      {hakuTulos.length > 0 && (
        <div>
          <h3>Hakutulokset:</h3>
          <ul>
            {hakuTulos.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export {Haku};