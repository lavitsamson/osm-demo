import { NextFunction, Request, Response } from "express";
import axios from "axios";
import osmtogeojson from "osmtogeojson";

export default class OSMController {
    async getBase(req: Request, res: Response, next: NextFunction) {
        res.status(404).send("Please provide bbox data");
    }

    async getOSMData(req: Request, res: Response, next: NextFunction) {
        const bbox: string = req.params.bbox;
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                const data = osmtogeojson(response.data);
                res.status(200).send(data);
            })
            .catch((error) => {
                const msg = error?.response?.data || "Something went wrong!";
                res.status(400).send(msg);
            });
    }
}