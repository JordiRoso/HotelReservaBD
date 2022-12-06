var express = require('express');
var router = express.Router();


const ReservaController = require("../controller/reserva-controller");

router.get("/", ReservaController.findAll);
router.get("/:id", ReservaController.findByPk);

module.exports = router;