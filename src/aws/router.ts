import * as rx from "rxjs";
import * as aws from "aws-lambda";
import * as HttpStatus from "http-status-codes";

import * as quotesCoreApi from "../core/api/quotes.core.api";
import * as jokesCoreApi from "../core/api/jokes.core.api";



exports.handler = function (event: aws.APIGatewayEvent, context: aws.Context, callback: aws.Callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    let done = function (err, res) {
        return callback(null, {
            statusCode: err ? (err.status || '400') : '200',
            body: err ? JSON.stringify(err) : JSON.stringify(res),
            headers: {
                'Content-Type': 'application/json',
                //"Access-Control-Allow-Origin": "*"
            },
        });
    }

    // get handler for requested resource
    let route = routes.find(route => route.path == event.path && route.httpMethod == event.httpMethod);
    if (route) {
        (<rx.Observable<any>>route.handler(event))
            .subscribe(result => {
                done(null, result);
            }, error => {
                done(error, null);
            });
    }
    else {
        done({ status: HttpStatus.NOT_FOUND, event: event }, null);
    }
};

// Basic Route Definition - Feel free to implement your own.
const routes = [
    //{ path: "/api", httpMethod: "GET", handler: coreApi.get },
    { path: "/api/jokes", httpMethod: "GET", handler: jokesCoreApi.getJokes },
    { path: "/api/jokes", httpMethod: "POST", handler: jokesCoreApi.createJoke },
    { path: "/api/jokes/random", httpMethod: "GET", handler: jokesCoreApi.getRandomJoke },
    { path: "/api/quotes", httpMethod: "GET", handler: quotesCoreApi.getQuotes }
]