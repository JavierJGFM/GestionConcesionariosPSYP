var mysql=require('mysql')
var express = require("express");
var router= express.Router();

var controllerConcesionario = require("../controller/controllerConcesionario.js")

router.get("/", controllerConcesionario.get);
router.get("/:id", controllerConcesionario.obtenerId);
router.post("/", controllerConcesionario.post);
router.put("/:id", controllerConcesionario.put);
router.delete("/:id", controllerConcesionario.delete);

module.exports= router;



