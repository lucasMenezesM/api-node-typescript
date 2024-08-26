// import { cidadesControllers } from "../controllers";
import { Router, Response, Request } from "express";
import CidadesController from "../controllers/CidadesController";

const router = Router();

const cidadesController = new CidadesController();

// router.post("/", cidadesControllers.bodyValidation, cidadesControllers.create);
router.post("/", cidadesController.getBodyValidation(), cidadesController.create());
router.get("/", cidadesController.getAllValidation(), cidadesController.getAllCidades());

export default router;
