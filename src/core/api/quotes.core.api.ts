import * as aws from "aws-lambda";
import * as rx from "rxjs";

import { Quote } from "../models/quote.core.model";

export function getQuotes(event: aws.APIGatewayEvent): rx.Observable<Quote[]> {
    return rx.Observable.of(quotesList());
}

//Thank to: https://www.brainyquote.com/quotes/topics/topic_amazing.html
function quotesList() {
    return [
        {
            content: "Nothing is work unless you'd rather be doing something else.",
            author: "George Halas"
        },
        {
            content: "All the rivers run into the sea; yet the sea is not full.",
            author: "King Solomon"
        },
        {
            content: "Love and desire are the spirit's wings to great deeds.",
            author: "Johann Wolfgang von Goethe"
        },
        {
            content: "I rarely draw what I see. I draw what I feel in my body.",
            author: "Barbara Hepworth"
        },
        {
            content: "The secrets of success are a good wife and a steady job. My wife told me.",
            author: "Howard Nemerov"
        }
    ];
}