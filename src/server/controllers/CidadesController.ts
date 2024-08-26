import { RequestHandler, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../shared/middlewares/validation";
import { string, object } from "yup";
import * as yup from "yup";

interface Icidade {
  nome: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export default class CidadesController {
  private bodyValidation: RequestHandler;
  private getAllCidadesValidation: RequestHandler;

  constructor() {
    // Fill in the Body Validation
    this.bodyValidation = validation((getSchema) => ({
      body: getSchema<Icidade>(
        object({
          nome: string().required().min(3),
        })
      ),
    }));

    // Fill in the Get All cidades Validation
    this.getAllCidadesValidation = validation((getSchema) => ({
      query: getSchema<IQueryProps>(
        object({
          page: yup.number().moreThan(0),
          limit: yup.number().moreThan(0),
          filter: yup.string(),
        })
      ),
    }));
  }

  //   GETTERS AND SETTERS
  public getBodyValidation(): RequestHandler {
    return this.bodyValidation;
  }

  public getAllValidation(): RequestHandler {
    return this.getAllCidadesValidation;
  }

  //   REQUEST HANDLERS FUNCTIONS
  /**
   * Create a city
   * @returns RequestHandler
   */
  public create(): RequestHandler {
    return (req: Request<{}, {}, Icidade>, res: Response): Response => {
      return res.status(StatusCodes.CREATED).json({ cidade: req.body });
    };
  }

  public getAllCidades(): RequestHandler {
    return (req: Request<{}, {}, {}, IQueryProps>, res: Response): Response => {
      return res.json(req.query);
    };
  }
}
