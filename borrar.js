var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'proyecto'
});

if (process.argv[2] === 'borrarConcesionarios') {
    connection.connect();

    var createConcesionario = 'TRUNCATE TABLE Concesionario;'
    connection.query(createConcesionario, function(err, rows){
        if(!err)
        console.log("Concesionarios borrados.");
        else
        console.log(err)
    })
}

if (process.argv[2] === 'borrarVehiculos') {
    connection.connect();
    var createVehiculos = 'TRUNCATE TABLE Vehiculo';
        connection.query(createVehiculos, function(err, rows){
        if(!err)
        console.log("Vehiculos borrados.");
        else
        console.log(err)
    })
}
