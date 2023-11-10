import { Response, Request } from "express";
import { Condicion, Usuario, UsuarioIngresar } from "../auxiliar/type";
import { agregar, comparar, obtener } from "../database/database";
import { TABLA } from "../auxiliar/tabla";
import { ERROR, EXITO } from "../auxiliar/mensaje";

export async function ingresarUsuario ( req: Request, res: Response ): Promise<Response> {
    try {
        if (!Object.keys(req.body).length) 
            return res.json({ exito: false , mensaje:ERROR.ENVIAR_DATOS }); 
        const usuario: UsuarioIngresar = req.body;
        const condicion: Condicion = {columna: "nombre", valor: usuario.nombre};
        const resultado: Usuario[] = await obtener<Usuario>(TABLA.USUARIO, [], condicion);
        if (!resultado.length)
            return res.json({ exito: false , mensaje: ERROR.INGRESAR });
        const [usuarioEncontrado] = resultado;
        if (!comparar(usuario.contrasenia, usuarioEncontrado.contrasenia!)) 
            return res.json({ exito: false , mensaje: ERROR.CONTRASENIA });
        const { contrasenia , ...datosUsuario } = usuarioEncontrado; 
        return res.json({ exito: true , mensaje: EXITO.INGRESAR , dato: datosUsuario });
    } catch {
        return res.json({ exito: false , mensaje: ERROR.SERVIDOR })
    }
}

export async function registrarUsuario ( req: Request, res: Response ): Promise<Response> {
    try {
        if (!Object.keys(req.body).length) 
            return res.json({ exito: false ,  mensaje: ERROR.ENVIAR_DATOS }); 
        const { confirContrasenia , ...usuario } = req.body;
        const condicion: Condicion = { columna: "nombre", valor: usuario.nombre };
        const resultado: Usuario[] = await obtener<Usuario>(TABLA.USUARIO, [], condicion);
        if (!!resultado.length) 
            return res.json({ exito: false , mensaje: ERROR.REGISTRAR });
        await agregar<Usuario>(TABLA.USUARIO, usuario);
        return res.json({ exito: true , mensaje: EXITO.REGISTRAR });
    } catch {
        return res.json({ exito: false , mensaje: ERROR.SERVIDOR })
    }
}
