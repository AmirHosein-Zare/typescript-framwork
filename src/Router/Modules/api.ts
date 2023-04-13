import { Router } from "express"; 
import  AuthController  from "../../Controller/Modules/AuthController";

const router = Router();

router.use(AuthController().setupActions());

export default router;