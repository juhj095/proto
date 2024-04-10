import React, { useEffect, useState } from 'react';
import { getTuote, getTuotteenMuutokset } from '../api/tuoteApi';
import '../styles/Tuote.css';
import { useParams } from 'react-router-dom';

const Tuote = () => {
  const { tunnus } = useParams();
  const [tuote, setTuote] = useState({});
  const [rows, setRows] = useState([]);
  const [uusiMerkinta, setUusiMerkinta] = useState({
    paivamaara: '',
    toiminto: '',
    asiakas: '',
    reseptinNro: '',
    laakari: '',
    muutos: '',
    saldo: '',
    tekija: ''
  });

  useEffect(() => {
    const fetchLogs = async (tunnus) => {
      try {
        const response = await getTuotteenMuutokset(tunnus);
        setRows(response);
      } catch (error) {
        //TODO: show error
      }
    }
    const fetchTuote = async (tunnus) => {
      try {
        const response = await getTuote(tunnus);
        setTuote(response);
      } catch (error) {
        //TODO: show error
      }
    }

    fetchTuote(tunnus);
    fetchLogs(tunnus);
  }, [tunnus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUusiMerkinta({ ...uusiMerkinta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; 
    const uusiMerkintaWithDate = { ...uusiMerkinta, paivamaara: currentDate };
    setRows([...rows, uusiMerkintaWithDate]);
    setUusiMerkinta({
      paivamaara: '',
      toiminto: '',
      asiakas: '',
      reseptinNro: '',
      laakari: '',
      muutos: '',
      saldo: '',
      tekija: ''
    });
  };

  return (
    <div>
        <div className='drugInfo'>
          <div>
            <div>VNR</div>
            <div>{tuote.Tuotetunnus}</div>
          </div>
          <div>
            <div>Tuotenimi</div>
            <div>{tuote.Tuotenimi}</div>
          </div>
          <div>
            <div>Vahvuus</div>
            <div>{tuote.Vahvuus}</div>
          </div>
          <div>
            <div>Lääkemuoto</div>
            <div>{tuote.Muoto}</div>
          </div>
          <div>
            <div>Pakkauskoko</div>
            <div>{tuote.Pakkauskoko}</div>
          </div>
          <div>
            <div>Tukku</div>
            <div>{tuote.Tukku}</div>
          </div>
        </div>  
        <div className="search-container">
      <input
        type="text"
        placeholder="Hae..."
        value=""
        onChange={() => {}}
      />
      <button onClick={() => {}}>Hae</button>
    </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Päivämäärä</th>
            <th>Toiminto</th>
            <th>Asiakas</th>
            <th>Reseptin nro</th>
            <th>Lääkäri</th>
            <th>Muutos</th>
            <th>Saldo</th>
            <th>Tekijä</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'light-gray-row' : 'gray-row'}>
              <td>{row.id}</td>
              <td>{new Date(row.paivamaara).toLocaleDateString('fi-FI')}</td>
              <td>{row.toiminto}</td>
              <td>{row.asiakas}</td>
              <td>{row.reseptinNro}</td>
              <td>{row.laakari}</td>
              <td>{row.muutos > 0 && "+"}{row.muutos}</td>
              <td>{row.saldo}</td>
              <td>{row.tekija}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input type="text" name="toiminto" value={uusiMerkinta.toiminto} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="asiakas" value={uusiMerkinta.asiakas} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="reseptinNro" value={uusiMerkinta.reseptinNro} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="laakari" value={uusiMerkinta.laakari} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="muutos" value={uusiMerkinta.muutos} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="saldo" value={uusiMerkinta.saldo} onChange={handleChange} />
            </td>
            <td>
              <input type="text" name="tekija" value={uusiMerkinta.tekija} onChange={handleChange} />
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleSubmit}>Lisää merkintä</button>
    </div>
  );
};

export { Tuote }
