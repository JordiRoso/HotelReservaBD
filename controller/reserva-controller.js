const {Reserva,Cliente,Hotel} = require("../models.js");

const ReservaController = {};

ReservaController.findAll = async (req, res) => {
  try {
    const data = await Reserva.findAll({
        include: [{ model: Cliente, as: "id_cliente_cliente" },{ model: Hotel, as: "id_hotel_hotel"}],
    });
    res.json(data);
 } catch (error) {
    res.status(500).send({
       message: "Some error occurred while retrieving reserva.",
    });
 }
};


//     reserva.findAll().then((data) => {
//         res.send(data);
//     });
// };

ReservaController.findByPk = (req, res) => {
    const id = req.params.id;
  
  reserva.findByPk(id).then((data) => {
    res.send(data);
  });
};



module.exports = ReservaController;