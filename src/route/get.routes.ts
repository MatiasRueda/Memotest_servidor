import { Router } from "express";
import { obtenerUsuarios } from "../controller/get.controllers";
import { usuarios } from "../auxiliar/path";

const router = Router();

router.route(usuarios)
    .get((req, res) => { obtenerUsuarios(req, res) })

export default router;