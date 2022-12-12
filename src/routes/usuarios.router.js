import { Router } from "express";
import {signIn, signUp} from '../controllers/usuarios.controllers';
import { CreateUser, LoginUser } from "../schemas/usuarios.schema";
import { validatorHandle } from '../middleware/validator.handler';
const router = Router();

router.post('/signUp/', validatorHandle(CreateUser, 'query'), signUp);
router.post('/signIn/', validatorHandle(LoginUser, 'body'), signIn);

export default router;