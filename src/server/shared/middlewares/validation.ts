import { RequestHandler } from "express";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T extends object>(schema: yup.ObjectSchema<T>) => yup.ObjectSchema<T>;

type TAllSchemas = Record<TProperty, yup.ObjectSchema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidadeFunction = (getAllSchemas: TGetAllSchemas) => RequestHandler;

//prettier-ignore
const validation: TValidadeFunction = (getAllSchemas): RequestHandler => async (req, res, next) => {

  const schemas = getAllSchemas(schema => schema);

  const errorResults: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach( ([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    } catch (error) {
      const yupError = error as yup.ValidationError;

      const validationErrors: Record<string, string> = {};

      yupError.inner.forEach((error) => {
        if (error.path) 
          validationErrors[error.path] = error.message;
      });
      
      errorResults[key as TProperty] = validationErrors;
      
    }
  });

  if (Object.entries(errorResults).length > 0) 
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorResults });
    
  return next();
};

export { validation };
