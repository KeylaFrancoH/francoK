const db = require("../models");
const Users = db.usuarios;
const Op = db.Sequelize.Op;


// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.mobile_phone) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a new user
    const usu = {
        mobile_phone: req.body.mobile_phone,
        contrasena: req.body.contrasena
    };

    // Save User in the database
    Users.create(usu)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};
