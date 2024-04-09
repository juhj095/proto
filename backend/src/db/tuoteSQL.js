const { executeSQL, executeGetSingleSQL } = require("./connection");

const getAllTuote = () => {
    const query = `
    SELECT 
        Tuote.tunnus AS Tuotetunnus,
        Tuote.nimi AS Tuotenimi,
        Tuote.vahvuus AS Vahvuus,
        Tuote.pakkauskoko AS Pakkauskoko,
        Tuote.muoto AS Muoto,
        Asiakas.nimi AS Asiakasnimi,
        Muutosloki.aika AS Toimitusaika,
        Laakari.tunnus AS Laakaritunnus,
        Tila.selite AS Tilanne,
        Muutosloki.muutos AS Muutos,
        Muutosloki.saldo AS Saldo,
        Muutosloki.tekija AS Tekija
    FROM 
        Tuote
    JOIN 
        Toimitus ON Toimitus.Tuote_id = Tuote.id
    JOIN 
        Asiakas ON Toimitus.Asiakas_id = Asiakas.id
    JOIN 
        Muutosloki ON Toimitus.Muutosloki_id = Muutosloki.id
    JOIN 
        Laakari ON Toimitus.Laakari_id = Laakari.id
    JOIN 
        Tila ON Muutosloki.Tila_id = Tila.id`;
    return executeSQL(query, []);
}

module.exports = { getAllTuote };