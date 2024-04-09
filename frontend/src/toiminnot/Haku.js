import React, { useState } from 'react';
import { getTuotteet } from '../api/tuoteApi';
import { NavLink } from 'react-router-dom';
import '../styles/Haku.css';

const Haku = () => {
  const [hakuTerm, setHakuTerm] = useState('');
  const [hakuTulos, setHakuTulos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    try {
      const tuotteet = await getTuotteet(hakuTerm);
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
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Haetaan...' : 'Hae'}
        </button>
      </div>
      {error && <div>{error}</div>}
      {hakuTulos.length > 0 && (
        <div>
          <h3>Hakutulokset:</h3>
          <div>
            {hakuTulos.map((tuote, index) => (
              <div key={index}>
                <p>Tuotetunnus: {tuote.Tuotetunnus}</p>
                <p>Tuotenimi: {tuote.Tuotenimi}</p>
                <p>Vahvuus: {tuote.Vahvuus}</p>
                <p>Lääkemuoto: {tuote.Muoto}</p>
                <p>Pakkauskoko: {tuote.Pakkauskoko}</p>
                <p>Saldo: {tuote.Saldo}</p>
                <NavLink to={`/tuote/${tuote.Tuotetunnus}`}>Näytä tuote</NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Haku };
