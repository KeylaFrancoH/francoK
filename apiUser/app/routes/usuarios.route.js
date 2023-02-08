const { usuarios } = require("../models/index.js");

module.exports = app => {
    const users = require("../controllers/usuarios.controller.js");
    const login = require("../controllers/login.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.create);
  
    // Retrieve all Tutorials
    router.get("/", users.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", users.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", users.delete);
  
    //LOGIN POST
    router.post("/login", login.create)

    app.use('/api/users', router);
  };