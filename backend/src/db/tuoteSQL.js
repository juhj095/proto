const { executeSQL, executeGetSingleSQL } = require("./connection");

const getAllTuote = (tuoteNimi) => {
    let params = [];
    let query = `
    SELECT
        Tuote.tunnus AS Tuotetunnus,
        Tuote.nimi AS Tuotenimi,
        Tuote.vahvuus AS Vahvuus,
        Tuote.pakkauskoko AS Pakkauskoko,
        Tuote.muoto AS Muoto,
        Inventaario.maara AS Saldo
    FROM
        Tuote
    JOIN
        Inventaario ON Inventaario.Tuote_id = Tuote.id
    WHERE 1=1`;
    
    if (tuoteNimi) {
        params.push(`%${tuoteNimi}%`);
        query += " AND Tuote.nimi LIKE ?"
    }
    return executeSQL(query, params);
}

const getAllMuutosloki = (tuoteNimi) => {
    const query = `
    SELECT 
        Muutosloki.id,
        Muutosloki.aika AS paivamaara,
        Muutosloki.tekija,
        Muutosloki.muutos,
        Muutosloki.saldo,
        Muutosloki.reseptiNro AS reseptinNro,
        Tila.selite AS toiminto,
        Asiakas.nimi AS asiakas,
        Laakari.tunnus AS laakari
    FROM 
        Muutosloki
    JOIN 
        Tuote ON Muutosloki.Tuote_id = Tuote.id
    JOIN 
        Tila ON Muutosloki.Tila_id = Tila.id
    LEFT JOIN 
        Asiakas ON Muutosloki.Asiakas_id = Asiakas.id
    LEFT JOIN 
        Laakari ON Muutosloki.Laakari_id = Laakari.id
    WHERE 
        Tuote.nimi=?`;
    return executeSQL(query, [tuoteNimi]);
}

module.exports = { getAllTuote, getAllMuutosloki };