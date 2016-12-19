var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'proyecto'
});

var vehiculoModel = {};

//======================================================GET TODO ===========================================//

vehiculoModel.cargarTodo = function(callback) {
    if(connection){
        connection.query("SELECT * FROM Vehiculo", function(err, rows){
            if(!err)
                callback(null, rows)
            else    
                callback(err, null)    
        })
    }

}

//======================================================GET ID ===========================================//

vehiculoModel.obtenerMatricula = function(req, res){
    var matricula= req.params.matricula;
    connection.query ('SELECT * FROM Vehiculo WHERE matricula = ?', [matricula], function (err, rows){
        if (err)
            throw err
        if (rows.length > 0){
            console.log(matricula)
            res.json(rows);
        }
        else 
             res.json({"message":"No se encontraron Vehiculos con la matricula: "+matricula});    
        
    })
}

//======================================================CREAR ===========================================//

vehiculoModel.insertarVehiculo= function(req, res){   
    if(req.body.matricula!=undefined && req.body.Kms!=undefined){
        connection.query('insert into Vehiculo set ?',[req.body], function(err, rows) {
            if (err){
                res.status(500).json({"message":"Error al insertar Vehiculo"});
            }else{
                res.status(201).json({"message":"Insertado el Vehiculo con matricula: "+req.body.matricula+" y kilometros: "+req.body.Kms});
            }
        });
    }else{
      res.status(409).json({"message":"los datos introducidos no son correctos"});
      console.log(req.body.matricula)
    }
}


//======================================================BORRAR ===========================================//

vehiculoModel.borrarVehiculo = function(req, res){
     var matricula= req.params.matricula;
     connection.query("delete from Vehiculo where matricula = ?", [matricula], function(err, rows){
         if(err)
            throw err
         if(rows.affectedRows >0 ){
            res.json({"message":"Vehiculo con matricula: "+matricula+" borrado."}); 
         }
         else
            res.json({"message":"No existe vehiculo con " +matricula+" para borrar."});   
     }) 
}



//======================================================ACTUALIZAR ===========================================//
vehiculoModel.actualizarVehiculo= function(req, res){
     var matricula= req.params.matricula;
     if(req.body.matricula != undefined && req.body.Kms != undefined){
         connection.query("UPDATE Vehiculo SET ? WHERE matricula = ?", [req.body,matricula], function (err, rows){
         if (err) 
            res.status(500).json({"message":"Error al actualizar el Vehiculo"});
         if (rows.affectedRows>0)
            res.json({"message":"El Vehiculo con matricula: "+matricula+" se ha actualizado."});   
         else
            res.json({"message":"No existe Vehiculo con la matricula: "+matricula});    
         });
     }else
        res.status(409).json({"message":"Los datos son incorrectos"});   
}




module.exports=vehiculoModel;
