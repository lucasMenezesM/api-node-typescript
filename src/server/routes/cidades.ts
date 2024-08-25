import { cidadesControllers } from "../controllers";
import { Router, Response, Request } from "express";

const router = Router();

router.post("/", cidadesControllers.bodyValidation, cidadesControllers.create);

export default router;
