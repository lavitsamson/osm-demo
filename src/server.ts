import express, { Application } from "express";
import router from "routes";

export default () => {
    const app: Application = express();
    app.use(router);
    return app;
}