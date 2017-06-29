import * as aws from "aws-lambda";
import * as rx from "rxjs";

import { Joke } from "../models/joke.core.model";
import { parseJSON } from "../helpers";

export function getJokes(event: aws.APIGatewayEvent): rx.Observable<Joke[]> {
    let minRating = (event.queryStringParameters && event.queryStringParameters.rating) ? parseFloat(event.queryStringParameters.rating) : 0;
    let filteredJokes = jokesList().filter(joke => joke.rating >= minRating);
    return rx.Observable.of(filteredJokes);
}

export function getRandomJoke(event: aws.APIGatewayEvent): rx.Observable<Joke> {
    let jokes = jokesList();
    return rx.Observable.of(jokes[Math.floor(Math.random() * jokes.length)]);
}

export function createJoke(event: aws.APIGatewayEvent): rx.Observable<Joke> {
    return rx.Observable.of(parseJSON(event.body));
}


//Thanks to: http://onelinefun.com/
function jokesList() {
    return [
        {
            content: "People don't get my puns. They think they're funny.",
            rating: Math.floor(Math.random() * 6)
        },
        {
            content: "Life is all about perspective. The sinking of the Titanic was a miracle to the lobsters in the ship's kitchen.",
            rating: Math.floor(Math.random() * 6)
        },
        {
            content: "She wanted a puppy. But I didn't want a puppy. So we compromised and got a puppy",
            rating: Math.floor(Math.random() * 6)
        }
    ];
}