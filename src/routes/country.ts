import express from "express";
import { routes } from "../configs/routes";
import { list, countryDetails } from "../controllers";
 
const router = express.Router();

router.get(routes.list, list);

router.get(routes.details, countryDetails);

export default router;
