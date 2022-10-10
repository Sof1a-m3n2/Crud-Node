"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Task = _interopRequireDefault(require("../models/Task"));

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.get("/", _task.renderTasks);
router.post('/tasks/add', _task.guardarTarea);
router.get("/edit/:id", _task.obtenerdatos);
router.post('/edit/:id', _task.editarDatos);
router.get('/delete/:id', _task.eliminarDatos);
var _default = router;
exports["default"] = _default;