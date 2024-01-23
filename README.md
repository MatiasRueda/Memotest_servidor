# Memotest server
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en Express y MySQL.</br>
La API le otorga a los usuarios las principales acciones para que estos puedan jugar al memotest. Como por ejemplo la posibilidad de agregar a una base de datos a un usuario nuevo, validar si un usuario a sido registrado o no para así poder ingresar, actualizar los puntajes y la posibilidad de obtener los usuarios que mas puntaje tienen.

</br>

## Tabla de contenido
* [Introducción](#Introducción)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)
* [Peticiones](#Peticiones)

</br>

## Tipo de proyecto
Proyecto individual.

</br>

## Tecnologías utilizadas
  - Express
  - TypeScript
  - MySQL
  - NodeJS

</br>

## Estructura

```
Memotest_servidor
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ auxiliar
│  │  ├─ mensaje.ts
│  │  ├─ path.ts
│  │  ├─ tabla.ts
│  │  └─ type.ts
│  ├─ controller
│  │  ├─ get.controllers.ts
│  │  ├─ post.controllers.ts
│  │  └─ put.controllers.ts
│  ├─ database
│  │  ├─ database.ts
│  │  └─ peticion.ts
│  ├─ express.ts
│  ├─ index.ts
│  └─ route
│     ├─ get.routes.ts
│     ├─ post.routes.ts
│     └─ put.routes.ts
├─ tsconfig.json
└─ tsconfig.spec.json

```

</br>

## Instalación
Es necesario instalar NodeJS, para eso es necesario ir a la siguiente pagina y descargarlo:
https://nodejs.org/en </br>

Una vez clonado el repositorio o descargado el zip ( y después de extraerlo ). 
Abrir la terminal en la carpeta donde se clono ( o se extrajo ) y escribir el siguiente comando.
```
npm i
```
Esto instalara las dependencias que el proyecto necesita

</br>

## Uso
Hay dos formas de usar la API: </br>
**Local**: </br>

Para poder utilizar el proyecto es necesario tener una conexión a una base de datos y aplicar el siguiente comando:
```
npm run dev
```

**En linea**: </br>
En caso de querer utilizarla en linea dirigirse a la siguiente dirección:
```
memotest-fy45.onrender.com
```

> [!Note]
> Tanto el server como la base de datos pueden ser lentas. Por favor tenga paciencia.

</br>

## Peticiones
Puede utilizar programas como PostMan , ThunderClient o el navegador ( en caso de que lo este utilizando la API en linea ).  
Para poder realizar las peticiones debe seguir el siguiente el siguiente patrón:
```
https://{api}/{endpoint}
```
Por ejemplo en caso de estar utilizando en linea y querer obtener los usuarios:
```
https://memotest-fy45.onrender.com/usuarios
```

### Tipo de datos
Distintos tipos de datos que se manejan en todo el proyecto

#### Usuario
Propiedad | Tipo| Descripción
-------- | ---- | ------
`id` | int | Es el identificador del usuario. 
`nombre` | Boolean | Identificador para que vean los demas usuarios.
`contrasenia` | String o Undefined | Palabra secreta conocida únicamente por el usuario.
`maxPuntaje` | int | El numero máximo que se alcanzo en el juego. 
`reglas` | int | Valor entre 0 o 1 para saber si mostrar las reglas. 

#### Respuesta

Propiedad | Tipo| Descripción
-------- | ---- |  -----------
`exito` | Boolean | Indica que si todo salió bien o mal.
`mensaje` | String o Undefined | Texto para que lea la persona.
`dato` | any o Undefined | La información que pide el usuario.


### Peticiones HTTP y su código de éxito

Método| Código
-------|------------------------
GET    |`200-OK`
POST   |`200-OK`
PUT    |`200-OK`

### Error
En caso de ocurrir algún error se enviara el siguiente Json ( tipo <a href="#respuesta">Respuesta</a> )
:
```json
{
  "exito": false,
  "mensaje": "No se enviaron datos"
}
```
> Es solo un ejemplo el mensaje de error puede variar

</br>

###  GET
####  Obtener usuarios
**Endpoint**: "usuarios" </br>
Se obtiene los primeros 5 usuarios con puntaje mas alto </br>
En caso de que todo haya salido bien se tendrá una respuesta de este estilo:
```json
{
	"exito": true,
	"dato": [
		{	
			"id": 1,
			"nombre": "Matias",
			"maxPuntaje": 1,
			"reglas": 0
		},
		{	
			"id": 2,
			"nombre": "Lucas",
			"maxPuntaje": 112,
			"reglas": 1
		},
		{	
			"id": 3,
			"nombre: "Estaban",
			"maxPuntaje": 311,
			"reglas": 0
		},
		{	
			"id": 4,
			"nombre": "Flor",
			"maxPuntaje": 3131,
			"reglas": 1
		},
				{	
			"id": 5,
			"nombre": "Carla",
			"maxPuntaje": 50,
			"reglas": 0
		}
	]
}
```
> Es solo un ejemplo la cantidad de usuario enviados puede variar

En este caso **dato** es de tipo **Usuario[]**  ( tipo <a href="#usuario">Usuario</a> )

</br>

### POST
#### Ingresar usuario
**Endpoint**: "ingresar" </br>
Un usuario puede recuperar sus datos
El Request Body que se debe enviar:
```json
{
	"nombre": "Matias",
	"contrasenia": "123456789"	
}
```
>Es solo un ejemplo los valores del Request Body pueden variar

Propiedad | Tipo| Requerido |Descripción
-------- | ---- | :------: | -----------
`nombre` | String |  ✔ |Identificador para que vean los demás usuarios.
`contrasenia` | String |  ✔ | Contraseña ingresada por el fue usuario.

En caso de que todo haya salido bien se tendrá una respuesta de este estilo:

```json
{
	"exito": true,
	"mensaje": "Usuario logueado correctamente"
	"dato": {
		"id": 1,
	    "nombre": "Matias",
	    "maxPuntaje": 100,
	    "reglas": 0
	}	
}
```
>Es solo un ejemplo el mensaje puede variar,  al igual que la información del usuario

En este caso **dato** es de tipo **Usuario**  ( tipo <a href="#usuario">Usuario</a> )

</br>

#### Registrar usuario
**Endpoint**: "registrar" </br>
Un usuario ingresa a la base datos
El Request Body que se debe enviar:
```json
{
	"nombre": "Matias",
	"contrasenia": "123456789",
	"confirContrasenia": "123456789"	
}
```
>Es solo un ejemplo los valores del Request Body pueden variar

Propiedad | Tipo| Requerido | Descripción
-------- | ---- | :------: | -----------
`nombre` | String |  ✔ | Identificador para que vean los demás usuarios.
`contrasenia` | String |  ✔ | Contraseña ingresada por el fue usuario.
`confirContrasenia` | String |  ✔ | Contraseña utilizada para validar la "contrasenia".

En caso de que todo haya salido bien se tendrá una respuesta de este estilo:
```json
{
	"exito": true,
	"mensaje": "Datos actualizados",
}
```
>Es solo un ejemplo el mensaje puede variar

</br>

### PUT
#### Actualizar usuario
**Endpoint**: "actualizar" </br>
Modifica los valores maxPuntaje o reglas del Usuario
El Request Body que se debe enviar:
```json
{
	"id": 1,
	"nombre": "Matias",
	"maxPuntaje": 50,
	"reglas": 0
}
```
>Es solo un ejemplo los valores del Request Body pueden variar

Propiedad | Tipo | Requerido | Descripción
-------- | ---- | :------: | ------
`id` | int | ✔ |  Es el identificador del usuario. 
`nombre` | Boolean |  ✔ | Identificador para que vean los demas usuarios.
`maxPuntaje` | int |  ✔ | El numero máximo que se alcanzo en el juego. 
`reglas` | int | ✔ |  Valor entre 0 o 1 para saber si mostrar las reglas. 

En caso de que todo haya salido bien se tendrá una respuesta de este estilo:
```json
{
	"exito": true,
	"mensaje": "Datos actualizados",
}
```
>Es solo un ejemplo el mensaje puede variar
