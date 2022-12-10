const { Cliente, Reserva, Hotel } = require("../models.js");
const { Op } = require("sequelize");

const ClienteController = {};

ClienteController.getAll = async (req, res) => {
  try{
    const data = await Cliente.findAll({
      include: [{ model: Reserva, as:  "reservas",
   include: { model: Hotel, as:"id_hotel_hotel"}, }],
    
 });
 res.json(data);
} catch (error) {
 res.status(500).send({
    message: "Some error occurred while retrieving users.",
 });
}
};


ClienteController.findByPk = async (req, res) => {
    const id = req.params.id;

    try {
      const data = await Cliente.findByPk(id, {
         include: [{ model: Reserva, as:  "reservas",
   include: { model: Hotel, as:"id_hotel_hotel"}, }],
    
        
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

  
ClienteController.findByName = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Cliente.findAll({
      where: {name: { [Op.like]: `%${name}%`}  },
      include: [{ model: Reserva, as:  "reservas",
   include: { model: Hotel, as:"id_hotel_hotel"}, }],
    
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

ClienteController.findBylastName = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Cliente.findAll({
      where: {lastname: { [Op.like]: `%${name}%`}  },
      include: [{ model: Reserva, as:  "reservas",
      include: { model: Hotel, as:"id_hotel_hotel"}, }],
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

ClienteController.findByMail = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Cliente.findAll({
      where: {email: { [Op.like]: `%${name}%`}  },
      include: [{ model: Reserva, as:  "reservas",
      include: { model: Hotel, as:"id_hotel_hotel"}, }],
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

ClienteController.findByDni = async (req, res) => {
  const name = req.params.name;

  try {
    const data = await Cliente.findAll({
      where: {dni: { [Op.like]: `%${name}%`}  },
      include: [{ model: Reserva, as:  "reservas",
      include: { model: Hotel, as:"id_hotel_hotel"}, }],
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
 
// ClienteController.findByDni = async (req, res) => {
//   const name = req.params.name;

//   try {
//     const data = await Cliente.findAll({
//       where: {dni: { [Op.like]: `%${name}%`}  },
//       include: [{ model: Reserva, as:  "reservas" }],
//     });

//     if (data.length > 0) {
//       res.json(data);
//    } else {
//       res.status(404).send({
//          message: `Cannot find user with name=${name}`,
//       });
//    }
// } catch (error) {
//    res.status(500).send({
//       message: `Error retreiving user retrieving with name=${name}.`,
//    });
// }
// };
 
ClienteController.findByPhone = async (req, res) => {
   const name = req.params.name;
 
   try {
     const data = await Cliente.findAll({
       where: {phone: { [Op.like]: `%${name}%`}  },
       include: [{ model: Reserva, as:  "reservas",
      include: { model: Hotel, as:"id_hotel_hotel"}, }],
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
  
 

 





module.exports = ClienteController;