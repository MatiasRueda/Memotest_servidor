import { Router } from "express";
import { actualizarInformacion } from "../controller/put.controllers";
import { actualizar } from "../auxiliar/path";
const router = Router();

router.route(actualizar)
    .put((req, res) => { actualizarInformacion(req, res) })


export default router;