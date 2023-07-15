import request from "supertest";
import { expect } from "chai";
import server from "server";


const app = server();

describe("OSM test", () => {
    /*
        Testing 3 states 
        1) If bbox data is not provided
        2) If the data is provided and is weel under the node limit set by OSM.
        3) If the data is provided but exceeds the node limit. 
    */

    it("API call without bbox data", () => {
        return request(app).get('/explore').expect(400).expect("The parameter bbox is required, and must be of the form min_lon,min_lat,max_lon,max_lat.");
    })

    it("API call with bbox data in therange", () => {
        return request(app).get('/explore/-0.01,51,0.1,51.02').expect(200);
    })

    it("API call with bbox data exceeding the range", () => {
        return request(app).get('/explore/-1.01,51,0.1,51.02').expect(400).expect("You requested too many nodes (limit is 50000). Either request a smaller area, or use planet.osm");
    })
})