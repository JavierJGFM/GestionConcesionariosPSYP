var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'proyecto'
});

var concesionarioModel = {};

//======================================================GET TODO ===========================================//

concesionarioModel.cargarTodo = function(callback) {
    if(connection){
        connection.query("SELECT * FROM Concesionario", function(err, rows){
            if(!err)
                callback(null, rows)
            else    
                callback(err, null)    
        })
    }

}

//======================================================GET ID ===========================================//

concesionarioModel.obtenerId = function(req, res){
    var id= req.params.id;
    connection.query ('SELECT * FROM Concesionario WHERE id = ?', [id], function (err, rows){
        if (err)
            throw err
        if (rows.length > 0){
            console.log(id)
            res.json(rows);
        }
        else 
             res.json({"message":"No se encontraron Concesionarios con el id: "+id});    
        
    })
}

//======================================================CREAR ===========================================//

concesionarioModel.insertarConcesionario= function(req, res){   
    if(req.body.id!=undefined && req.body.Nombre!=undefined && req.body.Localidad!=undefined){
        connection.query('insert into Concesionario set ?',[req.body], function(err, rows) {
            if (err){
                res.status(500).json({"message":"Error al insertar Concesionario"});
            }else{
                res.status(201).json({"message":"Insertado el concesionario con Id: "+req.body.id+", Nombre: "+req.body.Nombre+" y Localidad: "+req.body.Localidad});
            }
        });
    }else{
      res.status(409).json({"message":"los datos introducidos no son correctos"});
      console.log(req.body.id)
    }
}


//======================================================BORRAR ===========================================//

concesionarioModel.borrarConcesionario = function(req, res){
     var id= req.params.id;
     connection.query("delete from Concesionario where id = ?", [id], function(err, rows){
         if(err)
            throw err
         if(rows.affectedRows >0 ){
            res.json({"message":"Concesionario con id: "+id+" borrado."}); 
         }
         else
            res.json({"message":"No existe concesionario con " +id+" para borrar."});   
     }) 
}



//======================================================ACTUALIZAR ===========================================//
concesionarioModel.actualizarConcesionario= function(req, res){
     var id= req.params.id;
     if(req.body.id != undefined && req.body.Nombre != undefined  && req.body.Localidad != undefined ){
         connection.query("UPDATE Concesionario SET ? WHERE id = ?", [req.body,id], function (err, rows){
         if (err) 
            res.status(500).json({"message":"Error al actualizar el Concesionario"});
         if (rows.affectedRows>0)
            res.json({"message":"El Concesionario con id: "+id+" se ha actualizado."});   
         else
            res.json({"message":"No existe Concesionario con el id: "+id});    
         });
     }else
        res.status(409).json({"message":"Los datos son incorrectos"});   
}




module.exports=concesionarioModel;
