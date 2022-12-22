import { Router } from 'express';
import { getAllDocumentos,getAllDocuments } from '../controllers/postgres/documentoher.controllers';
const router = Router();

router.get('/paciente', getAllDocumentos);
// router.get('/todo/', getDocumento);
router.get('/todo/todo', getAllDocuments);

// /asignaciones-pendietes/:id

export default router;