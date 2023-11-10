import { Response, Request } from "express";
import { ERROR, EXITO } from "../auxiliar/mensaje";
import { actualizar, encryptar } from "../database/database";
import { TABLA } from "../auxiliar/tabla";
import { Usuario } from "../auxiliar/type";

export async function actualizarInformacion(req: Request, res: Response): Promise<Response> {
    try {
        if (!Object.keys(req.body).length) 
            return res.json({ exito: false , mensaje: ERROR.ENVIAR_DATOS });
        const usuario: Usuario = req.body;
        if ("contrasenia" in usuario)
            usuario.contrasenia = await encryptar(usuario.contrasenia!);
        await actualizar(TABLA.USUARIO, usuario, "id");
        return res.json({ exito: true ,  mensaje: EXITO.ACTUALIZAR });
    } catch {
        return res.json({ exito: false , mensaje: ERROR.SERVIDOR })
    }
}