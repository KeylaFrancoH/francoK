module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("usuarios", {
      token: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: false
      },
      mobile_phone: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
      },
      contrasena: {
        type: Sequelize.STRING(120),
        allowNull: false,
        primaryKey: false
      }
    });
  
    return Data;
  };