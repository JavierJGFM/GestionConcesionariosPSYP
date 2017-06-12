

    SE RECOMIENDA EL USO DEL PLUGIN RESTClient


---------------## FUNCIONAMIENTO ## -------------------

GET

IP:3000/concesionario @Devuelve un JSON con todos los concesionarios.

IP:3000/concesionario/:id @Devuelve un JSON con el concesionario con dicho id.

IP:3000/vehiculo @Devuelve un JSON con todos los vehiculos.

IP:3000/vehiculo/:matricula @Devuelve un JSON con el vehiculo con dicha matricula.


POST 

IP:3000/concesionario @Necesitas pasarle en el body un JSON válido.

IP:3000/vehiculo @Necesitas pasarle en el body un JSON válido.


PUT

IP:3000/concesionario/:id @Necesitas pasarle en el body un JSON válido y el id del concesionario a actualizar.

IP:3000/concesionario/:id @Necesitas pasarle en el body un JSON válido y la matricula del vehiculo a actualizar.

DELETE 

IP:3000/concesionario/:id @Borra según el id

IP:3000/vehiculo/:matricula @Borra según la matricula



---------------## SCRIPTS ## -------------------



CREACIÓN DE LAS TABLAS

node main.js create @Crea las dos tablas necesarias en MySQL.


INSERTANDO DATOS

node insertar.js crearConcesionarios @Crea 10 concesionarios a modo de ejemplo.

node insertar.js crearVehiculo @Crea 10 vehiculos a modo de ejemplo.


BORRANDO DATOS

node borrar.js borrarConcesionarios @Borra todos los registros de la tabla Concesionario.

node borrar.js borrarVehiculo @Borra todos los registros de la tabla Vehiculo.


CREAR USUARIO EN SQL

node createUsuario.js crearUsuario @Crea un empleado con permisos insert,update,delete y select.


AUTORES

Javier García Fdez-Medina

Eloy Castro
