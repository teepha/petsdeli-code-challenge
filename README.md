# Petsdeli Code Challenge

## Introduction

The purpose of this challenge is to create a RESTful API with a single endpoint that saves user interaction data in a MongoDB collection and return the result.

## Table of Contents

1. <a href="#link-to-hosted-app">Link to Hosted App</a>
2. <a href="#tech-stack-used">Tech Stack Used</a>
3. <a href="#application-features">Application Features</a>
4. <a href="#how-to-use">How To Use</a>
5. <a href="#author">Author</a>
6. <a href="#license">License</a>

## Link to Hosted App

- [API link](https://tmby5n5tz2.execute-api.us-east-1.amazonaws.com)

## Tech Stack Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Serverless](https://www.serverless.com/)

## Application Features

- Save user interaction records to a MongoDB collection.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash

# Clone this repository
$ git clone https://github.com/teepha/petsdeli-code-challenge.git

# Navigate into the cloned repository
$ cd petsdeli-code-challenge

# Install dependencies
$ npm install

# Create .env file for environmental variables in your root directory like the sample.env file and provide the keys

# Run the app
$ npm run local

# Check the port on the specified port on the env or 4000

# Run test
$ npm run test
```

## API endpoints

**Base_URL**-> http://localhost:3000

  - Save user interaction record:
    
  ```
  {
    path: '/users/interactions',
    method: POST,
    body: {
      userId: <string>,
      eventType: <string>,
      eventSource: <integer>,
    }
  } 
  ```
 

## Author

Lateefat Amuda

## License

ISC

---
