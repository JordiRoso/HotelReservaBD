const { Hotel, Reserva, Cliente} = require("../models.js");
const { Op } = require("sequelize");

const HotelController = {};

HotelController.findAll = async (req, res) => {
  try {
    const data = await Hotel.findAll({
       include: [{ model: Reserva, as: "reservas",
       include: { model: Cliente, as: "id_cliente_cliente"}, }],
      });
    res.json(data);
 } catch (error) {
    res.status(500).send({
       message: "Some error occurred while retrieving hotel.",
    });
 }
};



HotelController.findByPk = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Hotel.findByPk(id, {
      include: [{ model: Reserva, as: "reservas",
       include: { model: Cliente, as: "id_cliente_cliente"}, }],
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

HotelController.findByNameHotel = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Hotel.findAll({
      where: {nameHotel: { [Op.like]: `%${name}%`}  },
      include: [{ model: Reserva, as: "reservas",
       include: { model: Cliente, as: "id_cliente_cliente"}, }],
    });

    if (data.length > 0) {
      res.json(data);
   } else {
      res.status(404).send({
         message: `Cannot find user with name=${name}`,
      });
   }
  }  catch (error) {
      res.status(500).send({
        message: `Error retreiving user retrieving with name=${name}.`,
     });
  }
};



module.exports = HotelController;