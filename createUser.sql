CREATE USER empleado IDENTIFIED BY 'empleado';
grant insert,update,delete,select on proyecto.Concesionario to empleado;
grant insert,update,delete,select on proyecto.Vehiculo to empleado;
