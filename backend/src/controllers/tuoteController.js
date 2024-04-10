const sql = require("../db/tuoteSQL");

const getProducts = async (req, res) => {
    try {
        const { nimi } = req.query;
        const result = await sql.getProducts(nimi);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send();
    }
}

const getProductByCode = async (req, res) => {
    try {
        const { tunnus } = req.params;
        const result = await sql.getProductByCode(tunnus);
        if (!result) return res.status(404).send();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send();
    }
}

const getChangeLogs = async (req, res) => {
    try {
        const { tunnus } = req.params;
        const result = await sql.getChangeLogs(tunnus);
        if (!result) return res.status(404).send();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send();
    }
}

const getAllProductNames = async (req, res) => {
    try {
        const result = await sql.getAllProductNames();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send();
    }
}

const getAllStates = async (req, res) => {
    try {
        const result = await sql.getAllStates();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send();
    }
}

const addChangeLog = async (req, res) => {
    try {
        const { changedBy, change, quantity, recipeNumber, stateId, doctor, customer, productCode } = req.body;
        let doctorResult = {};
        let customerResult = {};
        if (doctor) doctorResult = await sql.addDoctor(doctor);
        if (customer) customerResult = await sql.addCustomer(customer);
        await sql.addChangeLog(changedBy, change, quantity, recipeNumber, stateId, doctorResult.insertId, customerResult.insertId, productCode);
        res.status(201).send();
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = { getProducts, getProductByCode, getChangeLogs, getAllProductNames, getAllStates, addChangeLog };