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
        
    );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "cliente", 
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
    
  );
 },
};