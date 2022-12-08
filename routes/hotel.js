var express = require('express');
var router = express.Router();


const HotelController = require("../controller/hotel-controller");

router.get("/",HotelController.findAll);
router.get("/:id", HotelController.findByPk);
router.get("/nameHotel/:name", HotelController.findByNameHotel);

module.exports = router;
