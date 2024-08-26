import * as yup from "yup";
import { validation } from "../shared/middlewares/validation";

export interface Icidade {
  nome: string;
}

export interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export interface IparamsId {
  id?: number;
}

export interface updateBody {
  nome: string;
}

export const bodyValidation = validation((getSchema) => ({
  body: getSchema<Icidade>(
    yup.object({
      nome: yup.string().required().min(3),
    })
  ),
}));

export const getAllCidadesValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object({
      page: yup.number().moreThan(0),
      limit: yup.number().moreThan(0),
      filter: yup.string(),
    })
  ),
}));

export const getCidadeByIdValidation = validation((getSchema) => ({
  params: getSchema<IparamsId>(
    yup.object({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const updateCidadeValidation = validation((getSchema) => ({
  body: getSchema<updateBody>(
    yup.object({
      nome: yup.string().min(3).required(),
    })
  ),
  params: getSchema<IparamsId>(
    yup.object({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));

export const deleteCidadeValidation = validation((getSchema) => ({
  params: getSchema<IparamsId>(
    yup.object({
      id: yup.number().integer().required().moreThan(0),
    })
  ),
}));
