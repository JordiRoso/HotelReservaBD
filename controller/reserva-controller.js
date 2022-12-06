const {reserva} = require("../models/index");

const ReservaController = {};

ReservaController.findAll = (req, res) => {

    reserva.findAll().then((data) => {
        res.send(data);
    });
};

ReservaController.findByPk = (req, res) => {
    const id = req.params.id;
  
  reserva.findByPk(id).then((data) => {
    res.send(data);
  });
};



module.exports = ReservaController;