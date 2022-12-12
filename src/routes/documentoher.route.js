import { Router } from 'express';
import { getDocumento, getAllDocumentos,getAllDocuments } from '../controllers/documentoher.controllers';
const router = Router();

router.get('/paciente', getAllDocumentos);
router.get('/todo/', getDocumento);
router.get('/todo/todo', getAllDocuments);

export default router;