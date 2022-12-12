'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
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
     ]
   );
  },
  

    
    
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
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
     ]
   );
  },
  
};
