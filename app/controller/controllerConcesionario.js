var concesionario = require("../model/concesionario.js");



//======================================================GET ===========================================//
module.exports.get = function (req, res, next) {
    concesionario.cargarTodo(function(err, data){
        if(data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg": "No hay datos"});    
    })
};


//======================================================GET :ID ===========================================//

module.exports.obtenerId = function (req, res){
    concesionario.obtenerId(req,res);
};


//======================================================POST ===========================================//

module.exports.post = function(req, res){   
    concesionario.insertarConcesionario(req, res);
};


//======================================================DELETE ===========================================//

module.exports.delete = function(req, res){
    concesionario.borrarConcesionario(req, res);

};


//======================================================PUT ===========================================//
module.exports.put = function (req, res){
    concesionario.actualizarConcesionario(req, res)
};


