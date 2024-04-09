import React, { useEffect, useState } from 'react';
import { getTuotteenMuutokset } from '../api/tuoteApi';
import '../styles/Tuote.css';
import { useParams } from 'react-router-dom';

const Tuote = () => {
  const { tuotteenNimi } = useParams();
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
    const fetchData = async (tuotteenNimi) => {
      try {
        const response = await getTuotteenMuutokset(tuotteenNimi);
        setRows(response);
      } catch (error) {
        //TODO: show error
      }
    }
    fetchData(tuotteenNimi);
  }, [tuotteenNimi]);

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
        {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.vnr}</td>
              <td>{row.tuotenimi}</td>
              <td>{row.vahvuus}</td>
              <td>{row.laakemuoto}</td>
              <td>{row.pakkauskoko}</td>
              <td>{row.tukku}</td>
            </tr>
          ))}

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
