import { Response, Request } from "express";

interface Icidade {
  nome: string;
}

export const create = (req: Request<{}, {}, Icidade>, res: Response): Response => {
  const { nome } = req.body;
  return res.json({ nome: nome });
};
