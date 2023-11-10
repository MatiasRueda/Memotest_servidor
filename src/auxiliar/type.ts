export type Usuario = {
    id: number;
    nombre: string;
    contrasenia?: string;
    maxPuntaje: number;
    reglas: number;
}

export type RespuestaServer<T> = {
    exito: boolean,
    mensaje: string,
    dato?: T,
}

export type Condicion = {
    columna: string;
    valor: string;
};

export type UsuarioIngresar = {
    nombre: string;
    contrasenia: string; 
}