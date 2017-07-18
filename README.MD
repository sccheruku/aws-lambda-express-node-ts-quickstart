# aws-lambda-express-node-ts-quickstart

This project provides a quickstart setup for Serverless projects which can also be run locally for quicker iteration/development.

  - Builds from Typescript.
  - Express server runs on port 3000
  - AWS Lambda requirements: Node 6.10, NPM: 3.8.6

### build
Build the source from TypeScript to JavaScript:
```sh
$ npm run build
```

### run locally
Run your functions locally as a REST API:
```sh
$ npm run start-dev
```

### Routes for testing:
```sh
GET  /api/jokes
GET  /api/jokes/random
POST /api/jokes
GET  /api/quotes
```

### deploy to aws lambda
deploy the built code to AWS Lambda using Serverless
```sh
$ npm run deploy
```
