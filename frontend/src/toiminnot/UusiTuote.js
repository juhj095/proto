import React, { useState } from 'react';
import '../styles/UusiTuote.css';

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
            pakkauskoko,
            tukku
        };
        onSave(tuote);
    };

    const [hoveredRow, setHoveredRow] = useState(null);

    return (
        <div>
            <div>
                <div>
                    <h1>Uusi tuote:</h1>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>VNR:</th>
                                <td><input type='text' value={VNR} onChange={(e) => setVNR(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Tuotenimi:</th>
                                <td><input type='text' value={tuotenimi} onChange={(e) => setTuotenimi(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Vahvuus:</th>
                                <td><input type='text' value={vahvuus} onChange={(e) => setVahvuus(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Lääkemuoto:</th>
                                <td><input type='text' value={laakemuoto} onChange={(e) => setLaakemuoto(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Pakkauskoko:</th>
                                <td><input type='text' value={pakkauskoko} onChange={(e) => setPakkauskoko(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th>Tukku:</th>
                                <td><input type='text' value={tukku} onChange={(e) => setTukku(e.target.value)} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onClick={saveTuote}>Tallenna tuote</button>
                </div>
            </div>
        </div>
    );
    
}
export {UusiTuote};
