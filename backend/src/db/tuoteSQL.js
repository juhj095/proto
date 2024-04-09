const { executeSQL, executeGetSingleSQL } = require("./connection");

const getAllTuote = (tuoteNimi) => {
    let params = [];
    let query = `
    SELECT
        Product.code AS Tuotetunnus,
        ProductName.name AS Tuotenimi,
        Product.strength AS Vahvuus,
        Product.size AS Pakkauskoko,
        Product.form AS Muoto,
        Product.wholesale AS Tukku,
        Inventory.quantity AS Saldo
    FROM
        Product
    LEFT JOIN
        ProductName ON ProductName.id = Product.ProductName_id
    JOIN
        Inventory ON Inventory.Product_id = Product.id
    WHERE 1=1`;
    
    if (tuoteNimi) {
        params.push(`%${tuoteNimi}%`);
        query += " AND ProductName.name LIKE ?"
    }
    return executeSQL(query, params);
}

const getTuote = (tuoteTunnus) => {
    const query = `
    SELECT
        Product.code AS Tuotetunnus,
        ProductName.name AS Tuotenimi,
        Product.strength AS Vahvuus,
        Product.size AS Pakkauskoko,
        Product.form AS Muoto,
        Product.wholesale AS Tukku,
        Inventory.quantity AS Saldo
    FROM
        Product
    LEFT JOIN
        ProductName ON ProductName.id = Product.ProductName_id
    JOIN
        Inventory ON Inventory.Product_id = Product.id
    WHERE
        Product.code=?
    `;
    return executeGetSingleSQL(query, [tuoteTunnus]);
}

const getAllMuutosloki = (tunnus) => {
    const query = `
    SELECT 
        ChangeLog.id,
        ChangeLog.time AS paivamaara,
        ChangeLog.changedBy AS tekija,
        ChangeLog.change AS muutos,
        ChangeLog.quantity AS saldo,
        ChangeLog.recipeNumber AS reseptinNro,
        State.definition AS toiminto,
        Customer.name AS asiakas,
        Doctor.code AS laakari
    FROM 
        ChangeLog
    JOIN 
        Product ON ChangeLog.Product_id = Product.id
    JOIN 
        State ON ChangeLog.State_id = State.id
    LEFT JOIN 
        Customer ON ChangeLog.Customer_id = Customer.id
    LEFT JOIN 
        Doctor ON ChangeLog.Doctor_id = Doctor.id
    WHERE 
        Product.code=?`;
    return executeSQL(query, [tunnus]);
}

module.exports = { getAllTuote, getAllMuutosloki, getTuote };