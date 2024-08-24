import { Router, Response, Request } from "express";
import StatusCodes from "http-status-codes";

import { cidadesControllers } from "../controllers";

export const router = Router();

router.get("/", (req: Request, res: Response): Response => {
  return res.status(StatusCodes.OK).json({ message: "Hello world" });
});

router.post("/cidades", cidadesControllers.create);
