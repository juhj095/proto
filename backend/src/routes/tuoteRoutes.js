const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/tuoteController");

/*  Esimerkki
    /api/tuotteet?nimi=Lääke1
*/

router.route("/api/tuotteet").get(ctrl.getAllTuote);

/*  Esimerkki
    /api/tuote?nimi=Lääke1
*/

router.route("/api/tuote").get(ctrl.getAllMuutosloki);

router.route("/api/tuote/:tunnus").get(ctrl.getTuote);

module.exports = router;