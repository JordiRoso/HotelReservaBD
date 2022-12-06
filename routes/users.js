var express = require('express');
var router = express.Router();

const ClienteController = require("../controller/cliente-controller");

router.get("/", ClienteController.findAll);
router.get("/:id", ClienteController.findByPk);


module.exports = router;
