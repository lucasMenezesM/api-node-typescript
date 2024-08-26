import { RequestHandler, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import * as validation from "./CidadesValidations";

export default class CidadesController {
  private bodyValidation: RequestHandler = validation.bodyValidation;
  private getAllCidadesValidation: RequestHandler = validation.getAllCidadesValidation;
  private getCidadeByIdValidation: RequestHandler = validation.getCidadeByIdValidation;
  private updateValidation: RequestHandler = validation.updateCidadeValidation;
  private deleteValidation: RequestHandler = validation.deleteCidadeValidation;

  //   GETTERS AND SETTERS
  public getBodyValidation(): RequestHandler {
    return this.bodyValidation;
  }

  public getAllValidation(): RequestHandler {
    return this.getAllCidadesValidation;
  }

  public getByIdValidation(): RequestHandler {
    return this.getCidadeByIdValidation;
  }

  public getUpdateValidation(): RequestHandler {
    return this.updateValidation;
  }

  public getDeleteValidation(): RequestHandler {
    return this.deleteValidation;
  }

  //   REQUEST HANDLERS FUNCTIONS
  /**
   * Create a city
   * @returns RequestHandler
   */
  public create(): RequestHandler {
    return (req: Request<{}, {}, validation.Icidade>, res: Response): Response => {
      return res.status(StatusCodes.CREATED).json({ cidade: req.body });
    };
  }

  /**
   * Get a list of all cities from database
   * @returns RequestHandler
   */
  public getAllCidades(): RequestHandler {
    return (req: Request<{}, {}, {}, validation.IQueryProps>, res: Response): Response => {
      return res.json(req.query);
    };
  }

  /**
   * Get a city by its id
   * @returns RequestHandler<validation.IparamsId>
   */
  public getById(): RequestHandler<validation.IparamsId> {
    return (req: Request<validation.IparamsId>, res: Response): Response => {
      console.log("Get by id route");
      console.log(req.params);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Not implemented yet" });
    };
  }

  /**
   * Update a city by its Id
   * @returns RequestHandler<validation.IparamsId>
   */
  public update(): RequestHandler<validation.IparamsId> {
    return (
      req: Request<validation.IparamsId, {}, validation.updateBody>,
      res: Response
    ): Response => {
      console.log("Update Route");
      console.log(req.body);
      console.log(req.params);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Not implemented yet" });
    };
  }

  public delete(): RequestHandler<validation.IparamsId> {
    return (req: Request<validation.IparamsId>, res: Response): Response => {
      console.log("Delete route");
      console.log(req.params);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Not implemented yet" });
    };
  }
}
