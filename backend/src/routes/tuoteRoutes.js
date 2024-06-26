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

router.route("/api/states").get(ctrl.getAllStates);

router.route("/api/add-changelog").post(ctrl.addChangeLog);

router.route("/api/uusi-tuote").post(ctrl.addProduct);

module.exports = router;