import OSMController from "controllers/osm.controller";
import { Router, Request, Response, NextFunction } from "express";

const osm = new OSMController();
const osmRoute = Router();

osmRoute.get("/:bbox?", (req: Request, res: Response, next: NextFunction) => {
    // Parameter bbox kept optional to avoid route unavailable error in case bbox data is not provided
    // The user will receive error from OSM instead.
    osm.getOSMData(req, res, next);
});

export default osmRoute;