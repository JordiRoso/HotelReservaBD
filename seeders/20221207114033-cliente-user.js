'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        'cliente', 
        [
            {
              name: 'John',
              lastname: 'Doe',
              dni:'456789056g',
              phone :617563422,
              email:'doefail@hotmail.com'
            },
            {
                name: 'Trini',
                lastname: 'Mendoza',
                dni:'556789856g',
                phone :6185634242,
                email:'triniguay@hotmail.com'
              },
              {
                name: 'Lisa',
                lastname: 'Mona',
                dni:'886789876g',
                phone :7185334242,
                email:'lisamona@hotmail.com'
              },
              {
                name: 'Wolfang',
                lastname: 'Gullich',
                dni:'786784476g',
                phone :4445334242,
                email:'gullich@actiondirecte.com'
              }
        ], 
        'hotel',
        [
              {
                nameHotel:'Hotel Corto Maltesse'

              },
              {
                nameHotel:'Hotel Ecrins'

              },
              {
                nameHotel:' Hotel Action Directe'

              },
              {
                nameHotel:'Hotel Karma'

              },
        ],
        'reservas',
        [
              {
                date_in_hotel:2023-12-22,
                date_out_hotel: 2023-12-24,
                money: 400

              },
              {
                date_in_hotel:2022-11-22,
                date_out_hotel: 2022-11-24,
                money: 600

              },
              {
                date_in_hotel:2022-09-11,
                date_out_hotel: 2022-09-11,
                money: 155

              },
              {
                date_in_hotel:2023-09-11,
                date_out_hotel: 2023-09-11,
                money: 155
              },
        ]
    );
},

  async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
 },

};