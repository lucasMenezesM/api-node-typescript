import express from "express";
import { Request, Response } from "express";

export const app = express();

interface test {}
app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Hello world" });
});
