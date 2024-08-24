import { Router, Response, Request } from "express";
import StatusCodes from "http-status-codes";

export const router = Router();

router.get("/", (req: Request, res: Response): Response => {
  return res.status(StatusCodes.OK).json({ message: "Hello world" });
});

router.post("/", (req: Request, res: Response): Response => {
  console.log(req.body);
  return res.status(StatusCodes.ACCEPTED).json({ body: req.body });
});
