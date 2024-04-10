import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllProductNames, getTuotteet } from '../api/tuoteApi';
import '../styles/Haku.css';

const Haku = () => {
  const [hakuTerm, setHakuTerm] = useState('');
  const [hakuTulos, setHakuTulos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tuoteNimet, setTuoteNimet] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductNames = async () => {
      try {
        const response = await getAllProductNames();
        setTuoteNimet(response);
      } catch (error) {
        // TODO handle error
      }
    }

    fetchProductNames();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const tuotteet = await getTuotteet(hakuTerm);
      setHakuTulos(tuotteet);
      setError(tuotteet.length === 0 ? 'Ei löytynyt tuotteita.' : '');
    } catch (error) {
      setError('Tuotteiden hakeminen epäonnistui. Yritä uudelleen myöhemmin.');
    } finally {
      setLoading(false);
    }
  };

  const handleProductNameClicked = async (productName) => {
    try {
      const tuotteet = await getTuotteet(productName);
      setHakuTulos(tuotteet);
      setError(tuotteet.length === 0 ? 'Ei tuotteita löytynyt.' : '');
    } catch (error) {
      setError('Tuotteiden hakeminen epäonnistui. Yritä uudelleen myöhemmin.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Tuotehaku</h1>
      <div className='search-container'>
        <input className='search-container'
          type="text"
          value={hakuTerm}
          onChange={(e) => setHakuTerm(e.target.value)}
          placeholder="Syötä hakutermi..."
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Haetaan...' : 'Hae'}
        </button> 
      </div>
      <div>{ hakuTulos.length > 0 && <button onClick={() => setHakuTulos([])}>Takaisin aineluetteloon</button>} </div>
      {error && <div>{error}</div>}
      {hakuTulos.length > 0 && (
        <div>
          <h3>Hakutulokset:</h3>
          <table>
            <thead>
              <tr>
                <th>Tuotetunnus</th>
                <th>Tuotenimi</th>
                <th>Vahvuus</th>
                <th>Lääkemuoto</th>
                <th>Pakkauskoko</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody> 
            {hakuTulos.map((tuote) => (
              <tr key={tuote.id} onClick={() => navigate(`/tuote/${tuote.Tuotetunnus}`)}>
                  <td>{tuote.Tuotetunnus}</td>
                  <td>{tuote.Tuotenimi}</td>
                  <td>{tuote.Vahvuus}</td>
                  <td>{tuote.Muoto}</td>
                  <td>{tuote.Pakkauskoko}</td>
                  <td>{tuote.Saldo}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
      { hakuTulos.length === 0 && (
        <div className='productNames'>
          {
            tuoteNimet.map(nimi => (
              <div className='productName' key={nimi.id} onClick={() => handleProductNameClicked(nimi.name)}>{nimi.name}</div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export { Haku };
