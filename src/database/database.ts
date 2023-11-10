import { Pool, createPool } from "mysql2/promise";
import { config } from "dotenv";
import { TABLA } from "../auxiliar/tabla";
import { insert, select, selectLimite, update } from "./peticion";
import { Condicion } from "../auxiliar/type";
import { compareSync, hashSync } from "bcrypt";

config();
const saltOrRounds: number = 10;

async function connect(): Promise<Pool> {

    const connection = await createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        connectionLimit: Number(process.env.CONEXION_LIMIT),
    })
    return connection;
}

export async function obtener<T>(tabla: TABLA, columnas: string[], condicion?: Condicion): Promise<T[]> {
    const conn: Pool = await connect();
    const peticion = select(tabla, columnas, condicion?.columna);
    const [filas]: any = await conn.query(peticion, condicion?.valor);
    conn.end();
    return Array.isArray(filas)? (filas as T[]) : ([filas] as T[]);
}

export async function obtenerLimite<T>(tabla: TABLA, columnas: string[], limite: number): Promise<T[]> {
    const conn: Pool = await connect();
    const peticion = selectLimite(tabla, columnas, "maxPuntaje" ,limite);
    const [filas]: any = await conn.query(peticion);
    conn.end();
    return Array.isArray(filas)? (filas as T[]) : ([filas] as T[]);
}


export async function agregar<T extends Object>(tabla: TABLA , dato: T): Promise<void> {
    const conn: Pool = await connect();
    const agregarDatos: T = JSON.parse(JSON.stringify(dato));
    if ("contrasenia" in agregarDatos && typeof agregarDatos.contrasenia == "string")
        agregarDatos.contrasenia = hashSync(agregarDatos.contrasenia, saltOrRounds);
    const peticion: string = insert(tabla);
    await conn.query(peticion, agregarDatos);
    await conn.end();
}

export async function actualizar<T extends object>(tabla: TABLA, dato: T, condicion?: string): Promise<void> {
    const conn: Pool = await connect();
    const peticion: string = update(tabla, condicion);
    if (!("id" in dato)) 
        return;
    await conn.query(peticion, [dato, dato.id]);
    await conn.end();
}

export function comparar(cadena: string, cadenaEncryptada: string): boolean {
    return compareSync(cadena, cadenaEncryptada);
}

export async function encryptar(contrasenia: string): Promise<string> {
    return hashSync(contrasenia, saltOrRounds);
}