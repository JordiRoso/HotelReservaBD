const {cliente} = require("../models/index");

const ClienteController = {};

ClienteController.findAll = (req, res) => {

    cliente.findAll().then((data) => {
        res.send(data);
    });
};

ClienteController.findByPk = (req, res) => {
    const id = req.params.id;
  
  cliente.findByPk(id).then((data) => {
    res.send(data);
  });
};





module.exports = ClienteController;