import * as express from "express";
import * as rx from "rxjs";
import * as HttpStatus from "http-status-codes";

import * as jokesCoreApi from "../../core/api/jokes.core.api";
import { LocalApi } from "./local.api";


export class JokesApi extends LocalApi {
    constructor() {
        super();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.getJokes);
        this.router.post("/", this.createJoke);
        this.router.get("/random", this.getRandomJoke);
    }

    getJokes = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        jokesCoreApi.getJokes(this.expressToAws(req))
            .subscribe(
            records => res.status(HttpStatus.OK).send(records),
            error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error)
            );
    }
    createJoke = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        jokesCoreApi.createJoke(this.expressToAws(req))
            .subscribe(
                record => res.status(HttpStatus.OK).send(record),
                error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error)
            );
    }
    getRandomJoke = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        jokesCoreApi.getRandomJoke(this.expressToAws(req))
            .subscribe(
                records => res.status(HttpStatus.OK).send(records),
                error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error)
            );
    }

}