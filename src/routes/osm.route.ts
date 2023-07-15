import OSMController from "controllers/osm.controller";
import { Router, Request, Response, NextFunction } from "express";

const osm = new OSMController();
const osmRoute = Router();

osmRoute.get("/:bbox?", (req: Request, res: Response, next: NextFunction) => {
    osm.getOSMData(req, res, next);
});

export default osmRoute;