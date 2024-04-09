const { executeSQL, executeGetSingleSQL } = require("./connection");

const getAllTuote = () => {
    const query = `
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
        Inventaario ON Inventaario.Tuote_id = Tuote.id`;
    return executeSQL(query, []);
}

const getAllMuutosloki = (tuoteNimi) => {
    const query = `
    SELECT 
        Muutosloki.id AS Muutoslokin_id,
        Muutosloki.aika AS Muutoslokin_aika,
        Muutosloki.tekija AS Muutoslokin_tekija,
        Muutosloki.muutos AS Muutoslokin_muutos,
        Muutosloki.saldo AS Muutoslokin_saldo,
        Tila.selite AS Tilanne,
        Tuote.nimi AS Tuotteen_nimi,
        Asiakas.nimi AS Asiakkaan_nimi,
        Laakari.tunnus AS Laakarin_tunnus
    FROM 
        proto.Muutosloki
    JOIN 
        proto.Toimitus ON Muutosloki.Toimitus_id = Toimitus.id
    JOIN 
        proto.Tuote ON Toimitus.Tuote_id = Tuote.id
    JOIN 
        proto.Tila ON Muutosloki.Tila_id = Tila.id
    LEFT JOIN 
        proto.Asiakas ON Toimitus.Asiakas_id = Asiakas.id
    LEFT JOIN 
        proto.Laakari ON Toimitus.Laakari_id = Laakari.id
    WHERE 
        Tuote.nimi=?`;
    return executeSQL(query, [tuoteNimi]);
}

module.exports = { getAllTuote, getAllMuutosloki };