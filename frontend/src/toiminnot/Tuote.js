import React, { useEffect, useState } from 'react';
import { addChangeLog, getAllStates, getTuote, getTuotteenMuutokset } from '../api/tuoteApi';
import '../styles/Tuote.css';
import { useParams } from 'react-router-dom';

const Tuote = () => {
  const { tunnus } = useParams();
  const [tuote, setTuote] = useState({});
  const [rows, setRows] = useState([]);
  const [toiminnot, setToiminnot] = useState([]);
  const [toiminto, setToiminto] = useState("");
  const [asiakas, setAsiakas] = useState("");
  const [reseptinNro, setReseptinNro] = useState("");
  const [laakari, setLaakari] = useState("");
  const [muutos, setMuutos] = useState("");
  const [saldo, setSaldo] = useState("");
  const [tekija, setTekija] = useState("");

  const fetchLogs = async (tunnus) => {
    try {
      const response = await getTuotteenMuutokset(tunnus);
      setRows(response);
    } catch (error) {
      //TODO: show error
    }
  }

  useEffect(() => {
    
    const fetchTuote = async (tunnus) => {
      try {
        const response = await getTuote(tunnus);
        setTuote(response);
      } catch (error) {
        //TODO: show error
      }
    }

    const fetchStates = async () => {
      try {
        const response = await getAllStates();
        setToiminnot(response);
        setToiminto(response[0].id);
      } catch (error) {
        //TODO: show error
      }
    }

    fetchTuote(tunnus);
    fetchLogs(tunnus);
    fetchStates();
  }, [tunnus]);

  const handleSubmit = async () => {
    try {
      const muutosNumber = parseInt(muutos);
      const saldoNumber = parseInt(saldo);
      if (isNaN(muutosNumber) || isNaN(saldoNumber)) {
        throw new Error('Invalid number format');
      }
      await addChangeLog(tekija, muutosNumber, saldoNumber, reseptinNro, toiminto, laakari, asiakas, tunnus);
      fetchLogs(tunnus);
      setAsiakas("");
      setReseptinNro("");
      setLaakari("");
      setMuutos("");
      setSaldo("");
      setTekija("");
    } catch (error) {
      //TODO: show error
    }
  };

  return (
    <div>
      <h1>Raportointi</h1>
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
      <input className='search-container'
        type="text"
        placeholder="Hae tuotteen tietoja..."
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
            <td></td>
            <td>
              <select value={toiminto} onChange={(e) => setToiminto(e.target.value)}>
                { toiminnot.map(t => (
                  <option key={t.id} value={t.id}>{t.definition}</option>
                ))}
              </select>
            </td>
            <td>
              <input type="text" name="asiakas" value={asiakas} onChange={(e) => setAsiakas(e.target.value)} />
            </td>
            <td>
              <input type="text" name="reseptinNro" value={reseptinNro} onChange={(e) => setReseptinNro(e.target.value)} />
            </td>
            <td>
              <input type="text" name="laakari" value={laakari} onChange={(e) => setLaakari(e.target.value)} />
            </td>
            <td>
              <input type="text" name="muutos" value={muutos} onChange={(e) => setMuutos((e.target.value))} />
            </td>
            <td>
              <input type="text" name="saldo" value={saldo} onChange={(e) => setSaldo((e.target.value))} />
            </td>
            <td>
              <input type="text" name="tekija" value={tekija} onChange={(e) => setTekija(e.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleSubmit}>Lisää merkintä</button>
    </div>
  );
};

export { Tuote }
