const { executeSQL, executeGetSingleSQL } = require("./connection");

const getProducts = (tuoteNimi) => {
    let params = [];
    let query = `
    SELECT
        Product.id,
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
    LEFT JOIN
        Inventory ON Inventory.Product_id = Product.id
    WHERE 1=1`;
    
    if (tuoteNimi) {
        params.push(`%${tuoteNimi}%`);
        query += " AND ProductName.name LIKE ?"
    }
    return executeSQL(query, params);
}

const getProductByCode = (tuoteTunnus) => {
    const query = `
    SELECT
        Product.id,
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
    LEFT JOIN
        Inventory ON Inventory.Product_id = Product.id
    WHERE
        Product.code=?
    `;
    return executeGetSingleSQL(query, [tuoteTunnus]);
}

const getChangeLogs = (tunnus) => {
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
        Product.code=?
    ORDER BY ChangeLog.time`;
    return executeSQL(query, [tunnus]);
}

const getAllProductNames = () => {
    const query = "SELECT * FROM ProductName";
    return executeSQL(query, []);
}

const getAllStates = () => {
    const query = "SELECT * FROM State";
    return executeSQL(query, []);
}

const addDoctor = (code) => {
    const query = "INSERT INTO Doctor (code) VALUES (?)";
    return executeSQL(query, [code]);
}

const addCustomer = (name) => {
    const query = "INSERT INTO Customer (name, code) VALUES (?, 123)";
    return executeSQL(query, [name]);
}

const addChangeLog = (changedBy, change, quantity, recipeNumber, stateId, doctorId, customerId, productCode) => {
    const query = "INSERT INTO changelog (time, changedBy, `change`, quantity, recipeNumber, State_id, Doctor_id, Customer_id, Product_id) VALUES (NOW(), ?,?,?,?,?,?,?,(SELECT id FROM Product WHERE code = ? LIMIT 1))";
    return executeSQL(query, [changedBy, change, quantity, recipeNumber, stateId, doctorId, customerId, productCode]);
}

const addProductName = (name) => {
    const query = "INSERT INTO ProductName (name) VALUES (?)";
    return executeSQL(query, [name]);
}

const addProduct = (code, strength, size, form, wholesale, productNameId) => {
    const query = "INSERT INTO Product (code, strength, size, form, wholesale, ProductName_id) VALUES (?,?,?,?,?,?)";
    return executeSQL(query, [code, strength, size, form, wholesale, productNameId]);
}

module.exports = { getProducts, getProductByCode, getChangeLogs, getAllProductNames, getAllStates, addDoctor, addCustomer, addChangeLog, addProductName, addProduct };