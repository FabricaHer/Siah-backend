import { Router } from 'express';

import { getAreaAtencion } from '../../controllers/postgres/area_atencion.controllers';
const router = Router();
getAreaAtencion
router.get('/area-atencion', getAreaAtencion);

export default router;
export const oppp = '2'