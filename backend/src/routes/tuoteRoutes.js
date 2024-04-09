const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/tuoteController");

router.route("/api/tuotteet").get(ctrl.getAllTuote);

module.exports = router;