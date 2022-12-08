var express = require('express');
var router = express.Router();

const ClienteController = require("../controller/cliente-controller");

router.get("/", ClienteController.getAll);
router.get("/:id", ClienteController.findByPk);
router.get("/name/:name", ClienteController.findByName);
router.get("/lastname/:name", ClienteController.findBylastName);
router.get("/email/:name", ClienteController.findByMail);
router.get("/dni/:name", ClienteController.findByDni);
router.get("/phone/:name", ClienteController.findByPhone);


module.exports = router;
