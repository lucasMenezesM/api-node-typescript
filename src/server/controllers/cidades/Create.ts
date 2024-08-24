import { Response, Request } from "express";
import * as yup from "yup";
import { ObjectSchema, number, string, object } from "yup";
import { StatusCodes } from "http-status-codes";

interface Icidade {
  nome: string;
}

let cidadeSchema: ObjectSchema<Icidade> = object({
  nome: string().required(),
});

export const create = async (
  req: Request<{}, {}, Icidade>,
  res: Response
): Promise<Response> => {
  try {
    const cidade = await cidadeSchema.validate(req.body);
    return res.json({ cidade: cidade });
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.status(StatusCodes.BAD_REQUEST).json({
      error: yupError.message,
    });
  }
};
