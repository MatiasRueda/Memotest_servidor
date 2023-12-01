# Memotest server
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en Express y MySQL.
El server permite ingresar, registrar y actualizar a los jugadores que pueden o podrán participar en el memotest.

## Personas Contribuyentes
Proyecto realizado únicamente por mi.

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
Para poder utilizarlo el proyecto es necesario tener una conexión a un server y aplicar el siguiente comando:
```
npm run dev
```
En caso de querer ver la pagina con server incluido y poder jugar: https://gleaming-pudding-4d279d.netlify.app

> [!Nota]
> Tanto el server como la base de datos pueden ser lentas. Porfavor tenga paciencia.
