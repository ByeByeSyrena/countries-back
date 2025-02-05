import { RequestHandler } from "express";
import { countries } from "../actions/country";
import { error } from "../text/errors";
import errorHandler from "../utils/errorHandler";
import { ResponseService } from "../utils/ResponseService";

export const list: RequestHandler = errorHandler(async (_, res, next) => {
  const list = await countries();

  if (!list) return ResponseService.error(next, error.listNotFound, 400, "list");

  ResponseService.success(res, list);
}
);
