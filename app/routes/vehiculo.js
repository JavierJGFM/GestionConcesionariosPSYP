var mysql=require('mysql')
var express = require("express");
var router= express.Router();

var controllerVehiculo = require("../controller/controllerVehiculo.js")

router.get("/", controllerVehiculo.get);
router.get("/:matricula", controllerVehiculo.obtenerMatricula);
router.post("/", controllerVehiculo.post);
router.put("/:matricula", controllerVehiculo.put);
router.delete("/:matricula", controllerVehiculo.delete);

module.exports= router;



