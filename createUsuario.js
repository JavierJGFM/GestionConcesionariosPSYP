var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'proyecto'
});

if (process.argv[2] === 'crearUsuario') {
    connection.connect();

    var createUser = 'CREATE USER empleado@localhost IDENTIFIED BY "empleado"; \
    grant insert,update,delete,select on proyecto.Concesionario to empleado@localhost;  \
    grant insert,update,delete,select on proyecto.Vehiculo to empleado@localhost; \
    grant execute on function proyecto.obtener_media to empleado@localhost;'; 


    connection.query(createUser, function(err, rows){
        if(!err)
        console.log("Empleado creado.");
        else
        console.log(err)
    })
}









