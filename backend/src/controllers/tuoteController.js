const sql = require("../db/tuoteSQL");

const getAllTuote = async (req, res) => {
    try {
        const result = await sql.getAllTuote();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = { getAllTuote };