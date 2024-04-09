import React, { useState } from 'react';

const UusiTuote = ({ onSave }) => {
    const [VNR, setVNR] = useState('');
    const [tuotenimi, setTuotenimi] = useState('');
    const [vahvuus, setVahvuus] = useState('');
    const [laakemuoto, setLaakemuoto] = useState('');
    const [pakkauskoko, setPakkauskoko] = useState('');
    const [tukku, setTukku] = useState('');


    const saveTuote = () => {
        const tuote = {
            VNR,
            tuotenimi,
            vahvuus,
            laakemuoto,
            pakkauskoko
        };
        onSave(tuote);
    };

    return (
        <div className='tuoteform-body'>
            <div className='tuoteform'>
                <div className='tuoteform-top'>
                    <h1>Uusi tuote:</h1>
                </div>
                <div className='tuoteform-mid'>
                    <table className='tuoteform-container'>
                        <tbody>
                            <tr className='tuote-item'>
                                <th>VNR:</th>
                                <td><input className="tuote-input" type='text' value={VNR} onChange={(e) => setVNR(e.target.value)} /></td>
                            </tr>
                            <tr className='tuoteform-item'>
                                <th>Tuotenimi:</th>
                                <td><input className="tuote-input" type='text' value={tuotenimi} onChange={(e) => setTuotenimi(e.target.value)} /></td>
                            </tr>
                            <tr className='tuote-item'>
                                <th>Vahvuus:</th>
                                <td><input className="tuote-input" type='text' value={vahvuus} onChange={(e) => setVahvuus(e.target.value)} /></td>
                            </tr>
                            <tr className='tuoteform-item'>
                                <th>Lääkemuoto:</th>
                                <td><input className="tuote-input" type='text' value={laakemuoto} onChange={(e) => setLaakemuoto(e.target.value)} /></td>
                            </tr>
                            <tr className='tuoteform-item'>
                                <th>Pakkauskoko:</th>
                                <td><input className="tuote-input" type='text' value={pakkauskoko} onChange={(e) => setPakkauskoko(e.target.value)} /></td>
                            </tr>
                            <tr className='tuoteform-item'>
                                <th>Tukku:</th>
                                <td><input className="tuote-input" type='text' value={tukku} onChange={(e) => setTukku(e.target.value)} /></td>
                            </tr>  
                        </tbody>
                    </table>
                </div>
                <div className='tuoteform-bottom'>
                    <button className='postbutton' onClick={saveTuote}>Tallenna tuote</button>
                </div>
            </div>
        </div>
    );
};

export {UusiTuote};
