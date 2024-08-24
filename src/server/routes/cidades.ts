import { cidadesControllers } from "../controllers";
import { Router, Response, Request } from "express";

const router = Router();

router.post("/cidades", cidadesControllers.create);

export default router;
