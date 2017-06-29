//Thank to: http://onelinefun.com/

import * as express from "express";
import * as rx from "rxjs";
import * as HttpStatus from "http-status-codes";

import { getQuotes } from "../../core/api/quotes.core.api";
import { LocalApi } from "./local.api";


export class QuotesApi extends LocalApi {
    constructor() {
        super();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.getQuotes);
    }

    getQuotes = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        getQuotes(this.expressToAws(req))
            .subscribe(
                records => res.status(HttpStatus.OK).send(records),
                error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error)
            );
    }
}