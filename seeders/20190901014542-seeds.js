'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Burger', [{
      burger_name: 'Double Cheese Burger',
      devoured: false
    },
    {
      burger_name: 'Beef and Bacon Burger',
      devoured: false
    },
    {
      burger_name: 'Chili Pepper Burger',
      devoured: false
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Burger', null, {});
  }
};
