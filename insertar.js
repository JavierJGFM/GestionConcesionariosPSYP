var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'proyecto'
});


if (process.argv[2] === 'crearConcesionarios') {
    connection.connect();

    var createConcesionario = 'INSERT INTO Concesionario VALUES ("1","AVO.SL", "JAÉN"), ("2","RenaultSD","MADRID"),("3","FERR","MADRID"),("4","DACIO-LOG IN","GRANADA"), ("5","FERRERO","VILCHES"), ("6","PORCHECLUB","FUENTEALBILLA"), ("7","LADRILLOS HERMANIS","LUGO"), ("8", "MENDRUGUILLO SA", "LEPE"), ("9", "ALMEJILLÓNA SA", "PAMPLONA"), ("10","FORD SF","BARCELONA")  ;'
    connection.query(createConcesionario, function(err, rows){
        if(!err)
        console.log("10 concesionarios creados.");
        else
        console.log(err)
    })
}

if (process.argv[2] === 'crearVehiculo') {
    connection.connect();
    var createVehiculos = 'INSERT INTO Vehiculo VALUES ("220000","705987-Q", "1"), ("18000","784468-CR","1"), ("5000","98745-JA","1"), ("78000","74586-W","2"), ("150","44578-K","2"),("2500","4578-K","3"),("478914","12345-J","5"),("242424","24578-P","6"),("789456","789988-H","8"),("321455","7059780-A","8")  ';
    connection.query(createVehiculos, function(err, rows){
        if(!err)
        console.log("10 vehiculos creados.");
        else
        console.log(err)
    })
}
