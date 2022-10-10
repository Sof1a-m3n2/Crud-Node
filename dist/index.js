"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var puerto = 5000;

_app["default"].listen(puerto);

console.log("servidor " + puerto);