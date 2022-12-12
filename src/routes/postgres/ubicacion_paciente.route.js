import { Router } from 'express';

import { getUbicacionPaciente } from '../../controllers/postgres/ubicacion_paciente.controllers';

const router = Router();

router.get('/pacientes', getUbicacionPaciente);

export default router;
export const oppp = '2'