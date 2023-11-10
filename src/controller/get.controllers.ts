import { ERROR } from "../auxiliar/mensaje";
import { Response , Request } from "express";
import { obtenerLimite } from "../database/database";
import { TABLA } from "../auxiliar/tabla";
import { Usuario } from "../auxiliar/type";

export async function obtenerUsuarios(req: Request ,res: Response): Promise<Response> {
    try {
        const usuarios = await obtenerLimite<Usuario>(TABLA.USUARIO, ["nombre", "maxPuntaje"], 5);
        return res.json({ exito: true , dato: usuarios } );        
    } catch {
        return res.json({ exito: false , mensaje: ERROR.SERVIDOR })
    }

}
