import { Router, Response, Request } from "express";
import CidadesController from "../controllers/CidadesController";

const router = Router();

const cidadesController = new CidadesController();

// GET REQUESTS
router.get("/", cidadesController.getAllValidation(), cidadesController.getAllCidades());
router.get("/:id", cidadesController.getByIdValidation(), cidadesController.getById());

// POST REQUESTS
router.post("/", cidadesController.getBodyValidation(), cidadesController.create());

// PUT REQUESTS
router.put("/:id", cidadesController.getUpdateValidation(), cidadesController.update());

// DELETE REQUEST
router.delete("/:id", cidadesController.getDeleteValidation(), cidadesController.delete());

export default router;
