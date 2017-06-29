import * as express from "express";
import * as aws from "aws-lambda";

import { environment } from "../environment";

export class LocalApi {
    router: express.Router;
    constructor() {
        this.router = express.Router();
    }

    expressToAws(req: express.Request): aws.APIGatewayEvent {
        return <aws.APIGatewayEvent>{
            body: req.body,
            headers: req.headers,
            httpMethod: req.method,
            isBase64Encoded: false,
            path: req.path,
            pathParameters: req.params,
            queryStringParameters: req.query,
            requestContext: null,
            resource: null,
            stageVariables: environment
        };
    }
}