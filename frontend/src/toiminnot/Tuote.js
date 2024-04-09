import React, { useEffect, useState } from 'react';
import { getTuotteet } from '../api/tuoteApi';

const Tuote = (props) => {
  const { tuotteenNimi } = props;
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
        const response = await getTuotteet(tuotteenNimi);
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
