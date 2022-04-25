import { Router } from "express";
import { createContrato, getMaxContrato, getOneContratos, getTipoContratos } from "../controllers/contratos.controllers";
const router = Router();
router.get('/MAX', getMaxContrato);
router.get('/', getTipoContratos);
router.get('/:CON_CODIGO', getOneContratos);
router.post('/', createContrato);

export default router;