import { NextFunction, Response } from "express";

export class ResError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
  trace: string = "";
  data: { [key: string]: string } | undefined;

  constructor(
    message: string,
    statusCode?: number,
    trace?: string,
    data?: { [key: string]: string },
  ) {
    super(message);

    this.statusCode = statusCode || 400;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.trace = trace ? `${this.trace} <- ${trace}` : this.trace;
    this.data = data;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ResponseService {
  static success(res: Response, data?: any, code?: number) {
    return res.status(code || 200).json({ status: "success", data });
  }

  static error(
    next: NextFunction,
    message: string,
    code?: number,
    trace?: string,
    data?: { [key: string]: string },
  ) {
    return next(new ResError(message, code, trace, data));
  }
}
