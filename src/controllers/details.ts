import { RequestHandler } from "express";
import { details, flag, population, } from "../actions/country";
import { error } from "../text/errors";
import errorHandler from "../utils/errorHandler";
import { ResponseService } from "../utils/ResponseService";

interface Neighbor {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | string[];
}

export const countryDetails: RequestHandler = errorHandler(
  async (req, res, next) => {
    const country = req.query.country as string || "Ukraine";
    const code = req.query.code as string || "Ukraine";

    if (!country || !code) return ResponseService.error(next, error.countryIsMissing, 404, "list");

    let errors: any = [];

    const detailsData: any = await details(code);
    if (!detailsData) {
      errors.push({ error: error.countryNotFound });
    }

    const flagData: any = await flag(country);
    if (!flagData) { 
      errors.push({ error: error.flagNotFound });
    }

    const populationData: any = await population(country);
    if (!populationData) {
      errors.push({ error: error.populationNotFound });
    }

    const neighbors = detailsData.borders?.map((neighbor: Neighbor) => ({
      country: neighbor.commonName,
      code: neighbor.countryCode
    }));

    const flagUrl = flagData?.flag;
    const populationCounts = populationData?.data?.populationCounts;

    const data = {
      country: detailsData.officialName ?? "",
      code: detailsData.countryCode ?? "",
      neighbors: neighbors ?? [],
      flag: flagUrl ?? "",
      population: populationCounts ?? [],
    };

    ResponseService.success(res, { ...data, errors });
  });