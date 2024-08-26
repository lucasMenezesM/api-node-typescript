import { Response, Request, RequestHandler } from "express";
import { ObjectSchema, number, string, object } from "yup";
import { validation } from "../../shared/middlewares/validation";

interface Icidade {
  nome: string;
  estado: string;
}

interface IQuery {
  filter: string;
}

export const bodyValidation = validation((getSchema) => ({
  body: getSchema<Icidade>(
    object({
      nome: string().required().min(3),
      estado: string().required(),
    })
  ),
  query: getSchema<IQuery>(
    object({
      filter: string().required().min(3),
    })
  ),
}));

// export const validateBody: RequestHandler = async (req, res, next) => {
//   try {
//     await cidadeSchema.validate(req.body, { abortEarly: false });
//     return next();
//   } catch (error) {
//     const yupError = error as yup.ValidationError;

//     const validationErrors: Record<string, string> = {};

//     yupError.inner.forEach((error) => {
//       console.log(error.message);
//       if (!error.path) return;
//       validationErrors[error.path] = error.message;
//     });

//     return res.status(StatusCodes.BAD_REQUEST).json({
//       errors: validationErrors,
//     });
//   }
// };

export const create = (req: Request<{}, {}, Icidade>, res: Response): Response => {
  return res.json({ cidade: req.body });
};
