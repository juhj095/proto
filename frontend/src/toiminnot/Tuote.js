import React, { useEffect, useState } from 'react';
import { getTuote, getTuotteenMuutokset } from '../api/tuoteApi';
import '../styles/Tuote.css';
import { useParams } from 'react-router-dom';

const Tuote = () => {
  const { tunnus } = useParams();
  const [tuote, setTuote] = useState({});
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows([...rows, formData]);
    setFormData({
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
        <table>
        <thead>
            <tr>
            <th>VNR</th>
            <th>TUOTENIMI</th>
            <th>VAHVUUS</th>
            <th>LÄÄKEMUOTO</th>
            <th>PAKKAUSKOKO</th>
            <th>TUKKU</th>
            </tr>
        </thead>
        <tbody>
            <tr >
              <td>{tuote.Tuotetunnus}</td>
              <td>{tuote.Tuotenimi}</td>
              <td>{tuote.Vahvuus}</td>
              <td>{tuote.Muoto}</td>
              <td>{tuote.Pakkauskoko}</td>
              <td>{tuote.Tukku}</td>
            </tr>
        

        </tbody>
        </table>  
      <table>
        <thead>
          <tr>
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
            <tr key={index}>
              <td>{row.paivamaara}</td>
              <td>{row.toiminto}</td>
              <td>{row.asiakas}</td>
              <td>{row.reseptinNro}</td>
              <td>{row.laakari}</td>
              <td>{row.muutos}</td>
              <td>{row.saldo}</td>
              <td>{row.tekija}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export {Tuote}
