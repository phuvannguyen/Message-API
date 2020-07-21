"use strict";

var express = require('express');
var router = express.Router();
var userController = require("./controllers/user.controllers");

router.get("/", userController.index);
router.post("/", userController.create);

module.exports = router;