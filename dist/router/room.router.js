"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _room = require("../controllers/room.controllers");

var router = _express.Router;

router.get("/", _room.listChat);

exports.default = router;