"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.PORT = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var base = process.env.MONGODB_URI;
exports.base = base;
var PORT = process.env.PORT || 5000;
exports.PORT = PORT;