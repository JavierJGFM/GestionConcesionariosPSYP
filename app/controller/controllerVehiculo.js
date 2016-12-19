var vehiculo = require("../model/vehiculo.js");



//======================================================GET ===========================================//
module.exports.get = function (req, res, next) {
    vehiculo.cargarTodo(function(err, data){
        if(data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg": "No hay datos"});    
    })
};


//======================================================GET :ID ===========================================//

module.exports.obtenerMatricula = function (req, res){
    vehiculo.obtenerMatricula(req,res);
};


//======================================================POST ===========================================//

module.exports.post = function(req, res){   
    vehiculo.insertarVehiculo(req, res);
};


//======================================================DELETE ===========================================//

module.exports.delete = function(req, res){
    vehiculo.borrarVehiculo(req, res);

};


//======================================================PUT ===========================================//
module.exports.put = function (req, res){
    vehiculo.actualizarVehiculo(req, res)
};


