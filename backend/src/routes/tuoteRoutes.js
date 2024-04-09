const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/tuoteController");

/*  Esimerkki
    /api/tuotteet?nimi=oksi
*/

router.route("/api/tuotteet").get(ctrl.getProducts);

router.route("/api/tuote/:tunnus/muutosloki").get(ctrl.getChangeLogs);

router.route("/api/tuote/:tunnus").get(ctrl.getProductByCode);

router.route("/api/tuotenimet").get(ctrl.getAllProductNames);

module.exports = router;