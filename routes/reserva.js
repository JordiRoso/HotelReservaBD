var express = require('express');
var router = express.Router();


const ReservaController = require("../controller/reserva-controller");

router.get("/", ReservaController.findAll);
router.get("/:id", ReservaController.findByPk);
router.get("/date_in_hotel/:name", ReservaController.findByfecha);
router.get("/date_out_hotel/:name", ReservaController.findByfechaOut);


module.exports = router;