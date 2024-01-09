# Memotest server
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en Express y MySQL.
El server permite ingresar, registrar y actualizar a los jugadores que pueden o podrán participar en el memotest.

## Tipo de proyecto
Proyecto individual.

## Tecnologías utilizadas
  - Express
  - MySQL

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

## Instalación 
Es necesario instalar nodeJS, para eso es necesario ir a la siguiente pagina y descargarlo:
https://nodejs.org/en </br>

Una vez clonado el repositorio o descargado el zip ( y después de extraerlo ). 
Abrir la terminal en la carpeta donde se clono ( o se extrajo ) y escribir el siguiente comando.
```
npm i
```
Esto instalara las dependencias que el proyecto necesita

## Uso

Para poder utilizar el proyecto es necesario tener una conexión a una base de datos y aplicar el siguiente comando:
```
npm run dev
```
En caso de querer ver la pagina con server incluido y poder jugar: https://gleaming-pudding-4d279d.netlify.app

> [!Note]
> Tanto el server como la base de datos pueden ser lentas. Porfavor tenga paciencia.
