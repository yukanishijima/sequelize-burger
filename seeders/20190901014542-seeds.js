'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Burgers', [{
      burger_name: 'Double Cheese Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      burger_name: 'Beef and Bacon Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      burger_name: 'Chili Pepper Burger',
      devoured: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Burgers', null, {});
  }
};
