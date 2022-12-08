var express = require('express');
var router = express.Router();

const ClienteController = require("../controller/cliente-controller");

router.get("/", ClienteController.getAll);
router.get("/:id", ClienteController.findByPk);


module.exports = router;
