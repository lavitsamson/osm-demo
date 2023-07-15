import { Router } from "express";
import osmRoute from "./osm.route";


const router = Router();

router.use('/explore', osmRoute);

export default router;