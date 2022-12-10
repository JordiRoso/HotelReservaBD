# Hotel de Reservas

## Table of Contents

- [Conocer](#about)
- [Empezar](#getting_started)
- [Uso](#usage)
- [API](#api)

## Conocer <a name = "about"></a>

El buscador de reservas esta creado con sequelize.Y tiene una base de datos con las tablas: Clientes, Reservas y Hoteles.
Pudiendo realizar busquedas  con los siguientees parametros:
Nombre,apellidos,telf.,email,dni,id,hotel,fecha de entrada, fecha de salida.
![Screenshot](img/esquemaHoteldeReservas.png)


##  Empezar <a name = "getting_started"></a>

Para utilizar el buscador de Reservas debes clonar el repositorio y seguir las instrucciones.



### Instalción

Una vez clonado el repositorio para que funcione correctamente y se instalen todas las dependencias requeridas hay que instalar:

```
npm install node
```


## Uso <a name = "usage"></a>

Par apoder usar hay que arrancar con:

```
npm run dev
```
Hay unos seeders por si se quiere utilizar el buscador independientemente de la carga de toda la Base de Datos.
Par utilizar los seeders:

```
npx sequelize-cli db:seed:all
```

## Api <a name = "api"></a>

El servidor es el siguiente:

```
https://hotelreservabd-production.up.railway.app/{api}
```

 GET:
 existen las siguientes apis:

 Clientes:{users}

 Clientes id:{users/(id)}

 Clientes name:{users/name/(name)}

 Clintes lastname:{users/lastname/(lastname)}

 Clientes email: {users/email/(email)}

 Clientes phone:{users/phone/(phone)}

 Clientes dni: {users/dni/(dni)}

 Hotel: {hotel}

 Hotel id:{hotel/(id)}

 Hotel name:{hotel/(namehotel)}

 Reservas id:{reserva/(id)}

 Reservas date in:{reserva/date_in_hotel/(date_in_hotel)}

 Reservas date out:{reserva/date_out_hotel/(date_out_hotel)}





