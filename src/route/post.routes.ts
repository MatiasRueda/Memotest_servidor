import { Router } from "express";
import { ingresarUsuario , registrarUsuario } from "../controller/post.controllers";
import { ingresar, registrar } from "../auxiliar/path";

const router = Router();

router.route(ingresar)
    .post((req, res) => { ingresarUsuario(req, res) })

router.route(registrar)
    .post((req, res) => { registrarUsuario(req, res) })

export default router;
