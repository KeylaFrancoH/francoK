module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("usuarios", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      },
      date_birth: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      },
      token: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: false
      },
      contrasena: {
        type: Sequelize.STRING(120),
        allowNull: false,
        primaryKey: false
      },
      mobile_phone: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      }
    });
  
    return Data;
  };