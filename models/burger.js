// create a "Burger" model to match the database
module.exports = function (sequelize, DataTypes) {

  const Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;

};


// const Burger = sequelize.define("Burger", {
//   burger_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       len: [1, 30]
//     }
//   },
//   devoured: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false
//   }
// });


// sync with the database
// should it be in server.js?

// Burger.sync();


// module.exports = Burger;