const { Hotel} = require("../models.js");

const HotelController = {};

HotelController.findAll = async (req, res) => {
  try {
    const data = await Hotel.findAll({
      //  include: [{ model: Cliente, as: "id_cliente_cliente" }],
    });
    res.json(data);
 } catch (error) {
    res.status(500).send({
       message: "Some error occurred while retrieving hotel.",
    });
 }
};

//     hotel.findAll().then((data) => {
//         res.send(data);
//     });
// };

HotelController.findByPk = (req, res) => {
    const id = req.params.id;
  
  hotel.findByPk(id).then((data) => {
    res.send(data);
  });
};



module.exports = HotelController;