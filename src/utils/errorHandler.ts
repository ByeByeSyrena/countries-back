import { NextFunction, Request, Response } from "express";

type fnT = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const errorHandler = (fn: fnT) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default errorHandler;