/**
 * @description arma un string con las columnas pasadas como argumento
 * @used unicamente en la funcion select.
 * @param columnas 
 * @returns un unico string con las columnas pasadas como argumento
 * @example crearColumnas(["nombre", "contrasenia", "DNI", "email"]) => "nombre,contrasenia,DNI,email"
 */

function crearColumnas(columnas: string[], tabla?: string): string {
    let columnasElegidas: string = "";
    if (!columnas.length) 
        return tabla? tabla + "." + "*" : "*";
    columnas.forEach((columna: string) => columnasElegidas += "," + (tabla? tabla +"."+ columna: columna));
    return columnasElegidas.slice(1);
} 

/**
 * @description arma la peticion del estilo SELECT.
 * @used para la funcion query.
 * @param tabla 
 * @param columnaElegida 
 * @param condicion 
 * @returns un string con el formato SELECT (dependiendo de los argumentos pasados).
 * @example select("usuario") => "SELECT * FROM usuario".
 * @example select("usuario", "nombre") => "SELECT nombre FROM usuario".
 * @example select("usuario", "nombre", "email") => "SELECT nombre FROM usuario WHERE email = ?".
*/

export function select(tabla: string, columnas?: string[], condicion?: string): string {
    let peticion: string = "SELECT ";
    let columna: string | string[] = !columnas? "*" : columnas;
    columna = !columnas || !columnas.length? "*" : crearColumnas(columnas); 
    peticion += columna + " FROM " + tabla;
    if (!condicion) return peticion;
    peticion += " WHERE " + condicion + " = ?";
    return peticion;
}

export function selectLimite(tabla: string, columnas: string[], ordenadoPor: string , limite: number): string {
    let peticion: string = "SELECT ";
    let columna: string | string[] = !columnas? "*" : columnas;
    columna = !columnas || !columnas.length? "*" : crearColumnas(columnas); 
    peticion += columna + " FROM " + tabla;
    peticion += " ORDER BY " + ordenadoPor + " DESC LIMIT " + limite.toString();
    return peticion;
}

/**
 * @description arma una peticion del estilo insert
 * @used en metodos del tipo query
 * @param tabla 
 * @returns un string con el formato de peticion insert
 * @example insert("usuario") => "INSERT INTO usuario SET ?".
 */

export function insert(tabla: string) {
    return "INSERT INTO " + tabla + " SET ?";
}

export function update(tabla: string, condicion?: string): string {
    if (!condicion) 
        return "UPDATE " + tabla + "SET ?";
    return "UPDATE " + tabla +" SET ? WHERE " + condicion + " = ?";
}