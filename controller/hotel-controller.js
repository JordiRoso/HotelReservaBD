const { Hotel, Reserva } = require("../models.js");

const HotelController = {};

HotelController.findAll = async (req, res) => {
  try {
    const data = await Hotel.findAll({
       include: [{ model: Reserva, as: "reservas" }],
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
      include: [{ model: Reserva, as: "reservas" }],
      
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



module.exports = HotelController;