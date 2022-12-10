const {Reserva,Cliente,Hotel} = require("../models.js");
const { Op } = require("sequelize");


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

// ReservaController.findByPk = (req, res) => {
//     const id = req.params.id;
  
//   reserva.findByPk(id).then((data) => {
//     res.send(data);
//   });
// };


ReservaController.findByPk = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Reserva.findByPk(id, {
      include: [{ model: Cliente, as: "id_cliente_cliente" },{ model: Hotel, as: "id_hotel_hotel"}],
      
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

ReservaController.findByfecha = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Reserva.findAll({
      where: {date_in_hotel: { [Op.like]: `%${name}%`}  },
      include: [{ model: Cliente, as: "id_cliente_cliente" },{ model: Hotel, as: "id_hotel_hotel"}],
    });

    if (data.length > 0) {
      res.json(data);
   } else {
      res.status(404).send({
         message: `Cannot find user with name=${name}`,
      });
   }
} catch (error) {
   res.status(500).send({
      message: `Error retreiving user retrieving with name=${name}.`,
   });
}
};

ReservaController.findByfechaOut = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Reserva.findAll({
      where: {date_out_hotel: { [Op.like]: `%${name}%`}  },
      include: [{ model: Cliente, as: "id_cliente_cliente" },{ model: Hotel, as: "id_hotel_hotel"}],
    });

    if (data.length > 0) {
      res.json(data);
   } else {
      res.status(404).send({
         message: `Cannot find user with name=${name}`,
      });
   }
} catch (error) {
   res.status(500).send({
      message: `Error retreiving user retrieving with name=${name}.`,
   });
}
};



module.exports = ReservaController;