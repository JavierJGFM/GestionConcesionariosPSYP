CREATE USER empleado@localhost IDENTIFIED BY 'empleado';
grant insert,update,delete,select on proyecto.Concesionario to empleado@localhost;
grant insert,update,delete,select on proyecto.Vehiculo to empleado@localhost;
grant execute on function proyecto.obtener_media to empleado@localhost;