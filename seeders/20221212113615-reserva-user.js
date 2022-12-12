'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
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
    await queryInterface.bulkDelete(
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
};
    
