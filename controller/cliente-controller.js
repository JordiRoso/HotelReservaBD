const { Cliente } = require("../models.js");
//const { Op } = require("sequelize");
// const {cliente} = require("../models/index");

const ClienteController = {};

ClienteController.getAll = async (req, res) => {
  try{
    const data = await Cliente.findAll({
    // include: [{ model: Cliente, as: "id_cliente_cliente" }],
 });
 res.json(data);
} catch (error) {
 res.status(500).send({
    message: "Some error occurred while retrieving users.",
 });
}
};

    
   

// cliente.findAll().then((data) => {
//   res.send(data);

ClienteController.findByPk = (req, res) => {
    const id = req.params.id;
  
  cliente.findByPk(id).then((data) => {
    res.send(data);
  });
};





module.exports = ClienteController;