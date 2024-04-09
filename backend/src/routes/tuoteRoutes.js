const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/tuoteController");

router.route("/api/tuotteet").get(ctrl.getAllTuote);

/*  Esimerkki
    /api/tuote?nimi=Lääke1
*/

router.route("/api/tuote").get(ctrl.getAllMuutosloki);

module.exports = router;