const {hotel} = require("../models/index");

const HotelController = {};

HotelController.findAll = (req, res) => {

    hotel.findAll().then((data) => {
        res.send(data);
    });
};

HotelController.findByPk = (req, res) => {
    const id = req.params.id;
  
  hotel.findByPk(id).then((data) => {
    res.send(data);
  });
};



module.exports = HotelController;