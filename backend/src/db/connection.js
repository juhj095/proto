var mysql = require("mysql");

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

const executeSQL = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, result, fields) => {
            error ? reject(error) : resolve(result);
        });
    });
}

const executeGetSingleSQL = (query, params) => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, function (error, results, fields) {
            error ? reject(error) : resolve(results.length > 0 ? results[0] : null);
        });
    })
}

module.exports = { executeSQL, executeGetSingleSQL };