var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'proyecto'
});

if (process.argv[2] === 'create') {
    connection.connect();

    var createConcesionario = 'CREATE TABLE IF NOT EXISTS Concesionario (\
    Id VARCHAR(20) NOT NULL PRIMARY KEY, \
    Nombre VARCHAR(30) NOT NULL, \
    Localidad VARCHAR(20) NOT NULL \
    );'
    connection.query(createConcesionario, function(err, rows){
        if(!err)
        console.log(rows);
        else
        console.log(err)
    })


    var createVehiculos = 'CREATE TABLE IF NOT EXISTS Vehiculo (\
    Kms VARCHAR(20) NOT NULL, \
    Matricula VARCHAR(30) NOT NULL PRIMARY KEY, \
    IdConcesionario VARCHAR(20) NOT NULL, \
    FOREIGN KEY (IdConcesionario) REFERENCES Concesionario(Id) on delete cascade on update cascade \
    );'
    connection.query(createVehiculos, function(err, rows){
        if(!err)
        console.log(rows);
        else
        console.log(err)
    })

}