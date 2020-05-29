let express = require('express');
let router = express.Router();
let userController = require("./controllers/user.controllers")

router.get("/", userController.index);
router.post("/", userController.create)

module.exports = router;