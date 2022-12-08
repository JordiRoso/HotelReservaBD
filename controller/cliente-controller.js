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

ClienteController.findByPk = async (req, res) => {
    const id = req.params.id;

    try {
      const data = await Cliente.findByPk(id, {
        
      });

      if (data) {
         res.json(data);
      } else {
         res.status(404).send({
            message: `Cannot find user with id=${id}`,
         });
      }
   } catch (error) {
      res.status(500).send({
         message: `Error retreiving user retrieving with id=${id}.`,
      });
   }
};

  
//   cliente.findByPk(id).then((data) => {
//     res.send(data);
//   });
// };





module.exports = ClienteController;